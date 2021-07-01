import styled from "styled-components";

export const Container = styled.div`
  margin-top: 60px;
  overflow-x: auto;
  display: block;
`;

export const Table = styled.table`
  width: 100%;

  thead tr {
    text-align: left;
    text-transform: uppercase;
    color: var(--thera-yellow);
  }

  tbody td {
    padding: 10px;
  }

  tbody tr {
    background-color: #fff;

    &:nth-child(even) {
      background-color: #e8e8e8;
    }
  }
`;
