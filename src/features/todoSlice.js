import { createSlice } from '@reduxjs/toolkit';

export const todoSlice = createSlice({
  name: 'todos',
  initialState: {
    todoList: [],
  },
  reducers: {
    saveTodo: (state, action) => {
      return {
        ...state,
        todoList:[...state.todoList, action.payload]
      }
    },
    deleteTodo:(state , action) => {
      let newTodos= [...state.todoList].filter(todo => todo.id != action.payload);
      return {
        todoList: newTodos
      }
    }
  
  },
});

export const  { saveTodo , deleteTodo }  = todoSlice.actions;

export const selectTodo = state => state.todos.todoList;

export default todoSlice.reducer;
