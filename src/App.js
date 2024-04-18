import { TodoCounter } from './components/TodoCounter';
import { TodoSearch } from './components/TodoSearch';
import { TodoList } from './components/TodoList';
import { TodoItem } from './components/TodoItem';
import { CreateTodoButton } from './components/CreateTodoButton';
import React from 'react';


const defaultTodos=[
  {text:'cortar cebolla',completed:true},
  {text:'llorar con la llorona',completed:false},
  {text:'lalallala',completed:true},

];


function App() {
  return (

    <React.Fragment>

      <TodoCounter completed={2} total={10} />

      <TodoSearch />

      <TodoList>
        {defaultTodos.map(todo=>{
        return (
          <TodoItem key={todo.text}   text={todo.text} completed={todo.completed} />
        )}
        )}
      </TodoList>

      <CreateTodoButton />

    </React.Fragment>




  );
}








export default App;
