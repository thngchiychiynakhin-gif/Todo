"use client"
import { type ChangeEventHandler, useState } from 'react'

interface TodoFormProps {
  addTodo: (todo: string) => void
}

const TodoForm = ({ addTodo }: TodoFormProps) => {
  const [todo, setTodo] = useState('')
  const handleTodoFormChanged: ChangeEventHandler<HTMLInputElement> = (event) => {
    setTodo(event.target.value)
  }
  const handleAddTodo = () => {
    addTodo(todo)
    setTodo('')
  }

  return (
    <>
      <input type="text" onChange={handleTodoFormChanged} value={todo} />
      <button onClick={handleAddTodo}>Add Todo</button>
    </>
  )
}

interface Todo {
  id: number;
  content: string;
}

interface TodoListProps {
  todos: Todo[]
}

const TodoList = ({ todos }: TodoListProps) => {
  return (
    <ul>
      {
        todos.map(todo => <li key={todo.id}>{todo.content}</li>)
      }
    </ul>
  )
}

const IndexPage = () => {
  const[isChecked, setIsChecked] = useState(false);
  const [todos, setTodos] = useState<Todo[]>([
    { id: 1, content: 'Todo#1' },
    { id: 2, content: 'Todo#2' },
    { id: 3, content: 'Todo#3' },
  ])

  const addTodo = (todo: string) => {
    setTodos([{ id: todos.length + 1, content: todo }, ...todos])
  };
  const handleIsCheck =(event){
    setIsChecked(event.target.checked);
  }
  return (
    <>
      <TodoForm addTodo={addTodo}></TodoForm>
      <TodoList todos={todos}></TodoList>
      {isChecked && <p>Checked!</p>}
      <input type="checkbox" name='' id='' onChange={handleIsCheck} />
    </>
  )
}

export default IndexPage