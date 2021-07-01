// @ts-nocheck
import React from "react";
import { Container, TimeWrapper, EntriesButtonsWrapper } from "./styles";
import Header from "../../components/Header";
import CurrentDateTime from "../../components/CurrentDateTime";
import WorkedHours from "../../components/WorkedHours";
import Button from "../../components/Button";
import EntriesTable from "../../components/EntriesTable";

export default function Home() {
  return (
    <>
      <Header />
      <Container>
        <TimeWrapper>
          <CurrentDateTime />
          <WorkedHours />
        </TimeWrapper>
        <EntriesButtonsWrapper>
          <Button>Cheguei</Button>
          <Button>Fui Almoçar</Button>
          <Button>Voltei</Button>
          <Button>Fui</Button>
        </EntriesButtonsWrapper>
        <EntriesTable />
      </Container>
    </>
  );
}
