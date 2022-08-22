import React from "react";
import styles from "../css/TestStatus.module.css";

function TestStatus() {
  return (
    <section className={styles.statusContainer}>
      <div className={`${styles.statusBar} ${styles.activeBar}`}>
        Initial Info
      </div>
      <div className={styles.statusBar}>Questionnaire</div>
      <div className={styles.statusBar}>Results</div>
    </section>
  );
}

export default TestStatus;
