import React from "react";
import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar/Navbar";
import Dashboard from "./components/Dashboard/Dashboard";
import ProjectList from "./components/UI/ProjectList";
import ProjectDashboard from "./components/ProjectDashboard/ProjectDashboard";
import ProjectFeed from "./components/ProjectFeed/ProjectFeed";
import AddIssue from "./AddIssue";
import Issues from "./components/Issues/Issues"
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
            <Route path="/project/addIssue/:id" element={<AddIssue />} />
            <Route path="/project/issues/:id" element={<Issues />} />
          </Route>
        </Routes>
      </main>
    </div>
  );
};

export default App;
