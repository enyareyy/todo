import React, { Component } from 'react'

export default class TodoAdd extends Component {

  state={
    inpText:''
  }
  setText=(e)=>{
    this.setState({inpText:e.target.value})
  }

  add=()=>{
    const trimm=this.state.inpText.trim()
    if(trimm===''){
      return trimm
    }
    this.props.onAdd(trimm)
    this.setState({inpText:""})
  }
  render() {
    return (
      <div className='d-flex'>
        <input type="text" className='form-control' value={this.state.inpText} onChange={this.setText}/>
        <button className='btn btn-info' onClick={this.add}>add</button>
      </div>
    )
  }
}
