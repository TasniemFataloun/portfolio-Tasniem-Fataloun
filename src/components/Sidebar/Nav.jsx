import React, { useState, useEffect } from "react";
import Sidebar from "./Sidebar";
import styles from "./Nav.module.css"; // Create this CSS module to handle media queries

const Nav = () => {
  const [isMobile, setIsMobile] = useState(window.innerWidth < 768);
  const [nav, setNav] = useState(false);

  const navLinks = [
    { name: "About", path: "#About" },
    { name: "Projects", path: "#Projects" },
    { name: "Contact", path: "#Contact" },
  ];

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <div className={styles.navContainer}>
      {isMobile ? (
        <Sidebar />
      ) : (
        <div className={styles.navbar}>
          <ul>
            {navLinks.map((link) => (
              <li key={link.path}>
                <a href={link.path}>{link.name}</a>
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

export default Nav;
