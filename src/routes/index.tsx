import React from "react";
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import GeneralHeaderComponent from "../pages/GeneralHeaderComponent";

const AppRoutes: React.FC = () => {
  return (
    <Router>
      <Routes>
        <Route path="/general-header" element={<GeneralHeaderComponent />} />
        <Route path="/" element={<Navigate to="/general-header" />} />
      </Routes>
    </Router>
  );
};

export default AppRoutes;
