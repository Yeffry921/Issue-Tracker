import React from "react";
import Navbar from "./components/Navbar/Navbar";
import Dashboard from "./components/Dashboard/Dashboard";
import "./App.css";
import Sidebar from "./components/UI/Sidebar";

const App = () => {
  return (
    <div>
      <Navbar />
      <main style={{ display: "flex" }}>
        <Sidebar />
        <Dashboard />
      </main>
    </div>
  );
};

export default App;
