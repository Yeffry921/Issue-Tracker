import React from "react";
import Navbar from "./components/Navbar/Navbar";
import Dashboard from "./components/Dashboard/Dashboard";
import "./App.css";
import Sidebar from "./components/UI/Sidebar/Sidebar";
import Projects from "./components/Projects/Projects";
import { Routes, Route } from "react-router-dom";
import Issues from "./components/Issues/Issues";

const App = () => {
  return (
    <div className="layout-container">
      <Navbar />
      <main>
        <Routes>
          <Route path="/" element={<Dashboard />} />
          <Route path="/projects" element={<Projects />} />
        </Routes>
      </main>
    </div>
  );
};

export default App;
