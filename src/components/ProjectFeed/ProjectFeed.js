import React from "react";
import styles from "../ProjectFeed/ProjectFeed.module.scss";
import { FaUserCircle } from "react-icons/fa";
import { GiBookshelf } from "react-icons/gi";
// Feed actions
// Adding project, adding new issue, adding task to project,

// This data is most likely fetched on component load
// user clicks on project list -> We fetch/CRUD based on route param which will be the ID
const projectData = {
  title: "Project Title",
  projectFeed: [
    {
      dateOfFeed: "Thur Sept 15, 2022",
      user: "Antonio",
      typeOfFeed: "Issue",
      daysAgo: "5 days ago",
    },
  ],
};

const ProjectFeed = () => {
  return (
    <section className={styles.container}>
      <header className={styles.heading}>
        <div className={styles["heading-wrapper"]}>
          <GiBookshelf size={35}/>
          <h1>{projectData.title}</h1>
        </div>
      </header>
      <div className={styles["feed-container"]}>
        <ul className={styles["feed-content"]}>
          <li className={styles.timeline}>
            <h4>Thur Sept 15, 2022</h4>
            <div className={styles.action}>
              <FaUserCircle />
              <span>User added a </span>
              <span>ACTION</span>
            </div>
          </li>

          <li className={styles.timeline}>
            <h4>Date</h4>
            <div className={styles.action}>
              <FaUserCircle />
              <span>User added a </span>
              <span>ACTION</span>
            </div>
          </li>

          <li className={styles.timeline}>
            <h4>Date</h4>
            <div className={styles.action}>
              <FaUserCircle />
              <span>User added a </span>
              <span>ACTION</span>
            </div>
          </li>
        </ul>
        <div className={styles.chart}>Chart</div>
      </div>
    </section>
  );
};

export default ProjectFeed;
