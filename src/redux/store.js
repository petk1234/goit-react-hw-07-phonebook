import tasksReducers from "./tasks/tasksReducers";
import { configureStore } from "@reduxjs/toolkit";

const store = configureStore({
    reducer: {
        tasks: tasksReducers,
    },
});
export default store;