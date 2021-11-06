import { combineReducers } from "redux";
import tasksActions from "./tasksActions";
import { createReducer } from '@reduxjs/toolkit';
//import tasksActionTypes from "./tasksActionTypes";
const handleClickOutside = (state, action) =>{
         console.log(action.payload.task);
         let state_ = state.map(el => el.nazva);
            if((state_.includes(`${action.payload.task.name}:${action.payload.task.number}`))===false){  
                let nazva = `${action.payload.task.name}:${action.payload.task.number}`;
                let id = action.payload.task.id;
                return state.concat({nazva: nazva, id: id});
            }
            else{
                return state;
            }
}
// const deleteClickTytOutside = (state, action) =>{
//     return state.filter(contact => contact!==action.payload)
// }
const getTaskSuccessOutside = (state, action) =>{
    //console.log(action.payload.isLoading);
    action.payload.map(element =>{
        console.log(element);
        console.log(`${element.name}:${element.number}`);
        let state_ = state.map(el => el.nazva);
        if((state_.includes(`${element.name}:${element.number}`))===false){
          let nazva = `${element.name}:${element.number}`;
          let id = element.id;
          return state.push({nazva, id})
        }
    })
}
const deleteTaskSuccessOutside = (state, action) =>{
       console.log('delete reducer');
       return state.filter(contact => contact.id !== action.payload);
    // console.log(state[0].id);
    // console.log(action.payload);
    // state.forEach( contact =>{
    //    console.log(contact.id)
    // })
}
const itemsTestReducer = createReducer([], {
   // [tasksActions.addTaskRequest.type]: (state,action) => action.payload[0].isLoading = false,
    [tasksActions.addTaskSuccess.type]: handleClickOutside,
    [tasksActions.getTaskSuccess.type]: getTaskSuccessOutside,
    //[tasksActions.deleteClickTyt.type]: deleteClickTytOutside,
    [tasksActions.deleteTaskSuccess.type]: deleteTaskSuccessOutside,
})

const isLoadingReducer = createReducer(false,{
    [tasksActions.addTaskRequest]: () => true, 
    [tasksActions.addTaskSuccess]: () => false,
    [tasksActions.addTaskError]: () => false,
    [tasksActions.getTaskRequest]: () => true,
    [tasksActions.getTaskSuccess]: () => false,
    [tasksActions.getTasksError]: () => false,
})

const changeFilterOutside = (state, action) => action.payload;
const filter = createReducer('', {
    [tasksActions.changeFilter.type]: changeFilterOutside,
})


export default combineReducers({
   items: itemsTestReducer,
   loading: isLoadingReducer,
   filter: filter,
});