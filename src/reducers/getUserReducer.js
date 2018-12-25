const getUserReducer = (state = [], action) => {

    if (action.type === "GET-USER") {
      return [...state, action.payload];
    }
    return state;
  };
  
  export default getUserReducer;
  