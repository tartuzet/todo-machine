import '../styles/TodoSearch.css';
import React from 'react';


function TodoSearch({searchValue,setSearchValue}){

    return (
  
      <input 
      value={searchValue}
      className='TodoSearch' 
      placeholder="cortar cebolla"
      onChange={(event)=> setSearchValue(event.target.value)}
      />
  
    );

}

export {TodoSearch};