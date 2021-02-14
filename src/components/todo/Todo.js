import React, { useState } from 'react'
import Checkbox from '@material-ui/core/Checkbox';
import CloseIcon from '@material-ui/icons/Close';
import './Todo.css';
import { deleteTodo } from '../../features/todoSlice';
import { useDispatch } from 'react-redux';
import CircleCheckedFilled from '@material-ui/icons/CheckCircle';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';

const initialState = {
    mouseX: null,
    mouseY: null,
};



export const Todo = ({ id, task }) => {

    const dispatch = useDispatch();
    const [state, setState] = useState(initialState);
    const [able , setAble ] = useState(true);
    const [todoText , setTodoText ] = useState(task);
    const [check ,setCheck] = useState(false);
    //const [ableEdit ,setAbleEdit] = useState(false)

    const handleClick = (event) => {
        event.preventDefault();
        setState({
            mouseX: event.clientX - 2,
            mouseY: event.clientY - 4,
        });
    };

    const handleClose = () => {
        setState(initialState);
    };
    
    const updateTodo =(e)=>{
        e.preventDefault();
        setAble(true);
    }
    
    const allowEdit =()=>{
        setAble(false);
        setCheck(false)
    }

    return (
        <div onContextMenu={handleClick} className={['todo', check ? 'green': able? '':'orange'].join(" ")}>
            <Checkbox
            onClick={()=>setCheck(!check)}
            checked={check}
            checkedIcon={<CircleCheckedFilled />}
            style={{
                color:'green',
                transform:'scale(1.5)',
                borderRadius:'12px'
            }} className="todoCheck" />
            <div className="todo__content">
                <form onSubmit={updateTodo} >
                <input value={todoText} 
                onChange={(e)=> setTodoText(e.target.value)}
                type="text" disabled={able} />
                <button id="todoButton" type="submit"></button>
                </form>
            </div>
            <div
                onClick={() => dispatch(deleteTodo(id))}
                className="disappearTodo">
                <CloseIcon  />
            </div>
            <Menu
                keepMounted
                open={state.mouseY !== null}
                onClose={handleClose}
                anchorReference="anchorPosition"
                anchorPosition={
                    state.mouseY !== null && state.mouseX !== null
                        ? { top: state.mouseY, left: state.mouseX }
                        : undefined
                }
            >
                <MenuItem onClick={handleClose}>
                        <p onClick={allowEdit}>Editar</p>
                    </MenuItem>
            </Menu>
        </div>
    )
}
