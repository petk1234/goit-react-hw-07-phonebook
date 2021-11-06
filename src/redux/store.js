import tasksReducers from "./tasks/tasksReducers";
import { configureStore, getDefaultMiddleware } from "@reduxjs/toolkit";

const defaultMiddleware = getDefaultMiddleware();

const md1 = store => next => action =>{
    console.log('hello from md1');
    next(action);
}
const store = configureStore({
    reducer: {
        tasks: tasksReducers,
    }, 
    middleware: [...defaultMiddleware, md1]
});
export default store;