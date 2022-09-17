import React from "react";
import Navbar from "./components/Navbar/Navbar";
import Dashboard from "./components/Dashboard/Dashboard";
import "./App.css";
import { Routes, Route } from "react-router-dom";
import ProjectList from "./components/UI/ProjectList";
import Project from "./components/Projects/Project";
import ProjectFeed from "./ProjectFeed";
import AddIssue from "./components/UI/AddIssue";
import Issue from "./Issue";

const App = () => {
  return (
    <div className="layout-container">
      <Navbar />
      <main>
        <Routes>
          <Route path="/" element={<Dashboard />} />
          <Route path="projectlist" element={<ProjectList />} />
          <Route path="project" element={<Project />}>
            <Route path="/project/feed/:id" element={<ProjectFeed />} />
            <Route path="/project/addIssue/:id" element={<AddIssue />} />
            <Route path="/project/issues/:id" element={<Issue />} />
          </Route>
        </Routes>
      </main>
    </div>
  );
};

export default App;
