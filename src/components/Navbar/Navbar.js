import React from "react";
import logo from "../../assets/img/logo.png";
import styles from "../Navbar/Navbar.module.scss";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <header className={styles.navbar}>
      <div>
        <img src={logo} className={styles.logo} alt="logo icon" />
      </div>
      <ul className={styles.menu}>
        <li>
          <NavLink to="/">Dashboard</NavLink>
        </li>
        <li>
          <NavLink to="/projects">Projects</NavLink>
        </li>
      </ul>
      <div className={styles.avatar}>
        <span>John Smith</span>
        <img src={logo} className={styles.logo} alt="" />
      </div>
    </header>
  );
};

export default Navbar;
