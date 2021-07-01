import styled from "styled-components";

export const Container = styled.div`
  margin-top: 60px;
`;

export const Table = styled.table`
  width: 100%;
  thead tr {
    text-align: left;
    text-transform: uppercase;
    color: var(--thera-yellow);
  }

  tbody td {
    background-color: white;
  }

  tbody tr {
    &:nth-child(even) {
      background-color: red;
    }
  }
`;
