import { useState } from "react";
import { motion } from "framer-motion";
import styles from "./Sidebar.module.css";
import Button from "./Button/Button";
import Links from "./Links/Links";

const variants = {
  open: {
    clipPath: "circle(100% at 0% 50%)",
    transition: {
      type: "spring",
      stiffness: 50,
    },
  },
  closed: {
    clipPath: "circle(10% at -20% 50%)",
    transition: {
      delay: 0.4,
      type: "spring",
      stiffness: 400,
      damping: 40,
    },
  },
};

const Sidebar = () => {
  const [open, setOpen] = useState(false);

  const toggle = () => {
    setOpen((prev) => !prev);
  };

  const closeSidebar = () => {
    setOpen(false);
  };



  return (
    <>
      <motion.div className={styles.sidebar} animate={open ? "open" : "closed"}>
        <motion.div className={styles.bg} variants={variants} />
        <Button setOpen={toggle} />
        <Links isOpen={open} closeSidebar={closeSidebar} />
      </motion.div>

    </>
  );
};
export default Sidebar;
