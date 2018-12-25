const getPostsReducer = (state = [], action) => {

  if (action.type === "GET-POSTS") {
    return action.payload;
  }
  return state;
};

export default getPostsReducer;
