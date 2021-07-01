// @ts-nocheck
import React, { useEffect, useState } from "react";
import { useTimesheet } from "../../contexts/timesheet";
import { WorkedHoursLabel } from "./styles";

export default function CurrentDateTime() {
  const context = useTimesheet();

  const [date, setDate] = useState();

  useEffect(() => {
    if (!Boolean(context.currentTimesheet)) return;
    let timerID = setInterval(
      () => setDate(context.calculateWorkingTime(context.currentTimesheet)),
      1000
    );

    return function cleanup() {
      clearInterval(timerID);
    };
  });

  return <WorkedHoursLabel>Tempo {date}</WorkedHoursLabel>;
}
