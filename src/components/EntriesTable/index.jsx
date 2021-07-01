// @ts-nocheck
import React from "react";
import { Container, Table } from "./styles";
import { useTimesheet } from "../../contexts/timesheet";

export default function EntriesTable() {
  const context = useTimesheet();

  const formatTime = (dateString) => {
    return dateString
      ? new Date(dateString).toLocaleTimeString(
          "pt-BR",
          { timeZone: "UTC" },
          {
            timeStyle: "short",
          }
        )
      : "";
  };

  const formatDate = (dateString) => {
    return dateString
      ? new Date(dateString).toLocaleDateString("pt-BR", { timeZone: "UTC" })
      : "";
  };

  return (
    <Container>
      <Table>
        <thead>
          <tr>
            <th>Data</th>
            <th>Hora início</th>
            <th>Almoço início</th>
            <th>Almoço fim</th>
            <th>Hora fim</th>
            <th>Tempo</th>
          </tr>
        </thead>
        <tbody>
          {context.timesheet &&
            context.timesheet.map((item) => (
              <tr key={item.id}>
                <td>{formatDate(item.start)}</td>
                <td>{formatTime(item.start)}</td>
                <td>{formatTime(item.startLunch)}</td>
                <td>{formatTime(item.endLunch)}</td>
                <td>{formatTime(item.end)}</td>
                <td>{item.totalWorkingTime}</td>
              </tr>
            ))}
        </tbody>
      </Table>
    </Container>
  );
}
