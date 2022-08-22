import React from "react";
import styles from "../css/Form.module.css";

function InitialInfo() {
  return (
    <div className={styles.backgroundLayer}>
      <section className={styles.formContainer}>
        <div className={styles.warning}>
          * No personal information is stored, gender and age are used for
          calculation and presentation of results only.
        </div>
        <form>
          <table className={styles.table}>
            <tr>
              <th>Question</th>
              <th colspan="2">Answer</th>
            </tr>
            <tr>
              <td className={styles.labelCell}>
                <label htmlFor="gender">Gender: </label>
              </td>
              <td>
                <input type="radio" value="Male" name="gender" required />
                Male
              </td>
              <td>
                <input type="radio" value="Female" name="gender" />
                Female
              </td>
            </tr>
            <tr>
              <td className={styles.labelCell}>
                <label htmlFor="age">Age: </label>
              </td>
              <td colspan="2">
                {" "}
                <input
                  className={styles.numberInput}
                  type="number"
                  name="age"
                  required
                  min={18}
                  max={100}
                />
              </td>
            </tr>
          </table>
        </form>
      </section>
    </div>
  );
}

export default InitialInfo;
