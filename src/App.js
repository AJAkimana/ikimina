import ThemeProvider, { Button } from "@mui/material";

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Button>Click me</Button>
    </ThemeProvider>
  );
}
export default App;
