import {ADD_TODO} from '../actionsTypes/todotypes';

export const addTodo = (payload) =>{
    return {type :ADD_TODO,payload};
}