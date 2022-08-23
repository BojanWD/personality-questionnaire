import React from "react";
import styles from "../css/Results.module.css";

function Results() {
  return (
    <div className={styles.backgroundLayer}>
      <section className={styles.resultsContainer}>
        <h3 className={styles.resultHeading}>Your Results</h3>
        <div>
          <h5 className={styles.resultSubHeading}>Extraversion</h5>
          <p className={styles.resultText}>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Earum nisi
            amet et nihil. Nesciunt exercitationem excepturi aperiam, aliquid
            illo quod voluptates! Omnis vero numquam modi illo, nam iure aut
            voluptate?
          </p>
        </div>
        <div>
          <h5 className={styles.resultSubHeading}>Neuroticism</h5>
          <p className={styles.resultText}>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Earum nisi
            amet et nihil. Nesciunt exercitationem excepturi aperiam, aliquid
            illo quod voluptates! Omnis vero numquam modi illo, nam iure aut
            voluptate?
          </p>
        </div>
        <div>
          <h5 className={styles.resultSubHeading}>Agreeableness</h5>
          <p className={styles.resultText}>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Earum nisi
            amet et nihil. Nesciunt exercitationem excepturi aperiam, aliquid
            illo quod voluptates! Omnis vero numquam modi illo, nam iure aut
            voluptate?
          </p>
        </div>
        <div>
          <h5 className={styles.resultSubHeading}>Conscientiousness</h5>
          <p className={styles.resultText}>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Earum nisi
            amet et nihil. Nesciunt exercitationem excepturi aperiam, aliquid
            illo quod voluptates! Omnis vero numquam modi illo, nam iure aut
            voluptate?
          </p>
        </div>
        <div>
          <h5 className={styles.resultSubHeading}>Openness</h5>
          <p className={styles.resultText}>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Earum nisi
            amet et nihil. Nesciunt exercitationem excepturi aperiam, aliquid
            illo quod voluptates! Omnis vero numquam modi illo, nam iure aut
            voluptate?
          </p>
        </div>
      </section>
    </div>
  );
}

export default Results;
