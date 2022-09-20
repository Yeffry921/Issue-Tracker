import React from "react";
import Sidebar from "../UI/Sidebar/Sidebar";
import { Outlet, useParams } from "react-router-dom";

const ProjectDashboard = () => {
  const { id } = useParams();
  return (
    <div style={{ flex: "1 1 0", display: "flex" }}>
      <Sidebar id={id} />
      <Outlet />
    </div>
  );
};

export default ProjectDashboard;
