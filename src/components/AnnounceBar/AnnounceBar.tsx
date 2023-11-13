"use client"

import { X } from "react-feather";
import { motion } from "framer-motion";
import styles from "./AnnounceBar.module.scss"

const Announcements = [
  "SUMMER SALE DISCOUNT OFF 50%",
  "INSTANT DISCOUNT CODE 50% OFF HONGO50",
  "FREE SHIPPING FOR ALL ORDERS FROM $60+",
  "FREE WORLDWIDE SHIPPING UNTIL FURTHER NOTICE",
  "SUMMER SALE DISCOUNT OFF 50%",
  "INSTANT DISCOUNT CODE 50% OFF HONGO50",
  "FREE SHIPPING FOR ALL ORDERS FROM $60+",
  "FREE WORLDWIDE SHIPPING UNTIL FURTHER NOTICE",
  "SUMMER SALE DISCOUNT OFF 50%",

];

function AnnounceBar() {
  return (
    <div className={styles.announceBar}>
      <motion.div className={styles.announceTextContainer}
        animate={{
            x: -1377,
            zIndex: -1,
        }}
        transition={{ease: "linear", duration: 38, repeat: Infinity}}
      >
        {Announcements.map((text, index) => {
          return (
            <div key={index} className={styles.announcement}>
              <span className={styles.announceText}>{text}</span>
            </div>
          );
        })}
      </motion.div>
      <X size={18} color="white" className={styles.announceCloseIcon}/>
    </div>
  );
}

export default AnnounceBar;
