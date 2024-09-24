import React from "react";
import { Button, ThemeProvider } from "@mui/material";
import { theme } from "./common/theme";
import { AppRoutes } from "./app.routes";

export const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <Button>Click me</Button>
      <AppRoutes />
    </ThemeProvider>
  );
};
