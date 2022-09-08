import React from "react";
import styles from "../css/Nav.module.css";
import personalityPic from "../pics/personality.jpg";
import { Link } from "react-router-dom";

function NavbarAndHero() {
  return (
    <>
      <nav className={styles.nav}>
        <h1>Personality Assessment</h1>
        <ul className={styles.navList}>
          <li className={styles.navItem}>
            <Link to="/" className={styles.navLink}>
              Home
            </Link>
          </li>
          <li className={styles.navItem}>
            <Link to="/about" className={styles.navLink}>
              About
            </Link>
          </li>
        </ul>
      </nav>
      <section className={styles.hero}>
        <div className={styles.titleContainer}>
          <h2 className={styles.title}>
            Accurately&nbsp;measure <br />
            your personality
          </h2>
          <p className={styles.subtitle}>
            Measure key personality traits
            <br />
            and see which define your behavior the most.
          </p>
        </div>
        <div className={styles.imgContainer}>
          <img src={personalityPic} alt="" />
        </div>
      </section>
    </>
  );
}

export default NavbarAndHero;
