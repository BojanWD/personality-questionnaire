import React from "react";
import { useReducer } from "react";
import InitialInfo from "./InitialInfo";
import Results from "./Results";
import TestItems from "./TestItems";
import TestStatus from "./TestStatus";
import reducer from "../reducer";

const initialState = {
  stage: 0,
  gender: NaN,
  age: NaN,
  answers: {},
  scores: {
    extraversion: 0,
    neuroticism: 0,
    agreeableness: 0,
    openness: 0,
    conscientiousness: 0,
  },
  norm: 0,
};

function Questionnaire() {
  const [state, dispatch] = useReducer(reducer, initialState);

  const changeGender = (value) => {
    dispatch({ type: "SET_GENDER", payload: value });
  };

  const changeAge = (value) => {
    dispatch({ type: "SET_AGE", payload: value });
  };

  const changeStage = (value) => {
    dispatch({ type: "SET_STAGE", payload: value });
  };

  const changeAnswer = (id, value) => {
    dispatch({ type: "CHANGE_ANSWER", payload: [id, value] });
  };

  const calculateScores = () => {
    dispatch({ type: "CALCULATE_SCORES" });
  };

  const resetApp = () => {
    dispatch({ type: "RESET" });
  };
  return (
    <>
      <TestStatus stage={state.stage} />
      {state.stage === 0 && (
        <InitialInfo
          changeAge={changeAge}
          changeGender={changeGender}
          changeStage={changeStage}
        />
      )}
      {state.stage === 1 && (
        <TestItems changeAnswer={changeAnswer} changeStage={changeStage} />
      )}
      {state.stage === 2 && (
        <Results
          calculateScores={calculateScores}
          reset={resetApp}
          scores={state.scores}
          norm={state.norm}
        />
      )}
    </>
  );
}

export default Questionnaire;
