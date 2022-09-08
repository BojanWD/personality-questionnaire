import { itemIDs } from "./data/data";

const reducer = (state, action) => {
  if (action.type === "SET_STAGE") {
    return {
      ...state,
      stage: action.payload,
    };
  }
  if (action.type === "SET_AGE") {
    return {
      ...state,
      age: action.payload,
    };
  }
  if (action.type === "SET_GENDER") {
    return {
      ...state,
      gender: action.payload,
    };
  }

  if (action.type === "CHANGE_ANSWER") {
    let tempAnswers = { ...state.answers };
    tempAnswers = { ...tempAnswers, [action.payload[0]]: action.payload[1] };

    return {
      ...state,
      answers: tempAnswers,
    };
  }

  if (action.type === "CALCULATE_SCORES") {
    let tempScores = {
      extraversion: 0,
      neuroticism: 0,
      agreeableness: 0,
      openness: 0,
      conscientiousness: 0,
    };

    for (let item in state.answers) {
      // first we check dimensions
      if (itemIDs[item][0] === "E") {
        // then we check if item is reversed
        if (itemIDs[item][1] === true) {
          tempScores.extraversion += 6 - state.answers[item];
        } else {
          tempScores.extraversion += state.answers[item];
        }
      }
      if (itemIDs[item][0] === "N") {
        if (itemIDs[item][1] === true) {
          tempScores.neuroticism += 6 - state.answers[item];
        } else {
          tempScores.neuroticism += state.answers[item];
        }
      }
      if (itemIDs[item][0] === "A") {
        if (itemIDs[item][1] === true) {
          tempScores.agreeableness += 6 - state.answers[item];
        } else {
          tempScores.agreeableness += state.answers[item];
        }
      }
      if (itemIDs[item][0] === "C") {
        if (itemIDs[item][1] === true) {
          tempScores.conscientiousness += 6 - state.answers[item];
        } else {
          tempScores.conscientiousness += state.answers[item];
        }
      }
      if (itemIDs[item][0] === "O") {
        if (itemIDs[item][1] === true) {
          tempScores.openness += 6 - state.answers[item];
        } else {
          tempScores.openness += state.answers[item];
        }
      }
    }

    // define norm based on age and gender
    let tempNorm = state.norm;
    if (state.gender === 1) {
      if (state.age <= 28) {
        tempNorm = 1;
      }
      if (state.age > 28 && state.age <= 38) {
        tempNorm = 2;
      }
      if (state.age > 38 && state.age <= 48) {
        tempNorm = 3;
      }
      if (state.age > 48 && state.age <= 58) {
        tempNorm = 4;
      }
      if (state.age > 58) {
        tempNorm = 5;
      }
    }
    if (state.gender === 2) {
      if (state.age <= 28) {
        tempNorm = 6;
      }
      if (state.age > 28 && state.age <= 38) {
        tempNorm = 7;
      }
      if (state.age > 38 && state.age <= 48) {
        tempNorm = 8;
      }
      if (state.age > 48 && state.age <= 58) {
        tempNorm = 9;
      }
      if (state.age > 58) {
        tempNorm = 10;
      }
    }
    return {
      ...state,
      scores: tempScores,
      norm: tempNorm,
    };
  }

  throw new Error("no matching action type");
};

export default reducer;
