'use client';
import { useState } from 'react';
const IndexPage = ()=>{
  const[todo, setTodo] = useState("");
  const [todos, setTodos] = useState([
    {id: 1, text: "Todo1"},
    {id: 2, text: "Todo2"},
    {id: 3, text: "Todo3"}
  ]);
  const handleAddTodo = (event) =>{
    setTodos([event.target.value]);
  }
  return(
    <>
    <div>{todo}</div>
    <input type="text" onChange={event => setTodo(event.target.value)}/>
    <button onClick={handleAddTodo}>Add</button>
    <ul>
      {todos.map(todo => <li key={todo.id}>{todo.text}</li>)}
    </ul>
    </>
  )
}
export default IndexPage;