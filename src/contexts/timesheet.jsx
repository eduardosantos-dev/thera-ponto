// @ts-nocheck
import { createContext, useContext, useEffect, useState } from "react";
import api from "../services/api";
import { useAuth } from "./auth";
import * as moment from "moment";

const TimesheetContext = createContext({});

export const TimesheetProvider = ({ children }) => {
  const [timesheet, setTimesheet] = useState(null);
  const [currentTimesheet, setCurrentTimesheet] = useState(null);
  const authContext = useAuth();

  useEffect(() => {
    if (!authContext.isAuthenticated) return;
    GetTimesheetList();
  }, [authContext]);

  useEffect(() => {
    if (!timesheet) return;

    const currentDate = new Date().toLocaleDateString();
    for (let i = 0; i < timesheet.length; i++) {
      if (new Date(timesheet[i].start).toLocaleDateString() === currentDate) {
        setCurrentTimesheet(timesheet[i]);
        return;
      }
    }
  }, [timesheet]);

  async function GetTimesheetList() {
    const response = await api.get("/Timesheet");

    const updatedTimesheet = response.data.items.map((item) => {
      return { ...item, totalWorkingTime: calculateTotalTime(item) };
    });

    setTimesheet(updatedTimesheet);
  }

  async function CreateTimesheet() {
    if (currentTimesheet) return;

    const response = await api.post("/Timesheet");

    if (response.status === 200) {
      GetTimesheetList();
    }
  }

  async function UpdateTimesheet(type) {
    if (!currentTimesheet?.id) return;

    let tzOffset = new Date().getTimezoneOffset() * 60000;
    let localISOTime = new Date(Date.now() - tzOffset).toISOString();

    const response = await api.put(`/Timesheet/${currentTimesheet.id}`, {
      [type]: localISOTime,
    });

    if (response.status === 204) {
      GetTimesheetList();
    }
  }

  function calculateTotalTime(item) {
    const startTime = moment(item.start);
    const endTime = moment(item.end);
    const startLunchTime = moment(item.startLunch);
    const endLunchTime = moment(item.endLunch);

    let totalWorkingTime;

    if (item.start && item.end) {
      const lunchDiff = moment(startLunchTime).diff(moment(endLunchTime));

      totalWorkingTime = moment
        .utc(moment(endTime).diff(moment(startTime).diff(lunchDiff)))
        .format("HH:mm:ss");
    }

    return totalWorkingTime;
  }

  function calculateWorkingTime(item) {
    if (item.start && item.end) {
      return calculateTotalTime(item);
    }

    const startTime = moment(item.start);
    const endTime = moment(item.end);
    const startLunchTime = moment(item.startLunch);
    const endLunchTime = moment(item.endLunch);

    let beforeLunch;
    let afterLunch;

    if (!Boolean(item.startLunch)) {
      beforeLunch = moment(moment(new Date()).diff(startTime)).format(
        "HH:mm:ss"
      );
    } else {
      beforeLunch = moment
        .utc(startLunchTime.diff(startTime))
        .format("HH:mm:ss");
    }

    if (!Boolean(item.endLunch)) {
      afterLunch = moment
        .utc(endLunchTime.diff(moment(new Date())))
        .format("HH:mm:ss");
    } else {
      afterLunch = moment(endTime.diff(endLunchTime)).format("HH:mm:ss");
    }

    return moment(beforeLunch, "HH:mm:ss")
      .add(moment.duration(afterLunch).as("milliseconds"), "milliseconds")
      .format("HH:mm:ss");
  }

  return (
    <TimesheetContext.Provider
      value={{
        timesheet,
        currentTimesheet,
        GetTimesheetList,
        CreateTimesheet,
        UpdateTimesheet,
        calculateTotalTime,
        calculateWorkingTime,
      }}>
      {children}
    </TimesheetContext.Provider>
  );
};

export function useTimesheet() {
  const context = useContext(TimesheetContext);
  return context;
}
