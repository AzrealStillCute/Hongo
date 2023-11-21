"use client";

import { motion } from "framer-motion";
import { Dispatch, SetStateAction } from "react";
import Link from "next/link";

import {
  ChevronDown,
  ChevronRight,
  Heart,
  Mail,
  PhoneCall,
  Search,
  ShoppingBag,
  User,
  X,
} from "react-feather";
import styles from "./NavBar.module.scss";
import { useState, useRef } from "react";

const NavLinks = [
  "Demo",
  "Shop",
  "Trending",
  "About",
  "Blog",
  "Contact",
  "Features",
];

function NavBar() {
  const [activeMenu, setActiveMenu] = useState(false);

  const [activeSearchbox, setActiveSearchbox] = useState(false);

  const searchFieldRef = useRef<HTMLInputElement>(null);

  function activeSearchboxHandler() {
    setActiveSearchbox(true);
    searchFieldRef.current?.focus();
  }

  return (
    <div className={styles.navBarContainer}>
      <div className={styles.navBar}>
        <div className={styles.navLogoContainer}>
          <Link href={"/"} className={styles.navLogoLink}>
            <img
              src="//hongotheme.myshopify.com/cdn/shop/files/demo-decor-logo-black_2x_5b3290bf-727f-4898-88b0-d55cf78960bc.png?v=1683543509"
              className={styles.navBarLogo}
            />
          </Link>
        </div>
        <div className={styles.navLinksContainer}>
          <ul className={styles.navLinksList}>
            {NavLinks.map((nav, index) => {
              return (
                <li className={styles.nav} key={index}>
                  <a href="#" className={styles.navLink}>
                    {nav}
                  </a>
                </li>
              );
            })}
          </ul>
          <motion.button
            onClick={() => setActiveMenu(!activeMenu)}
            className={styles.mobileMenuIcon}
            animate={activeMenu ? "open" : "close"}
          >
            <motion.div
              variants={{
                open: { rotate: "48deg" },
                close: { rotate: "0" },
              }}
              className={styles.menuLines}
            ></motion.div>
            <motion.div
              variants={{
                open: { width: 0 },
                close: {},
              }}
              className={styles.menuLines}
            ></motion.div>
            <motion.div
              variants={{
                open: { rotate: "-48deg" },
                close: { rotate: "0" },
              }}
              className={styles.menuLines}
            ></motion.div>
          </motion.button>
          <Search
            onClick={activeSearchboxHandler}
            size={19}
            className={`${styles.navIcons} ${styles.mobileSearch}`}
          />
        </div>
        <div className={styles.navIconsContainer}>
          <Search
            size={19}
            className={`${styles.navIcons} ${styles.desktopSearch}`}
            onClick={activeSearchboxHandler}
          />
          <Link href={"/login"}>
            <User size={19} color="#262626" className={styles.navIcons} />
          </Link>
          <Link href={"/wishlist"}>
            <Heart size={19} color="#262626" className={styles.navIcons} />
          </Link>
          <ShoppingBag size={19} className={styles.navIcons} />
        </div>
      </div>
      {activeMenu && (
        <div
          onMouseDown={() => {
            setActiveMenu(false);
          }}
          className={styles.contentOverlay}
        ></div>
      )}
      <MobileNav activeMenu={activeMenu} setActiveMenu={setActiveMenu} />
    </div>
  );
}

export default NavBar;

type TMobileNav = {
  activeMenu: boolean;
  setActiveMenu: Dispatch<SetStateAction<boolean>>;
};

function MobileNav({ activeMenu, setActiveMenu }: TMobileNav) {
  return (
    <div
      className={`${styles.mobileNavContainer} ${!activeMenu && styles.inactiveMobileNav}`}
    >
      <ul className={styles.mobileNavLinksList}>
        <li onClick={() => setActiveMenu(false)} className={styles.mobileListItems}>
          <a href="#" style={{ color: "white" }}>
            Menu
          </a>
          <X size={19} />
        </li>
        {NavLinks.map((nav, index) => {
          return (
            <li className={styles.mobileListItems} key={index}>
              <a href="#">{nav}</a>
              {nav === "Demo" ||
              nav === "Shop" ||
              nav === "Trending" ||
              nav === "Features" ? (
                <ChevronRight size={20} />
              ) : (
                ""
              )}
            </li>
          );
        })}
      </ul>
      <div className={styles.navContactWrapper}>
        <span className={styles.navContactTitle}>How we can help?</span>
        <div className={styles.navContact}>
          <Mail size={16} style={{ marginRight: "10px" }} />
          <span>info@gmial.com</span>
        </div>
        <div className={styles.navContact}>
          <PhoneCall size={16} style={{ marginRight: "10px" }} />
          <span>+123 456 8989</span>
        </div>
      </div>
      <div className={styles.mobileLanguageCurrency}>
        <label>Language:</label>
        <span>English</span>
        <ChevronDown size={16} style={{ marginRight: "20px" }} />
        <label>Currency:</label>
        <span>USD</span>
        <ChevronDown size={16} />
      </div>
    </div>
  );
}
