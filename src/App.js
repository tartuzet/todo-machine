import { TodoCounter } from './components/TodoCounter';
import { TodoSearch } from './components/TodoSearch';
import { TodoList } from './components/TodoList';
import { TodoItem } from './components/TodoItem';
import { CreateTodoButton } from './components/CreateTodoButton';
import React from 'react';


const defaultTodos = [
  { text: 'cortar cebolla', completed: true },
  { text: 'llorar con la llorona', completed: false },
  { text: 'lalallala', completed: true },

];


function App() {

  const [searchValue, setSearchValue] = React.useState('');

  const [todos, setTodos] = React.useState(defaultTodos);

  const todosCompleted = todos.filter(todo => !!todo.completed).length;

  const totalTodos = todos.length;

  const searchTodos = todos.filter((todo) => {
    const todoText = todo.text.toLocaleLowerCase();
    const searchText = searchValue.toLocaleLowerCase();
    return todoText.includes(searchText);
  })


  const completeTodo = (text) =>{
    const newTodos = [...todos];
    const todoIndex = newTodos.findIndex(
      (todo) => todo.text == text
    );
    newTodos[todoIndex].completed = true;
    setTodos(newTodos)

  }


  return (

    <React.Fragment>

      <TodoCounter completed={todosCompleted} total={totalTodos} />

      <TodoSearch searchValue={searchValue} setSearchValue={setSearchValue} />

      <TodoList>
        {searchTodos.map(todo => {
          return (
            <TodoItem 
            key={todo.text} 
            text={todo.text} 
            completed={todo.completed} 
            onCompleted={completeTodo}
            />
          )
        }
        )}
      </TodoList>

      <CreateTodoButton />

    </React.Fragment>




  );
}








export default App;
