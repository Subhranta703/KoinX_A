import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Page1 from "./pages/Page1";
import Page2 from "./pages/Page2";

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Page1 />} />
        <Route path="/coin-details" element={<Page2 />} />
      </Routes>
    </Router>
  );
};

export default App;
