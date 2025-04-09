import React from 'react'
import TodoListItem from '../todoListItem/TodoListItem'

const TodoList = (props) => {
  console.log(props.todo);
  
  return (
    <ul className='list-group mt-1 mb-1'>
      {props.todo.map(el=>(
        <TodoListItem {...el} onDel={props.onDel} onD={props.onD} onImp={props.onImp}/> 
      )
      )}
    </ul>
  )
}

export default TodoList