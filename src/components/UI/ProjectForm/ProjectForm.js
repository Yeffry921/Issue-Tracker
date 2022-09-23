import React from "react";
import { useState } from "react";
import Modal from "../Modal/Modal";
import styles from '../ProjectForm/ProjectForm.module.scss'

const ProjectForm = ({ onProjectShown }) => {
  const [value, setValue] = useState("");
  const checkValidation = (e) => {
    e.preventDefault();
    // if there is a value on project name then
    if (value) {
      onProjectShown(false);
      return
    }
    alert("Form is empty");
  };
  return (
    <Modal>
      <form action="" onSubmit={checkValidation} className={styles.form}>
        <label htmlFor="title">Project Name</label>
        <input
          type="text"
          value={value}
          onChange={(e) => setValue(e.target.value)}
        />

        <button className={styles.btn} type="submit">Add</button>
        <button className={styles.btn} onClick={() => onProjectShown(false)}>Cancel</button>
      </form>
    </Modal>
  );
};

export default ProjectForm;
