import {createStore, combineReducers } from "redux";
import tasksReducers from "./tasks/tasksReducers";
const rootReducer = combineReducers({
    tasks: tasksReducers,
});
const store = createStore(rootReducer, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());

export default store;