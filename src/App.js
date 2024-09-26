import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import PartnerPage from "./PartnerPage"; // Import your partner page component
import HomePage from "./HomePage"; // Example homepage component

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/partner/:id" element={<PartnerPage />} />
      </Routes>
    </Router>
  );
};

export default App;
