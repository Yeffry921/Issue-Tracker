import React from "react";
import styles from "../Projects/Projects.module.scss";
import ProjectTable from "../UI/ProjectTable";

const Projects = () => {
  return (
    <section className={styles.projects}>
      <h1>Projects</h1>
      <ProjectTable />
    </section>
  );
};

export default Projects;
