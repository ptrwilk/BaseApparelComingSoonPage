import { ThemeProvider, createTheme } from "@mui/material";
import "./styles.css";
import BaseApparelCommingSoonPage from "./Components/BaseApparelCommingSoonPage/BaseApparelCommingSoonPage";

const theme = createTheme({
  typography: {
    body1: {
      fontSize: 16,
    },
    h1: {
      fontSize: 70,
    },
    fontFamily: "Josefin Sans",
  },
});

function App() {
  return (
    <ThemeProvider theme={theme}>
      <div className="app">
        <BaseApparelCommingSoonPage />
      </div>
    </ThemeProvider>
  );
}

export default App;
