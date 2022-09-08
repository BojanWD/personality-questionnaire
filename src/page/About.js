import React from "react";
import styles from "../css/Error.module.css";
import { Link } from "react-router-dom";

function About() {
  return (
    <div className={styles.backgroundLayer}>
      <section className={styles.container}>
        <h2>About Measure Your Personality project</h2>
        <br></br>
        <p>
          This is a project which uses an open big-5 personality questionnaire
          to measure big 5 personality traits: Neuroticism, Extraversion,
          Agreeableness, Openness and Conscientiousness.
        </p>
        <p>
          The norms (achieved score compared to the age and gender group) were
          defined based on a dataset which consisted of more than 15.000
          participants and can be found on{" "}
          <a href="http://personality-testing.info/_rawdata/" target="_blank">
            personality-testing.info
          </a>
          . Since this is not a representative sample, obtained results should
          not be used for any professional or clinical inferences and are
          presented only for fun.
        </p>
        <Link to="/">
          <button className={styles.Button}>Return to homepage</button>
        </Link>
      </section>
    </div>
  );
}

export default About;
