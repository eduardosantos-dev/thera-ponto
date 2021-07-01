// @ts-nocheck
import React from "react";
import { Container, TimeWrapper, EntriesButtonsWrapper } from "./styles";
import Header from "../../components/Header";
import CurrentDateTime from "../../components/CurrentDateTime";
import WorkedHours from "../../components/WorkedHours";
import Button from "../../components/Button";
import EntriesTable from "../../components/EntriesTable";
import { useTimesheet } from "../../contexts/timesheet";

export default function Home() {
  const context = useTimesheet();

  const buttons = [
    {
      id: 0,
      label: "Cheguei",
      type: "start",
    },
    {
      id: 1,
      label: "Fui almoçar",
      type: "startLunch",
    },
    {
      id: 2,
      label: "Voltei",
      type: "endLunch",
    },
    {
      id: 3,
      label: "Fui",
      type: "end",
    },
  ];

  const handleClick = (type) => {
    if (!context.timesheet) return;

    if (context.timesheet)
      if (type === "start") {
        context.CreateTimesheet();
      } else if (["startLunch", "endLunch", "end"].includes(type)) {
        context.UpdateTimesheet(type);
      }
  };

  function isDisabled(button) {
    switch (button.type) {
      case "start":
        return Boolean(context.currentTimesheet?.start);
      case "startLunch":
        return (
          !Boolean(context.currentTimesheet?.start) ||
          Boolean(context.currentTimesheet?.startLunch) ||
          Boolean(context.currentTimesheet?.endLunch) ||
          Boolean(context.currentTimesheet?.end)
        );
      case "endLunch":
        return (
          !Boolean(context.currentTimesheet?.start) ||
          !Boolean(context.currentTimesheet?.startLunch) ||
          Boolean(context.currentTimesheet?.endLunch) ||
          Boolean(context.currentTimesheet?.end)
        );
      case "end":
        return (
          !Boolean(context.currentTimesheet?.start) ||
          Boolean(context.currentTimesheet?.end) ||
          (Boolean(context.currentTimesheet?.startLunch) &&
            !Boolean(context.currentTimesheet?.endLunch))
        );
    }
  }

  return (
    <>
      <Header />
      <Container>
        <TimeWrapper>
          <CurrentDateTime />
          <WorkedHours />
        </TimeWrapper>
        <EntriesButtonsWrapper>
          {buttons.map((button) => (
            <Button
              key={button.id}
              onClick={() => handleClick(button.type)}
              primary={Boolean(context.currentTimesheet?.[button.type])}
              disabled={isDisabled(button)}>
              {button.label}
            </Button>
          ))}
        </EntriesButtonsWrapper>
        <EntriesTable />
      </Container>
    </>
  );
}
