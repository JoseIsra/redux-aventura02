import React from 'react';
import { useSelector } from 'react-redux';
import './App.css';
import { Todo, TodoInput } from './components';
import { selectTodo } from './features/todoSlice';
import imagenlista from './imagenes/lista.png';
function App() {
  const todos = useSelector(selectTodo);

  
  return (
    <div className="app">
      <h2> <em> Funcionalidad <span className="maintitle">Todoapp</span></em></h2>
      <div className="app__instructions">
      <p><em><strong>Nota: Puedes agregar tus tareas con la tecla  Enter</strong></em></p>
      <p><em><strong>Nota de la nota: Presiona click derecho para editar tus tareas,
        <br />Enter para guardar
        </strong></em></p>

      </div>
          <div className="app__leftSide">
          <TodoInput />
          </div>
          <div className="app__rightSide">
            <div className="rightSide__header">
            <h3>Lista de tareas</h3>
            <img  src={imagenlista} alt="logotodo"/>
            </div>
            <div className="app__rightSide__content">
            {todos?.map(todo => (
              <Todo key={todo.id} id={todo.id} task={todo.todo} />
            ))}
            </div>
        
          </div>
    </div>
  );
}

export default App;
