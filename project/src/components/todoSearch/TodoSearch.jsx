import React, { Component } from 'react'

export default class TodoSearch extends Component {
  render() {
    return (
      <div className='d-flex'>
        <input type="text" className='form-control'/> 
        <button className='btn btn-outline-secondary'>All</button>
        <button className='btn btn-outline-secondary'>Active</button>
        <button className='btn btn-outline-secondary'>Done</button>
      </div>
    )
  }
}
