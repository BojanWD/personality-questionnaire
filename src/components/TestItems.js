import React from "react";
import { big5 } from "../data/data";
import styles from "../css/Form.module.css";

function TestItems({ changeAnswer }) {
  const handleAnswer = (e, id) => {
    const value = Number(e.target.value);
    changeAnswer(id, value);
  };

  return (
    <div className={styles.backgroundLayer}>
      <section className={styles.formContainer}>
        <div className={styles.instructions}>
          <p>
            Here are a number of characteristics that may or may not apply to
            you. For example, do you agree that you are someone who likes to
            spend time with others? Please choose an option for each statement
            to indicate the extent to which you agree or disagree with that
            statement. <br /> The options have the following meaning:
            <br /> &gt;&gt; 1 - Disagree strongly
            <br /> &gt;&gt; 2 - Disagree a little
            <br /> &gt;&gt; 3 - Neither agree nor disagree
            <br /> &gt;&gt; 4 - Agree a little
            <br /> &gt;&gt; 5 - Agree strongly
          </p>
        </div>
        <form>
          <table className={styles.table}>
            <thead>
              <tr>
                <th colSpan={5}>Question</th>
                <th colSpan={2}>1 - Disagree strongly</th>
                <th></th>
                <th colSpan={2}>5 - Agree strongly</th>
              </tr>
            </thead>
            <tbody>
              {big5.map((item) => {
                return (
                  <tr key={item.id}>
                    <td colSpan={5} className={styles.labelCell}>
                      <label htmlFor={item.id}>{item.item}</label>
                    </td>
                    <td>
                      <input
                        type="radio"
                        name={item.id}
                        id={item.id}
                        value="1"
                        required
                        onChange={(e) => {
                          handleAnswer(e, item.id);
                        }}
                      />
                    </td>
                    <td>
                      <input
                        type="radio"
                        name={item.id}
                        id={item.id}
                        value="2"
                        onChange={(e) => {
                          handleAnswer(e, item.id);
                        }}
                      />
                    </td>
                    <td>
                      <input
                        type="radio"
                        name={item.id}
                        id={item.id}
                        value="3"
                        onChange={(e) => {
                          handleAnswer(e, item.id);
                        }}
                      />
                    </td>
                    <td>
                      <input
                        type="radio"
                        name={item.id}
                        id={item.id}
                        value="4"
                        onChange={(e) => {
                          handleAnswer(e, item.id);
                        }}
                      />
                    </td>
                    <td>
                      <input
                        type="radio"
                        name={item.id}
                        id={item.id}
                        value="5"
                        onChange={(e) => {
                          handleAnswer(e, item.id);
                        }}
                      />
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
          <button type="submit" className={styles.submitButton}>
            See Results &#8594;
          </button>
        </form>
      </section>
    </div>
  );
}

export default TestItems;
