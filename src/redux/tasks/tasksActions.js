//import tasksActionTypes from "./tasksActionTypes";
import { createAction } from "@reduxjs/toolkit";

const addTaskRequest = createAction('tasks/addRequest');
const addTaskSuccess = createAction('tasks/addSuccess', ({id, name, number, isLoading})=>{
    return{
        payload:{
            task:{
                 id,
                 name,
                 number,
                 isLoading,
            }
        }
    }
});
const addTaskError = createAction('tasks/addError');

const getTaskRequest = createAction('tasks/getRequest');
const getTaskSuccess = createAction('tasks/getSuccess');
const getTasksError = createAction('tasks/getError');

const deleteTaskRequest = createAction('tasks/deleteRequest');
const deleteTaskSuccess = createAction('tasks/deleteSuccess');
const deleteTaskError = createAction('tasks/deleteError');
// const handleClick = createAction('tasks/add', (name, number)=>{
//     return{
//         payload:{
//             task:{
//                 name_: name,
//                 number_: number,
//             }
//         }
//     }
// });
const deleteClickTyt = createAction('tasks/remove');
const changeFilter = createAction('tasks/filter');


export default { 
    addTaskRequest,
    addTaskSuccess,
    addTaskError,
    getTaskRequest,
    getTaskSuccess,
    getTasksError,
    deleteTaskRequest,
    deleteTaskSuccess,
    deleteTaskError,
    deleteClickTyt,
    changeFilter,
}