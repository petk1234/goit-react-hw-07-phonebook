//import tasksActionTypes from "./tasksActionTypes";
import { createAction } from "@reduxjs/toolkit";
const handleClick = createAction('tasks/add', (name, number)=>{
    return{
        payload:{
            task:{
                name_: name,
                number_: number,
            }
        }
    }
});
const getFromLocStor = createAction('tasks/ls');
const deleteClickTyt = createAction('tasks/remove');
const changeFilter = createAction('tasks/filter');
// const handleClick = (name, number) =>{
//     return {
//         type: tasksActionTypes.HANDLE_CLICK,
//         payload:{
//             task:{
//                 name_: name,
//                 number_: number
//             }
//         }
//     }
// }

// const getFromLocStor = (myLocalStorage) =>{
//     return {
//         type: tasksActionTypes.LOC_STOR,
//         payload:{
//             myLocalStorage,
//         }
//     }
// }
// const deleteClickTyt = key =>{
//     return {
//         type: tasksActionTypes.DELETE_CLICK_TYT,
//         payload:{
//             key_: key,
//         }
//     }
// }

// const changeFilter = val =>{
//     return {
//         type: tasksActionTypes.CHANGE_FILTER,
//         payload:{
//             filter: val, 
//         }
//     }
// }

export default {
    handleClick, 
    getFromLocStor,
    deleteClickTyt,
    changeFilter,

}