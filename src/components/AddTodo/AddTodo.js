import React, { useState } from "react";
import { useDispatch } from "react-redux";
 import {addTodo} from "../../JS/actions/todoactions";
  
 
 const AddTodo = () =>  {

    const [todoText, setTodoText] = useState("");
    const dispatch = useDispatch();
    const add =() => {

        let newtodo = {
            text :todoText,
            Id : Math.random(),
            isDone : false , 
        } ;


        if (todoText === "")return alert ("please enter  text ")
        dispatch
        (addTodo(newtodo));
        setTodoText("");
    } ;

   return (
     <div>
         <h1>My todos</h1>
         <input       
         placeholder = "enter text"
         onChange={(e)=> setTodoText (e.target.value)}
         />
         <button onClick={()=> add ()}>ADD</button>
         
         
         
         
         
         </div>
   );
 };
 
 export default AddTodo ;