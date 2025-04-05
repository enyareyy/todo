import React, { Component } from 'react'

export default class TodoListItem extends Component {
  render() {
    const { todo1 } = this.props; //деструктуризация
    return (
      <ul>
        <li className='list-group-item d-flex align-items-center'>
        <span className='flex-grow-1'>{todo1.title}</span>
        <button className='btn btn-outline-danger'><i className="bi bi-trash"></i></button>
        <button className='btn btn-outline-warning'><i className="bi bi-exclamation-circle-fill"></i></button>
        <button className='btn btn-outline-primary'><i className="bi bi-pencil-square"></i></button>
        </li>
      </ul>
    )
  }
}
