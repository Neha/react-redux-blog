import React from "react";
import ReactDOM from "react-dom";
import combineReducers from "./reducers/index";
import { createStore, applyMiddleware } from "redux";
import { Provider } from "react-redux";
import Posts from "./Posts";
import thunk from 'redux-thunk';
import "./styles.css";


const store = createStore(combineReducers, applyMiddleware(thunk));
const rootElement = document.getElementById("root");


function App() {
  return (
    <div className="App">
      <Posts />
    </div>
  );
}


ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,

  rootElement
);
