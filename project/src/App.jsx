import React, { useState } from 'react'
import AppTodo from './components/appTodo/AppTodo'
import TodoSearch from './components/todoSearch/TodoSearch'
import TodoList from './components/todoList/TodoList'
import TodoAdd from './components/todoAdd/TodoAdd'
import './App.css'

const App = () => {
  const [todoData, setTodoData]=useState(
    [
    {title:"Read a book", done:false, important:false, id:1},
    {title:"Lern React", done:false, important:false, id:2},
    {title:"Go to gym", done:false, important:false, id:3},
    {title:"Have a dinner", done:false, important:false, id:4},
  ]
)
const onDelTodo=(id)=>{
  console.log(id);
  const filetedTodo=todoData.filter(todo=>todo.id!==id)
  console.log(filetedTodo);
  setTodoData(filetedTodo)
}

const onDone = (id) => {
  const updated = todoData.map(todo => { //создаем новый массив 
    if (todo.id === id) { //ищем id 
      return { ...todo, done: !todo.done }; // ...вызываем туду затем меняем дон фолс на тру или наоборот
    }
    return todo; // если онклик не заработал то возвращаем исходный 
  });
  setTodoData(updated); //обновляем состояние
};

const onImportant =(id)=>{
  // console.log(id `imp`);
  
  const updated = todoData.map(todo => { 
    if (todo.id === id) { 
      return { ...todo, important: !todo.important }; 
    }
    return todo; 
  });
  setTodoData(updated);
}

  return (
    <div className='container'>
      <AppTodo/>
      <TodoSearch/>
      <TodoList todo={todoData} onDel={onDelTodo} onD={onDone} onImp={onImportant}/>
      <TodoAdd/>
    </div>
  )
}

export default App