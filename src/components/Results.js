import React, { useState } from "react";
import { useEffect } from "react";
import styles from "../css/Results.module.css";
import styles2 from "../css/Form.module.css";
import { big5Norms, traitDescriptions } from "../data/data";

function Results({ calculateScores, reset, scores, norm }) {
  const [output, setOutput] = useState([
    { trait: "extraversion", lvl: "" },
    { trait: "neuroticism", lvl: "" },
    { trait: "agreeableness", lvl: "" },
    { trait: "conscientiousness", lvl: "" },
    { trait: "openness", lvl: "" },
  ]);

  useEffect(() => {
    calculateScores();
  }, []);

  useEffect(() => {
    if (norm > 0) {
      defineOutput();
    }
  }, [scores]);

  const defineOutput = () => {
    // set current norm information based on norm value
    const currentNorm = big5Norms.filter((el) => {
      return el.id === norm;
    })[0];
    let results = {};
    if (Object.keys(currentNorm).length !== 0) {
      for (const item in scores) {
        if (scores[item] <= currentNorm[item][0]) {
          results = { ...results, [item]: "low" };
        } else if (scores[item] > currentNorm[item][1]) {
          results = { ...results, [item]: "high" };
        } else {
          results = { ...results, [item]: "average" };
        }
      }
    }

    setOutput((pS) => {
      return pS.map((el) => {
        return { trait: el.trait, lvl: results[el.trait] };
      });
    });
  };

  return (
    <div className={styles.backgroundLayer}>
      <section className={styles.resultsContainer}>
        <h3 className={styles.resultHeading}>Your Results</h3>
        {output.map((el, index) => {
          return (
            <div
              key={index}
              className={
                index % 2 === 0
                  ? `${styles.lightBackground}`
                  : `${styles.ultraLightBackground}`
              }
            >
              <h5 className={styles.resultSubHeading}>
                {el.trait} - {el.lvl}
              </h5>
              <p className={styles.resultText}>
                {traitDescriptions[el.trait].description}
                <br />
                {traitDescriptions[el.trait][el.lvl]}
              </p>
            </div>
          );
        })}
        <button className={styles2.submitButton} onClick={reset}>
          Go Home{" "}
        </button>
      </section>
    </div>
  );
}

export default Results;
