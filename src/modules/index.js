import { combineReducers } from "redux";
import counter from "./counter";
import posts from "./posts";

// const rootReducer = combineReducers({ counter: counter }) 
export const rootReducer = combineReducers({ counter: counter, posts: posts });    //생략가능

export default rootReducer;