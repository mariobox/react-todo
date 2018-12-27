import React, { Component } from 'react';
import ToDoList from './ToDoList';

class App extends Component {
  constructor() {
    super();
    this.state = {
      newTodo: '',
      tasks: []
    }
  }  
  
  onHandleChange(event) {
    this.setState({
      newTodo : event.target.value
    })
  }
  
  handleNewTodo(event) {
    event.preventDefault();
    this.setState({
      tasks: [...this.state.tasks, this.state.newTodo]
    })
    document.getElementsByName('todo')[0].value = '';
  }
  
  onTaskComplete(event) {
    let index = this.state.tasks.indexOf(event.target.value);
    if (index > -1) {
    this.state.tasks.splice(index,1);
    this.setState({
      tasks: this.state.tasks
    })      
    } 
  }
  
  render() {
    return (
      <div className="App">
        <header>
          <div className="navbar navbar-dark bg-dark box-shadow">
            <div className="container d-flex justify-content-between">
              <a href="/" className="navbar-brand d-flex align-items-center">
                <strong>To Do List</strong>
              </a>              
            </div>
          </div>
        </header>
        <br />
        <div className="container">
          <div className="row">
            <div className="col">
              <p>Use the input form to add TODOs.</p>
              <form onSubmit={this.handleNewTodo.bind(this)}>
                <input onChange={(event) => this.onHandleChange(event)} type='text' name='todo' autoFocus='true' /> 
                <button className='btn btn-primary' type='submit'>Submit</button>
              </form>
              <hr />
              <h3>Pending Tasks</h3>
              <p>Click on checkbox when completed to remove task.</p>
            </div>
          </div>
        </div>
        <ToDoList tasks={this.state.tasks} onTaskComplete={this.onTaskComplete.bind(this)} />          
      </div>
    );
  }
}

export default App;
