import React from 'react';
import {useSelector} from 'react-redux';

const Todolist = () => {
  
  const todos = useSelector ((state)=>state.todoreducer.todos);
  console.log (todos);
  
    return (
    <div>
        <h1>Todolist</h1>
        
        {todos.map((todo,i) => (
            <div>
                <h2 key={todo.id}>{todo.text}</h2>
                <button>DELETE</button>
                <button>DONE</button>
            </div>
        ))}
        
        </div>
  );
};

export default Todolist;