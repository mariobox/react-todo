import React, { Component } from 'react';
import './App.css';
import ToDo from './ToDo'


class ToDoList extends Component {
  render() {
    return (
        <div className="container">
          {this.props.tasks.map((task, index) => <ToDo task={task} key={index} onTaskComplete={this.props.onTaskComplete} />)}
        </div>
    );
  }
}

export default ToDoList;
