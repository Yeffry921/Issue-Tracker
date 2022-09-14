import React from "react";
import Table from "../UI/Table";
import styles from "../Projects/Projects.module.scss";

const Projects = () => {
  const mockDProjects = [
    {
      name: "Sample Project #1",
      id: 1,
    },
    {
      name: "Sample Project #2",
      id: 2,
    },
    {
      name: "Sample Project #3",
      id: 3,
    },
  ];
  return <section className={styles.projects}>
    {mockDProjects.map((projects) => (
      <div
        key={projects.id}
        style={{
          margin: "25px",
          cursor: "pointer",
        }}
      >
        {projects.name}
      </div>
    ))}
  </section>;
};

export default Projects;
