import React, { useState } from "react";
import styles from "../Sidebar/Sidebar.module.scss";
import { BsArrowLeftShort, BsSearch } from "react-icons/bs";
import { AiFillEnvironment } from "react-icons/ai";
import { RiDashboardFill } from "react-icons/ri";
import { NavLink } from "react-router-dom";
import { GiHamburgerMenu } from "react-icons/gi";
import { HiArrowLeft } from "react-icons/hi";
import { MdOutlineAddBox, MdFeaturedPlayList } from "react-icons/md";
const Sidebar = ({ id }) => {
  const [open, setOpen] = useState(true);
  const menu = [
    {
      title: "Home",
      path: `/project/feed/${id}`,
      id: 1,
      icon: <RiDashboardFill />,
    },
    {
      title: "Add Issue",
      path: `/project/addIssue/${id}`,
      id: 2,
      icon: <MdOutlineAddBox />,
    },
    {
      title: "Issues",
      path: `/project/issues/${id}`,
      id: 3,
      icon: <MdFeaturedPlayList />,
    },
  ];
  return (
    <aside className={`${styles.sidebar} ${open ? "" : styles.collapse}`}>
      <div
        className={`${styles["sidebar-arrow-wrapper"]} ${open && styles.open}`}
      >
        {/* <BsArrowLeftShort
          className={`${styles["sidebar-arrow"]} ${!open && styles.rotate}`}
          onClick={() => setOpen((open) => !open)}
        /> */}
        {!open ? (
          <GiHamburgerMenu
            className={`${styles["sidebar-arrow"]}`}
            onClick={() => setOpen((open) => !open)}
          />
        ) : (
          <HiArrowLeft
            className={`${styles["sidebar-arrow"]}`}
            onClick={() => setOpen((open) => !open)}
          />
        )}
      </div>

      {/* <div
        className={`${styles["sidebar-icon"]} ${!open ? styles.toggle : ""}`}
      >
        <AiFillEnvironment className={styles.logo} />
        <h1 className={`${!open && styles.hidden}`}>Project</h1>
      </div> */}

      {/* <div className={styles["sidebar-search"]}>
        <BsSearch color="white" style={{ marginRight: open && "4px" }} />
        <input
          className={`${!open && styles.hidden}`}
          type={"search"}
          placeholder="Search"
        />
      </div> */}

      <ul className={styles["sidebar-nav"]}>
        {menu.map((menu, index) => (
          <li key={menu.id}>
            <NavLink
              to={menu.path}
              className={({ isActive }) => (isActive ? styles.active : "")}
            >
              <span className={styles.icon}>
                {menu.icon}
              </span>

              <span className={`${styles.title} ${!open && styles.hidden}`}>
                {menu.title}
              </span>
            </NavLink>
          </li>
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
