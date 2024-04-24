import '../styles/CreateTodoButton.css';


function CreateTodoButton(){
    return (
  
      <button className="CreateTodoButton" 
      onClick={
        ()=> console.log('CreateTodoButton')
      }
      >+</button>
  
    );

}

export {CreateTodoButton};