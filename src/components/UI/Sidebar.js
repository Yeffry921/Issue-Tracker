import React, { useState } from "react";
import styles from "../UI/Sidebar.module.scss";
import { BsArrowLeftShort, BsSearch } from "react-icons/bs";
import { AiFillEnvironment } from "react-icons/ai";
import { RiDashboardFill } from "react-icons/ri";
import { NavLink } from "react-router-dom";

const Sidebar = () => {
  const [open, setOpen] = useState(true);
  
  const menu = [
    { title: "Dashboard", path: "/", id: 1 },
    { title: "Projects", path: "/projects", id: 2 },
    { title: "Issues", path: "/issues", id: 3 },
  ];
  return (
    <aside className={`${styles.sidebar} ${open ? "" : styles.collapse}`}>
      <BsArrowLeftShort
        className={`${styles["sidebar-arrow"]} ${!open && styles.rotate}`}
        onClick={() => setOpen((open) => !open)}
      />

      <div
        className={`${styles["sidebar-icon"]} ${!open ? styles.toggle : ""}`}
      >
        <AiFillEnvironment className={styles.logo} />
        <h1 className={`${!open && styles.hidden}`}>Project</h1>
      </div>

      <div className={styles["sidebar-search"]}>
        <BsSearch color="white" style={{ marginRight: open && "4px" }} />
        <input
          className={`${!open && styles.hidden}`}
          type={"search"}
          placeholder="Search"
        />
      </div>

      <ul className={styles["sidebar-nav"]}>
        {menu.map((menu, index) => (
          <NavLink
            key={menu.id}
            to={menu.path}
            className={({ isActive }) => (isActive ? styles.active : "")}
          >
            <span className={styles.icon}>
              <RiDashboardFill />
            </span>

            <span className={`${styles.title} ${!open && styles.hidden}`}>
              {menu.title}
            </span>
          </NavLink>
        ))}
      </ul>
    </aside>
  );
};

export default Sidebar;
// <li
//   key={Math.random() * 1000}
//   style={{ marginTop: menu.spacing ? "2.25rem" : "0.5rem" }}
// >
//   <span className={styles.icon}>
//     <RiDashboardFill />
//   </span>

//   <span className={`${styles.title} ${!open && styles.hidden}`}>
//     <NavLink
//       to={menu.path}
//       className={({ isActive }) => (isActive ? styles.active : "")}
//     >
//       {menu.title}
//     </NavLink>
//   </span>
