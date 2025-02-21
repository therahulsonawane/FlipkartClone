// import "./App.css";
import { Box } from "@mui/material";
//Components
import Header from "./components/header/Header";
import Home from "./components/home.jsx/Home";

function App() {
  return (
    <>
      <Header />
      <Box style={{ marginTop: 54 }}>
        <Home />
      </Box>
    </>
  );
}

export default App;
