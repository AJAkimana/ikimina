// import { Button } from "@mui/material";
// import { ThemeProvider } from '@mui/material/styles';

// const theme = {
//   colors: {
//     primary: "#0070f3",
//     bg: "#fff",
//     text: "#333",
//     grey: "#aaa",
//   },
//   fontSize: {
//     small: "12px",
//     medium: "16px",
//     large: "24px",
//   },
// };
// function App() {
//   return (
//     <ThemeProvider theme={theme}>
//       <Button>Click me</Button>
//     </ThemeProvider>
//   );
// }
// export default App;

// import React from "react";
// import ReactDOM from "react-dom/client";
// import "./index.css";
// import App from "./App";
// import { ThemeProvider } from '@mui/material/styles';
// import { createTheme } from '@mui/material/styles';

// const theme = createTheme({
//   palette: {
//     primary: {
//       main: '#1976d2',
//     },
//     secondary: {
//       main: '#663399',
//     },
//   },
// });

// ReactDOM.createRoot(document.getElementById("root")).render(
//   <React.StrictMode>
//     <ThemeProvider theme={theme}>
//       <App />
//     </ThemeProvider>
//   </React.StrictMode>,
// );

import React from "react";
import { Box, Button } from "@mui/material";

function App() {
  return (
    <Box>
      <Button variant="contained">Hello World</Button>
    </Box>
  );
}

export default App;
