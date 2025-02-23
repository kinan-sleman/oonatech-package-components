import React from "react";
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import GeneralHeaderComponent from "../pages/GeneralHeaderComponent";
import DataPreviewTypesComponent from "../pages/DataPreviewTypesComponent";
import MainInputComponent from "../pages/MainInputComponent";
import SidebarComponent from "../pages/SidebarComponent";

const AppRoutes: React.FC = () => {
  return (
    <Router>
      <Routes>
        <Route path="/general-header" element={<GeneralHeaderComponent />} />
        <Route path="/table" element={<DataPreviewTypesComponent />} />
        <Route path="/input" element={<MainInputComponent />} />
        <Route path="/sidebar" element={<SidebarComponent />} />
        <Route path="/" element={<Navigate to="/general-header" />} />
      </Routes>
    </Router>
  );
};

export default AppRoutes;
