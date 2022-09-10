import React, { useState } from "react";
import styles from "../Dashboard/Dashboard.module.scss";

const Dashboard = () => {
  return (
    <section className={styles.dashboard}>
      <p>Get started working on your projects!</p>

      <div className={styles["grid-container"]}>
        <div className={styles["grid-item"]}>
          <h4>In Progress</h4>
          <span>60</span>
        </div>

        <div className={styles["grid-item"]}>
          <h4>In Progress</h4>
          <span>60</span>
        </div>

        <div className={styles["grid-item"]}>
          <h4>In Progress</h4>
          <span>60</span>
        </div>

        <div className={styles["grid-item"]}>
          <h4>In Progress</h4>
          <span>60</span>
        </div>
      </div>

      <div className={styles["flex-container"]}>
        <div className={styles["flex-item"]}>
          <h4>Projects</h4>
          <ul>
            <li>Todo List</li>
            <li>Issue Tracker</li>
            <li>Weather App</li>
          </ul>
        </div>

        <div className={styles["flex-item"]}>
          <h4>Issues</h4>
          <ul>
            <li>Todo List</li>
            <li>Issue Tracker</li>
            <li>Weather App</li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default Dashboard;
