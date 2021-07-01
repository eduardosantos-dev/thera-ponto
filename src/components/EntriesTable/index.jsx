// @ts-nocheck
import React from "react";
import { Container, Table } from "./styles";
import { useTimesheet } from "../../contexts/timesheet";

export default function EntriesTable() {
  const context = useTimesheet();

  const formatDateTime = (dateString) => {
    return dateString ? new Date(dateString).toLocaleString() : "";
  };

  const formatDate = (dateString) => {
    return dateString ? new Date(dateString).toLocaleDateString() : "";
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
              <tr>
                <td>{formatDate(item.start)}</td>
                <td>{formatDateTime(item.start)}</td>
                <td>{formatDateTime(item.startLunch)}</td>
                <td>{formatDateTime(item.endLunch)}</td>
                <td>{formatDateTime(item.end)}</td>
                <td>{item.totalTime}</td>
              </tr>
            ))}
        </tbody>
      </Table>
    </Container>
  );
}
