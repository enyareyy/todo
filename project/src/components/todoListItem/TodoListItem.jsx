import React, { Component } from 'react'
import './ToDoListItem.css'

export default class TodoListItem extends Component {
  render() {
    const { title, done, important, id, onDel, onD, onImp } = this.props; //деструктуризация
    let clazz = ""
    let clazzImportant = ""
            if(done){
                clazz+=`done`
            }
            if(important){
                clazzImportant+=`important`
            }
    return (
      <ul>
        <li className='list-group-item d-flex align-items-center'>
        <span className={`flex-grow-1 ${clazz} ${clazzImportant}`} onClick={()=>onD(id)} >{title}</span>
        <button className='btn btn-outline-danger'><i className="bi bi-trash" onClick={()=>onDel(id)}></i></button>
        <button className='btn btn-outline-warning'><i className="bi bi-exclamation-circle-fill" onClick={()=>onImp(id)}></i></button>
        <button className='btn btn-outline-primary'><i className="bi bi-pencil-square"></i></button>
        </li>
      </ul>
    )
  }
} 
