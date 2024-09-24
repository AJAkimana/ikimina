import React from "react";
import { Button, ThemeProvider } from "@mui/material";
import { theme } from "./common/theme";
import RouteFiles from "./app.routes";

const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <Button>Click me</Button>
      <RouteFiles />
    </ThemeProvider>
  );
};

export default App;
