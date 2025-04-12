import React from 'react'

const AppTodo = ({ done, todo }) => {
  return (
    <div className='d-flex align-items-center justify-content-between mt-2'>
      <h1>Todo</h1>
      <h3>{done} done, {todo} todo</h3>
    </div>
  )
}

export default AppTodo