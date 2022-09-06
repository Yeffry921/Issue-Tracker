import React from "react";
import logo from "../../img/logo.png";
import styles from "../Navbar/Navbar.module.css";

const Navbar = () => {
  return (
    <header className={styles.navbar}>
      <div>
        <img src={logo} className={styles.logo} alt="logo icon" />
      </div>
      <ul className={styles.menu}>
        <li><a href="#">Dashboard</a></li>
        <li><a href="#">Projects</a></li>
      </ul>
      <div className={styles.avatar}>
        <img src={logo} className={styles.logo} alt="" />
      </div>
    </header>
  );
};

export default Navbar;
