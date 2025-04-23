import React, { Component } from 'react'

export default class TodoSearch extends Component {
  state={
    inputText:" "
  }
  onSearchChange=(e)=>{
    this.setState({inputText:e.target.value})
    this.props.onSetText(this.state.inputText)
  }
  btns=[
    {title:'All'},
    {title:'Active'},
    {title:'Done'}
  ]
  render() {
    const { btnStatus, onSetBtn } = this.props;
    
    const buttons = this.btns.map((btn) => {
      const activeBtn = btnStatus === btn.title;
      const clazz = activeBtn ? "btn-info" : "btn-outline-secondary";
      
      return (
        <button 
          key={btn.title} onClick={() => onSetBtn(btn.title)} className={`btn ${clazz}`}>{btn.title}</button>
      );
    });
    return (
      <div className='d-flex'>
        <input type="text" className='form-control' onChange={this.onSearchChange} value={this.state.inputText}/> 
        {buttons}
      </div>
    )
  }
}


