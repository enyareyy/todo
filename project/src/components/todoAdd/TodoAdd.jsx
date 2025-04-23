import React, { Component } from 'react'

export default class TodoAdd extends Component {
  componentDidUpdate(prevProps) {
    if (prevProps.editValue !== this.props.editValue) {
      this.setState({ inpText: this.props.editValue });
    }
  }

  state = {
    inpText: ''
  }
  setText = (e) => {
    this.setState({ inpText: e.target.value });
    this.props.setEditValue(e.target.value); 
  }
  handleClick = () => {
    const trimm = this.state.inpText.trim();
    if (trimm === '') return;

    if (this.props.isEditing) {
      this.props.onUpdate(trimm);
    } else {
      this.props.onAdd(trimm);
    }

    this.setState({ inpText: '' });
  }

  render() {
    const btnLabel = this.props.isEditing ? "Change" : "Add";

    return (
      <div className='d-flex'>
        <input
          type="text"
          className='form-control'
          value={this.state.inpText}
          onChange={this.setText}
        />
        <button className='btn btn-info' onClick={this.handleClick}>{btnLabel}</button>
      </div>
    );
  }
}