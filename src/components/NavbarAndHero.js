import React from "react";
import styles from "../css/Nav.module.css";
import personalityPic from "../pics/personality.jpg";

function NavbarAndHero() {
  return (
    <>
      <nav className={styles.nav}>
        <h1>Personality Assessment</h1>
        <ul className={styles.navList}>
          <li className={styles.navItem}>
            <a className={styles.navLink}>Home</a>
          </li>
          <li className={styles.navItem}>
            <a className={styles.navLink}>About</a>
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
