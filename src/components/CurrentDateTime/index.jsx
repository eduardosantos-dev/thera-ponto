import React, { useEffect, useState } from "react";
import { CurrentDateTimeLabel } from "./styles";

export default function CurrentDateTime() {
  const [date, setDate] = useState(new Date());

  useEffect(() => {
    let timerID = setInterval(() => setDate(new Date()), 1000);

    return function cleanup() {
      clearInterval(timerID);
    };
  });
  return <CurrentDateTimeLabel>{date.toLocaleString()}</CurrentDateTimeLabel>;
}
