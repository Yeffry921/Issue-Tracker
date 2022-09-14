import React from "react";
import styles from '../Issues/Issues.module.scss'
import BugTable from '../UI/BugTable.js'

const Issues = () => {
  return (
    <section className={styles.issues}>
      <h1>Issues</h1>
      <BugTable />
    </section>
  );
};

export default Issues;
