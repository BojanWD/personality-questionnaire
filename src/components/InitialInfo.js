import React from "react";
import styles from "../css/Form.module.css";

function InitialInfo({
  changeAge,
  changeGender,
  changeStage,
  setLocalStorage,
}) {
  const handleAgeInput = (e) => {
    const value = Number(e.target.value);
    changeAge(value);
  };

  const handleGenderInput = (e) => {
    const value = Number(e.target.value);
    changeGender(value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    changeStage(1);
    setLocalStorage();
  };

  return (
    <div className={styles.backgroundLayer}>
      <section className={styles.formContainer}>
        <div>
          <p className={styles.warning}>
            * No personal information is stored, gender and age are used for
            calculation and presentation of results only.
          </p>
        </div>
        <form onSubmit={handleSubmit}>
          <table className={styles.table}>
            <thead>
              <tr>
                <th>Question</th>
                <th colSpan={2}>Answer</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className={styles.labelCell}>
                  <label htmlFor="gender">Gender: </label>
                </td>
                <td>
                  <input
                    type="radio"
                    value={1}
                    name="gender"
                    onChange={handleGenderInput}
                    required
                  />
                  Male
                </td>
                <td>
                  <input
                    type="radio"
                    value={2}
                    name="gender"
                    onChange={handleGenderInput}
                  />
                  Female
                </td>
              </tr>
              <tr>
                <td className={styles.labelCell}>
                  <label htmlFor="age">Age: </label>
                </td>
                <td colSpan={2}>
                  {" "}
                  <input
                    className={styles.numberInput}
                    type="number"
                    name="age"
                    required
                    min={18}
                    max={100}
                    onChange={handleAgeInput}
                  />
                </td>
              </tr>
            </tbody>
          </table>
          <button type="submit" className={styles.submitButton}>
            Next &#8594;
          </button>
        </form>
      </section>
    </div>
  );
}

export default InitialInfo;
