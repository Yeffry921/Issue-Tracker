import React, { useState } from "react";
import styles from "../Dashboard/Dashboard.module.scss";

const Dashboard = () => {
  const [open, setOpen] = useState(true);

  return (
    <section className={styles.dashboard}>
      <p>Get started working on your projects!</p>
    </section>
  );
};

export default Dashboard;
