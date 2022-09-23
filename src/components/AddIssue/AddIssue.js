import React from "react";
import styles from "./AddIssue.module.scss";
import { AiOutlineCalendar } from "react-icons/ai";
import { useRef } from "react";
const AddIssue = () => {
  const dateRef = useRef(null);
  return (
    <section className={styles.container}>
      <div>
        <form action="">
          <div className={styles.title}>
            <label htmlFor="">Title</label>
            <input type="text" />
          </div>

          <div>
            <label htmlFor="">Due Date</label>
            <div className={styles["date-container"]}>
              <input className={styles.date} type="date" ref={dateRef} />
              <AiOutlineCalendar
                className={styles["date-icon"]}
                size={25}
                onClick={() => dateRef.current.focus()}
              />
            </div>
          </div>

          <div className={styles["priority-container"]}>
            <label htmlFor="">Priority</label>
            <select id="priority" className={styles.priority} name="">
              <option value="normal">Normal</option>
              <option value="high">High</option>
              <option value="low">Low</option>
            </select>
          </div>

          <button className={styles.btn}>Add</button>
        </form>
      </div>
    </section>
  );
};

export default AddIssue;
