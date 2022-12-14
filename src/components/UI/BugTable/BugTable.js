import React from "react";
import styles from "../BugTable/BugTable.module.scss"

const BugTable = () => {
  return (
    <div className={styles.container}>
      <button className={styles.btn}>Submit Issue</button>
      <table className={styles.table}>
        <thead>
          <tr>
            <th>Bug</th>
            <th>Created</th>
            <th>Reporter</th>
            <th>Due</th>
            <th>Status</th>
            <th>Severity</th>
          </tr>
        </thead>

        <tbody className={styles["table-body"]}>
          <tr>
            <td className={styles.flex}>
              <input type="checkbox" />
              <a href="#">Project A Form is broken</a>
            </td>

            <td>09/21/2022</td>

            <td className={styles.reporter}>
              <span>Antonio Yellow</span>
            </td>

            <td>06/10/2023</td>
            <td className={styles.status}>
              <span>In Progress</span>
            </td>
            <td>Major</td>
          </tr>

          <tr>
            <td>
              <input type="checkbox" />
              <a href="#">Project A Form is broken</a>
            </td>

            <td>09/21/2022</td>

            <td>
              <span>Antonio Yellow</span>
            </td>

            <td>06/10/2023</td>
            <td className={styles.status}>
              <span>In Progress</span>
            </td>
            <td>Major</td>
          </tr>

          <tr>
            <td>
              <input type="checkbox" />
              <a href="#">Project A Form is broken</a>
            </td>

            <td>09/21/2022</td>

            <td>
              <span>Antonio Yellow</span>
            </td>

            <td>06/10/2023</td>
            <td className={styles.status}>
              <span>In Progress</span>
            </td>
            <td>Major</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default BugTable;
