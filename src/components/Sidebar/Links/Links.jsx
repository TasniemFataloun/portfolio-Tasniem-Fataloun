import {  color, motion } from "framer-motion";
import styles from "./Links.module.css";

const itemVariants = {
  open: {
    color: "#f0f0f0", 
    x: "-250%", 
    delay: 1,
    opacity: 1,
    transition: {
      duration: 1,
      ease: "easeInOut", 
    },
  },
  closed: {
    x: 50,
    opacity: 0,
    transition: {
      duration: 0.5,
    },
  },
};

const linksAnimation = {
  open: {
    duration: 1,
    delay: 0.5,
    visibility: "visible",
    transition: {
      duration: 1,
      staggerChildren: 0.1,
      delayChildren: 0.2,
    },
  },
  closed: {
    visibility: "hidden",
    transition: {
      staggerChildren: 0.05,
      staggerDirection: -1,
      delayChildren: 0.2
  },
}
};

const Links = ({ isOpen, closeSidebar }) => {
  const items = ["Home", "About", "Contact"];
  return (
    <motion.div className={styles.links} variants={itemVariants} animate={isOpen ? "open" : "closed"}>
      <motion.div className={styles.try} variants={linksAnimation} >
        {isOpen && items.map((item) => (
          <motion.a
            href={`#${item}`}
            key={item}
            variants={itemVariants}
            whileHover={{ scale: 1.4, color: "black"}}
            whileTap={{ scale: 0.80 }}
            onClick={closeSidebar}
          >
            {item}
          </motion.a>
        ))}
      </motion.div>
    </motion.div>
  );
};

export default Links;
