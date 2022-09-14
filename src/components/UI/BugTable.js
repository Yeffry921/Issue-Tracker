import React from "react";
import styles from "../UI/BugTable.module.scss";

const BugTable = () => {
  return (
    <section className={styles.container}>
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

          {/*  */}

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
    </section>
  );
};

export default BugTable;
