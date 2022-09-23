import React from "react";
import Sidebar from "../UI/Sidebar/Sidebar";
import styles from '../ProjectDashboard/ProjectDashboard.module.scss'
import { Outlet, useParams } from "react-router-dom";

const ProjectDashboard = () => {
  const { id } = useParams();
  return (
    <div className={styles.dashboard}>
      <Sidebar id={id} />
      <Outlet />
    </div>
  );
};

export default ProjectDashboard;
