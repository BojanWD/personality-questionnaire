import { useReducer } from "react";
import InitialInfo from "./components/InitialInfo";
import NavbarAndHero from "./components/NavbarAndHero";
import Results from "./components/Results";
import TestItems from "./components/TestItems";
import TestStatus from "./components/TestStatus";
import reducer from "./reducer";

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
};

function App() {
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

  return (
    <>
      <NavbarAndHero />
      <TestStatus stage={state.stage} />
      {state.stage === 0 && (
        <InitialInfo
          changeAge={changeAge}
          changeGender={changeGender}
          changeStage={changeStage}
        />
      )}
      {state.stage === 1 && <TestItems changeAnswer={changeAnswer} />}
      {state.stage === 2 && <Results />}
      {console.log(state.answers)}
    </>
  );
}

export default App;
