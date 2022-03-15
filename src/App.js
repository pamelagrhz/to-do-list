import './App.css';
import React from 'react';
import {TodoCounter} from './components/TodoCounter';
import { TodoSearch } from './components/TodoSearch';
import { TodoList } from './components/TodoList';
import {CreateTodoButton} from './components/CreateTodoButton';
import { TodoItem } from './components/TodoItem';

const toDo=[
  {
    id:1,
    text: 'Crear lista base de todos',
    completed: false},
  {
    id: 2,
    text: 'Crear componentes base ',
    completed: false},
  { 
    id: 3,
    text: 'Subir a github avance de repo',
    completed: false}
]
var completed=toDo.filter(c=> c.completed === true);

function App() {
  return (
    <React.Fragment>
       <h3>To Do List</h3>
      <TodoCounter total={toDo.length} completed={completed.length}/>
      <TodoSearch/>
      <TodoList>
          {toDo.map(t =>
            (<TodoItem key={t.id}
              item={t}/>)
            )}
      </TodoList>
      <CreateTodoButton/>
    </React.Fragment>
    
   );
}

export default App;
