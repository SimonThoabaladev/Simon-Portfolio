import React, {useState} from 'react';

// Make a research on why these import work hand in hand
import  styles  from "./Navbar.module.css";


import {getImageUrl} from "../../utils";

export const Navbar = () => {
    // Remember to make it responsive
    const [menuOpen, setMenuOpen] = useState(false);

    return (
        <nav className={styles.navbar}>
            {/* Clicking the portfolio text to home page */}
            <a className={styles.title} href="/">
                Portfolio
                </a>
            {/* Div containing the menu */}
            <div className={styles.menu}>
                {/* Learn About It  */}
                {/* <img className={styles.menuBtn} src={getImageUrl("nav/menuIcon.png")} /> */}
                {/* Making My Web Responsive using Icons */}
                <img
          className={styles.menuBtn}
          src={
            menuOpen
              ? getImageUrl("nav/closeIcon.png")
              : getImageUrl("nav/menuIcon.png")
          }
          alt="menu-button"
          onClick={() => setMenuOpen(!menuOpen)}
        />

                     {/* $ Allow us to add another classname */}
                     {/* We Use String indoublation `` and $ to add two Classnames */}
                <ul className={`${styles.menuItems} ${menuOpen && styles.menuOpen}`} 
                >
                   <li>
            <a href="#about">About</a>
          </li>
          <li>
            <a href="#experience">Experience</a>
          </li>
          <li>
            <a href="#projects">Projects</a>
          </li>
          <li>
            <a href="#contact">Contact</a>
          </li>
        </ul>
                
            </div>
        </nav>
    );
}