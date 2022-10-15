import { Routes, Route, Link } from "react-router-dom";

// Local file imports
import Home from './screens/Home/Home'

// MUI Imports
import { createTheme } from '@mui/material/styles';
import { ThemeProvider } from "@emotion/react";
import { CssBaseline } from "@mui/material";

const theme = createTheme({
  palette: {
    primary: {
      main: 'rgba(8, 10, 15, 0.95)'
    },
  }
})

function App() {
  return (
    <div className="App">
      <ThemeProvider theme={theme}>
        <CssBaseline/>
        <Home />
      </ThemeProvider>
    </div>
  );
}

export default App;
