import React from 'react'
import AppTodo from './components/appTodo/AppTodo'
import TodoSearch from './components/todoSearch/TodoSearch'
import TodoList from './components/todoList/TodoList'
import TodoAdd from './components/todoAdd/TodoAdd'
import './App.css'

const App = () => {
  const todoData=[
    {title:"Read a book", done:false, important:false, id:1},
    {title:"Lern React", done:false, important:false, id:2},
    {title:"Go to gym", done:false, important:false, id:3},
    {title:"Have a dinner", done:false, important:false, id:4},
  ]
  return (
    <div className='container'>
      <AppTodo/>
      <TodoSearch/>
      <TodoList todo={todoData}/>
      <TodoAdd/>
    </div>
  )
}

export default App