const initialState = {
  name: "Ajeet yadav",
  age: 27
};

const userReducer = (state = initialState, action) => {
  switch (action.type) {
    case "SET_NAME":
      state = {
        ...state,
        name: action.payload
      };

      break;

    case "SET_AGE":
      state = {
        ...state,
        age: action.payload
      };

      break;

    default:
      break;
  }
  return state;
};

export default userReducer;
