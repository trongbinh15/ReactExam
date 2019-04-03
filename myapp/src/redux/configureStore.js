import { createStore, applyMiddleware, compose } from "redux";
import thunk from "redux-thunk";
import rootReducers from "./reducers";

export default function configureStore(initialState) {
  return createStore(rootReducers, initialState, applyMiddleware(thunk));
}
