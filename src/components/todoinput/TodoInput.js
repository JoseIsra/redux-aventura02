import React, { useState } from 'react';
import TextField from '@material-ui/core/TextField';
import { saveTodo } from '../../features/todoSlice';
import './TodoInput.css';
import { useDispatch } from 'react-redux';
import makeNewTodo from './makeNewTodo';

export const TodoInput = () => {
    const [todo , setTodo] = useState('');
    const dispatch = useDispatch();
    

const addToDo =(e)=>{
    e.preventDefault();
    if(todo == '') return;
    const todoObject = makeNewTodo(todo);
    //dispatch aqui
    dispatch(saveTodo(todoObject));
    setTodo('');
}

    return (
        <div className="todoinput">
            <h2>Ingrese su nueva tarea 😁</h2>
            <form autoComplete='off' onSubmit={addToDo}>
                <div className="todoinput__field">
                    <TextField id="outlined-basic" 
                    label="Tarea" 
                    onChange={(e)=> setTodo(e.target.value)}
                    value={todo}
                    variant="outlined" />
                </div>
                <button type="submit">Agregar</button>
            </form>
        </div>
    )
}
