// @ts-nocheck
import { createContext, useContext, useEffect, useState } from "react";
import api from "../services/api";
import { useAuth } from "./auth";

const TimesheetContext = createContext({});

export const TimesheetProvider = ({ children }) => {
  const [timesheet, setTimesheet] = useState(null);
  const authContext = useAuth();

  useEffect(() => {
    if (!authContext.isAuthenticated) return;
    GetTimesheetList();
  }, [authContext]);

  async function GetTimesheetList() {
    const response = await api.get("/Timesheet");
    setTimesheet(response.data.items);
  }

  return (
    <TimesheetContext.Provider value={{ timesheet, GetTimesheetList }}>
      {children}
    </TimesheetContext.Provider>
  );
};

export function useTimesheet() {
  const context = useContext(TimesheetContext);
  return context;
}
