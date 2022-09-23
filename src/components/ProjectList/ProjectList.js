import React from "react";
import { Link } from "react-router-dom";
import ProjectForm from "../UI/ProjectForm/ProjectForm";
import { useState } from "react";
import styles from "../ProjectList/ProjectList.module.scss";

const ProjectList = () => {
  const [projectFormIsShown, setProjectFormIsShown] = useState(false);

  // Project list has to get all the projects of that user when page is loaded

  // Project List should also handle the adding of projects
  return (
    <div className={styles.container}>
      <h1>Projects</h1>
      <button className={styles.btn} onClick={() => setProjectFormIsShown(true)}>
        Submit Project
      </button>
      {projectFormIsShown && (
        <ProjectForm onProjectShown={setProjectFormIsShown} />
      )}

      <table className={styles.table}>
        <thead>
          <tr>
            <th>Project</th>
            <th>Created</th>
            <th>Reporter</th>
            <th>Due</th>
            <th>Status</th>
          </tr>
        </thead>

        <tbody className={styles["table-body"]}>
          <tr className={styles.row}>
            <td className={styles.flex}>
              <input type="checkbox" />
              <Link to="/project/feed/921345546">Project A Form is broken</Link>
            </td>

            <td>09/21/2022</td>

            <td className={styles.reporter}>
              <span>Antonio Yellow</span>
            </td>

            <td>06/10/2023</td>
            <td className={styles.status}>
              <span>In Progress</span>
            </td>
        
          </tr>
          <tr>
            <td>
              <input type="checkbox" />
              <Link to="/projects/5675675">Project A Form is broken</Link>
            </td>

            <td>09/21/2022</td>

            <td>
              <span>Antonio Yellow</span>
            </td>

            <td>06/10/2023</td>
            <td className={styles.status}>
              <span>In Progress</span>
            </td>
          
          </tr>

          <tr>
            <td>
              <input type="checkbox" />
              <Link to="/projects/345345">Project A Form is broken</Link>
            </td>

            <td>09/21/2022</td>

            <td>
              <span>Antonio Yellow</span>
            </td>

            <td>06/10/2023</td>
            <td className={styles.status}>
              <span>In Progress</span>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default ProjectList;
