import { combineReducers } from "redux";
import getPostsReducer from "../reducers/getPostsReducer";
import getUserReducer from "../reducers/getUserReducer";

export default combineReducers({
  getPostsReducer: getPostsReducer,
  getUserReducer : getUserReducer
});
