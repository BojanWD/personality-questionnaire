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
  throw new Error("no matching action type");
};

export default reducer;
