import tasksActions from "./tasksActions";
import axios from "axios";
const handleClick = (name, number, isLoading) => dispatch =>{
    dispatch(tasksActions.addTaskRequest());
    axios.post('http://localhost:2000/tasks', {name, number, isLoading}).
    then(response => response.data).
    then(data =>{
        console.log(data);
        dispatch(tasksActions.addTaskSuccess(data));
    }).
    catch(error => dispatch(tasksActions.addTaskError(error)));
}

const getTask = () => dispatch =>{
    dispatch(tasksActions.getTaskRequest());
    axios.get('http://localhost:2000/tasks').
    then(response => response.data).
    then(data =>{
        console.log(data);
        dispatch(tasksActions.getTaskSuccess(data));
    }).
    catch(error => dispatch(tasksActions.getTasksError(error)));
}

const deleteTask = id => dispatch =>{
    dispatch(tasksActions.deleteTaskRequest());
    axios.delete(`http://localhost:2000/tasks/${id}`).
    then(response =>{
        console.log(response.data);
        dispatch(tasksActions.deleteTaskSuccess(id));
    }).
    catch(error => dispatch(tasksActions.deleteTaskError(error)));
}
export default {handleClick, getTask, deleteTask};