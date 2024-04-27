import React from "react";
import style from "./Header.module.css";
import Sidebar from "../Sidebar/Sidebar";

const Header = () => {
  return (

    <header className={style.header}>
        <div className={style.logo}>

          <Sidebar />
        </div>

        <nav className={style.nav}>
        <ul className={style.navList}>
            <li className={style.navItem}><a href="#contact">Contact</a></li>
            <li className={style.navItem}><a href="#project">Project</a></li>
            <li className={style.navItem}><a href="#darkMode">Dark mode</a></li>
        </ul>
    </nav>
    </header>
  );
};

export default Header;
