import { combineReducers } from "redux";
import tasksActions from "./tasksActions";
import { createReducer } from '@reduxjs/toolkit';
//import tasksActionTypes from "./tasksActionTypes";
const handleClickOutside = (state, action) =>{
         console.log(action.payload.task);
            if((state.includes(`${action.payload.task.name_}:${action.payload.task.number_}`))===false){  
                localStorage.setItem('contacts', JSON.stringify(state.concat(`${action.payload.task.name_}:${action.payload.task.number_}`)));
                return state.concat(`${action.payload.task.name_}:${action.payload.task.number_}`)
            }
            else{
                return state;
            }
}
const getFromLocStorOutside = (state, action) =>{
    console.log(action.payload.myLocalStorage);
    if(action.payload !== undefined){
        return  state.concat(JSON.parse(action.payload));
    }
} 
const deleteClickTytOutside = (state, action) =>{
    if(state.length === 1){
        localStorage.removeItem('contacts');
    }
    else{
        let localStorageInfo = JSON.parse(localStorage.getItem('contacts'));
        localStorageInfo = localStorageInfo.filter(item => item !== action.payload);
        localStorage.setItem('contacts', JSON.stringify(localStorageInfo)); 
    }
    return state.filter(contact => contact!==action.payload)
}
const itemsTestReducer = createReducer([], {
    [tasksActions.handleClick.type]: handleClickOutside,
    [tasksActions.getFromLocStor.type]: getFromLocStorOutside,
    [tasksActions.deleteClickTyt.type]: deleteClickTytOutside,
})
//const items = (state=[], {type, payload}) =>{

    // switch(type){
    //     case tasksActionTypes.HANDLE_CLICK:
    //         console.log('hdd');
    //         if((state.includes(`${payload.task.name_}:${payload.task.number_}`))===false){  
    //             localStorage.setItem('contacts', JSON.stringify(state.concat(`${payload.task.name_}:${payload.task.number_}`)));
    //             return state.concat(`${payload.task.name_}:${payload.task.number_}`)
    //         }
    //         else{
    //             return state;
    //         }
    //         break;
    //     case tasksActionTypes.LOC_STOR:
    //         if(payload.myLocalStorage !== undefined){
    //           return  state.concat(JSON.parse(payload.myLocalStorage));
    //         }
    //         break;
    //     case tasksActionTypes.DELETE_CLICK_TYT:
    //         if(state.length === 1){
    //             localStorage.removeItem('contacts');
    //         }
    //         else{
    //             let localStorageInfo = JSON.parse(localStorage.getItem('contacts'));
    //             localStorageInfo = localStorageInfo.filter(item => item !== payload.key_);
    //             localStorage.setItem('contacts', JSON.stringify(localStorageInfo)); 
    //         }
    //         return state.filter(contact => contact!==payload.key_)
    //     default:
    //         return state;
//     }
// }
const changeFilterOutside = (task, action) => action.payload;
const filter = createReducer('', {
    [tasksActions.changeFilter.type]: changeFilterOutside,
})


export default combineReducers({
    items: itemsTestReducer,
   filter: filter,
});