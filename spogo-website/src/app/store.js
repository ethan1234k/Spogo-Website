const initialState = { backgroundColor: "whitesmoke"}

export const store = (state = initialState, action) => {
  const newState = {...state};

  if (action.type === "Change Background Color: Columbia Blue") {
    newState.backgroundColor = "#B8D8D8"
  }
  if (action.type === "Change Background Color: Whitesmoke") {
    newState.backgroundColor = "whitesmoke"
  }
  if (action.type === "Change Background Color: Beige") {
    newState.backgroundColor = "#EEF5DB"
  }
  if (action.type === "Change Background Color: Sunset") {
    newState.backgroundColor = "#FE5F55"
  }


  return newState;
}
