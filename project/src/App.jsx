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
const [btnStatus, setBtnStatus]=useState('All')
const [text, onSetText]=useState("");
const [editTodoId, setEditTodoId] = useState(null);
const [editValue, setEditValue] = useState("");


const search = (todos, textSearch) => {
  if(textSearch.length === 0 || textSearch.trim() === ""){
    return todos;
  }
  return todos.filter(todo => {
    return todo.title.toLowerCase().indexOf(textSearch.toLowerCase()) > -1;
  });
}

const onSetBtn=(name)=>{
  setBtnStatus(name)
}
const filter=(todos, btnSt)=>{
  switch(btnSt){
    case'All':
    return todos
    case 'Active':
      return todos.filter(todo=>!todo.done)
      case 'Done': 
      return todos.filter(todo=>todo.done)
      default:
        return todos
  }
}

const updData=filter(search(todoData, text), btnStatus)

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
  const el=todoData.find(el=>el.id==id)
  const updEl={...el, important:!el.important}
  const index=todoData.findIndex(el=>el.id==id)
  const before=todoData.slice(0,  index)
  const after=todoData.slice(index+1);

  const updTodoData=[...before, updEl, ...after]
  setTodoData(updTodoData)
}

const onEdit = (id) => {
  const todo = todoData.find(el => el.id === id);
  setEditTodoId(id);
  setEditValue(todo.title);
};

const onUpdateTodo = (newText) => {
  const updated = todoData.map(todo => {
    if (todo.id === editTodoId) {
      return { ...todo, title: newText };
    }
    return todo;
  });
  setTodoData(updated);
  setEditTodoId(null);
  setEditValue("");
};


const onAddTodo=(text)=>{
const ids=todoData.map(el=>el.id)
const newTodo={
  title:text,
  done:false,
  important: false,
  id:ids.at(-1)+1 || 1
}
setTodoData([...todoData,newTodo])
}

const doneCount = todoData.filter(todo => todo.done).length;
const todoCount = todoData.length - doneCount;


return (
  <div className='container'>
    <AppTodo done={doneCount} todo={todoCount} />
    <TodoSearch btnStatus={btnStatus} onSetBtn={onSetBtn} onSetText={onSetText}/>
      {todoData.length === 0 ? (
        <h2 className="no-todo">No ToDo</h2>
      ) : (
        <TodoList todo={updData} onDel={onDelTodo} onD={onDone} onImp={onImportant} onE={onEdit}/>
      )}
    <TodoAdd
  onAdd={onAddTodo}
  editValue={editValue}
  setEditValue={setEditValue}
  onUpdate={onUpdateTodo}
  isEditing={editTodoId !== null}/>
  </div>
)
}

export default App