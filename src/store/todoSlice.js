import {createSlice} from '@reduxjs/toolkit'


const todoSlice = createSlice({
    name: 'todos',
    initialState:{
        todos: []
    },

    //действие для state
    reducers:{
        addTodo: (state,action) =>{
            console.log(state,action.payload);
            state.todos.push(action.payload);
        },
        changeTodoStatus: (state,action) =>{
            const todo = state.todos.find(todo=> todo.id === action.payload);
            todo.status = !todo.status;
        }
    }


})
//передали addtodo
export const { addTodo,changeTodoStatus } = todoSlice.actions;
export default todoSlice.reducer;