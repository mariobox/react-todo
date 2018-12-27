import React, { Component } from 'react';
import './App.css';


class ToDo extends Component {
  /* run through each checkbox and make sure it is unchecked */
  unCheck() {
    let checkboxes = document.getElementsByTagName('input');
    for (var i=0; i<checkboxes.length; i++)  {
      if (checkboxes[i].type === 'checkbox')   {
      checkboxes[i].checked = false;
      }
    }
  }
  
  render() {
    return (
      <div className="row">
        <div className='column'>
          <div className="form-check">       
            <input 
              type="checkbox" 
              name={this.props.task} 
              className="form-check-input"
              value={this.props.task} 
              onChange={(event) => this.props.onTaskComplete(event)}
              onLoad={this.unCheck.bind(this)()}
            />
            <label className="form-check-label">{this.props.task}</label>     
          </div>
        </div>
      </div>
    );
  }
}

export default ToDo;
