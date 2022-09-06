import React from "react";
import Navbar from "./components/Navbar/Navbar";
import "./App.css";

const App = () => {
  return (
    <main>
      {/* navbar in every page*/}
      <Navbar />

      {/* dashboard */}
      <div>Dashboard</div>
    </main>
  );
};

export default App;
