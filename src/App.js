import React from "react";
import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar/Navbar";
import Dashboard from "./components/Dashboard/Dashboard";
import ProjectList from "./components/UI/ProjectList";
import ProjectDashboard from "./components/Projects/Project";
import ProjectFeed from "./components/ProjectFeed/ProjectFeed";
import AddIssue from "./AddIssue";
import Issue from "./Issue";
import "./App.css";

const App = () => {
  return (
    <div className="layout-container">
      <Navbar />
      <main>
        <Routes>
          <Route path="/" element={<Dashboard />} />
          <Route path="projectlist" element={<ProjectList />} />
          <Route path="project" element={<ProjectDashboard />}>
            <Route path="/project/feed/:id" element={<ProjectFeed />} />
            <Route path="/project/addIssue" element={<AddIssue />} />
            <Route path="/project/issues" element={<Issue />} />
          </Route>
        </Routes>
      </main>
    </div>
  );
};

export default App;
