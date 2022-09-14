import React from "react";
import Navbar from "./components/Navbar/Navbar";
import Dashboard from "./components/Dashboard/Dashboard";
import "./App.css";
import Sidebar from "./components/UI/Sidebar";
import Projects from "./components/Projects/Projects";
import { Routes, Route } from "react-router-dom";
import Issues from "./components/Issues/Issues";
import BugTable from "./components/UI/BugTable";

const App = () => {
  return (
    <div className="layout-container">
      <Navbar />
      <main>
        <Sidebar />
        <Routes>
          <Route path="/" element={<Dashboard />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/issues" element={<BugTable />} />
        </Routes>
      </main>
    </div>
  );
};

export default App;
