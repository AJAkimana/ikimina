import React from "react";
import { Button, ThemeProvider, createTheme } from "@mui/material";

const theme = createTheme({
  palette: {
    primary: {
      main: "#1976d2", // Deep Sky Blue
    },
    secondary: {
      main: "#663399", // Rich Plum/Lavender
    },
  },
});
function App() {
  return (
    <ThemeProvider theme={theme}>
      <Button>Click me</Button>
    </ThemeProvider>
  );
}

export default App;
