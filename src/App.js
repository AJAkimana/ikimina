import React from "react";
import { Button, ThemeProvider, createTheme } from "@mui/material";


function App() {
  return (
    <ThemeProvider theme={theme}>
      <Button>Click me</Button>
    </ThemeProvider>
  );
}

export default App;
