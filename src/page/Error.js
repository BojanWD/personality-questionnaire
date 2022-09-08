import React from "react";
import styles from "../css/Error.module.css";
import { Link } from "react-router-dom";

function Error() {
  return (
    <div className={styles.backgroundLayer}>
      <h1>Oops this page doesn't exist</h1>
      <Link to="/">
        <button className={styles.Button}>Return to homepage</button>
      </Link>
    </div>
  );
}

export default Error;
