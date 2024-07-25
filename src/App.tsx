import { AppBar, CssBaseline, Toolbar, Typography } from "@mui/material";
import React from "react";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import Sidebar from "./components/Sidebar";
import Home from "./pages/HomePage";

const App: React.FC = () => {
  return (
    <Router>
      <CssBaseline />
      <div style={{ display: "flex" }}>
        <Sidebar />
        <div style={{ flexGrow: 1, padding: "1rem" }}>
          <AppBar position="static">
            <Toolbar>
              <Typography variant="h6" component="div">
                My App
              </Typography>
            </Toolbar>
          </AppBar>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/RecordingSessions" element={<RecordingSession />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
};

export default App;
