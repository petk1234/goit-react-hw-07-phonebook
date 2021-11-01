import tasksActionTypes from "./tasksActionTypes"
const handleClick = (name, number) =>{
    return {
        type: tasksActionTypes.HANDLE_CLICK,
        payload:{
            task:{
                name_: name,
                number_: number
            }
        }
    }
}

const getFromLocStor = (myLocalStorage) =>{
    return {
        type: tasksActionTypes.LOC_STOR,
        payload:{
            myLocalStorage,
        }
    }
}
const deleteClickTyt = key =>{
    return {
        type: tasksActionTypes.DELETE_CLICK_TYT,
        payload:{
            key_: key,
        }
    }
}

const changeFilter = val =>{
    return {
        type: tasksActionTypes.CHANGE_FILTER,
        payload:{
            filter: val, 
        }
    }
}

export default {
    handleClick, 
    getFromLocStor,
    deleteClickTyt,
    changeFilter,

}