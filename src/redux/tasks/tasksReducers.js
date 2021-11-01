import { combineReducers } from "redux";
import tasksActions from "./tasksActions";
import tasksActionTypes from "./tasksActionTypes";
const items = (state=[], {type, payload}) =>{
    switch(type){
        case tasksActionTypes.HANDLE_CLICK:
            console.log('hdd');
            if((state.includes(`${payload.task.name_}:${payload.task.number_}`))===false){  
                localStorage.setItem('contacts', JSON.stringify(state.concat(`${payload.task.name_}:${payload.task.number_}`)));
                return state.concat(`${payload.task.name_}:${payload.task.number_}`)
            }
            else{
                return state;
            }
            break;
        case tasksActionTypes.LOC_STOR:
            if(payload.myLocalStorage !== undefined){
              return  state.concat(JSON.parse(payload.myLocalStorage));
            }
            break;
        case tasksActionTypes.DELETE_CLICK_TYT:
            if(state.length === 1){
                localStorage.removeItem('contacts');
            }
            else{
                let localStorageInfo = JSON.parse(localStorage.getItem('contacts'));
                localStorageInfo = localStorageInfo.filter(item => item !== payload.key_);
                localStorage.setItem('contacts', JSON.stringify(localStorageInfo)); 
            }
            return state.filter(contact => contact!==payload.key_)
        default:
            return state;
    }
}
const filter = (state='', {type, payload}) =>{
    switch(type){
        case tasksActionTypes.CHANGE_FILTER:
            state = payload.filter;
            return state
        default:
            return state;
    }
}


export default combineReducers({
    items: items,
    filter: filter,
});