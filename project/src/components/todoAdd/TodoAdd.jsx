import React, { Component } from 'react'

export default class TodoAdd extends Component {
  render() {
    return (
      <div className='d-flex'>
        <input type="text" className='form-control'/>
        <button className='btn btn-info'>add</button>
      </div>
    )
  }
}
