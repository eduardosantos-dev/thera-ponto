import React from "react";
import { Container, Table } from "./styles";

export default function EntriesTable() {
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
          <tr>
            <td>Tablescon</td>
            <td>9 April 2019</td>
            <td>East Annex</td>
            <td>East Annex</td>
            <td>East Annex</td>
            <td>East Annex</td>
          </tr>
          <tr>
            <td>Capstone Data</td>
            <td>19 May 2019</td>
            <td>205 Gorgas</td>
            <td>205 Gorgas</td>
            <td>205 Gorgas</td>
            <td>205 Gorgas</td>
          </tr>
          <tr>
            <td>Tuscaloosa D3</td>
            <td>29 June 2019</td>
            <td>Github</td>
            <td>Github</td>
            <td>Github</td>
            <td>Github</td>
          </tr>
        </tbody>
      </Table>
    </Container>
  );
}
