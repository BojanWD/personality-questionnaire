import React from "react";
import styles from "../css/TestStatus.module.css";

function TestStatus({ stage }) {
  return (
    <section className={styles.statusContainer}>
      <div
        className={`${styles.statusBar} ${stage === 0 ? styles.activeBar : ""}`}
      >
        Initial Info
      </div>
      <div
        className={`${styles.statusBar} ${stage === 1 ? styles.activeBar : ""}`}
      >
        Questionnaire
      </div>
      <div
        className={`${styles.statusBar} ${stage === 2 ? styles.activeBar : ""}`}
      >
        Results
      </div>
    </section>
  );
}

export default TestStatus;
