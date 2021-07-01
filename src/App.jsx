import React from "react";
import Routes from "./routes";
import { AuthProvider } from "./contexts/auth";
import { TimesheetProvider } from "./contexts/timesheet";

function App() {
  return (
    <AuthProvider>
      <TimesheetProvider>
        <Routes />
      </TimesheetProvider>
    </AuthProvider>
  );
}

export default App;
