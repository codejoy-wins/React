import React, { Component } from 'react';
import Header from './components/layout/Header';
import Todos from './components/Todos';
import AddTodo from './components/AddTodo';

import './App.css';
// JSX uses className instead of class for attributes
class App extends Component {

  // introduction to states

  state = {
    todos: [
      {
        id: 1,
        title: 'Take out the garbage',
        completed: false
      },
      {
        id: 2,
        title: 'Dinner',
        completed: false
      },
      {
        id: 3,
        title: 'Walk the dog',
        completed: false
      }
    ]
  }

  markComplete = (id) => {
    this.setState({ todos: this.state.todos.map(todo => {
      if(todo.id == id){
        todo.completed = !todo.completed;
      }
      return todo;
    }) });
    console.log('From app.js bro');
    console.log(id);
    console.log(`from ${id} bro`);
  }

  // Delete Todo
  delTodo = (id) => {
    this.setState({ todos: [...this.state.todos.filter(todo => todo.id != id)] });
    console.log(`${id} was deleted`)
  }

// kinda like view from django
  // Add Todo
  // barely understand how this works
  addTodo = (title) => {
    const newTodo = {
      id: 4,
      title,
      completed: false
    }

    this.setState({todos: [...this.state.todos, newTodo] });
  }

  render() {
    return (
      <div className="App">
        <div className="container">
          < Header />
          < AddTodo addTodo={this.addTodo}/>
          <Todos todos={this.state.todos} markComplete = {this.markComplete} delTodo={this.delTodo} />
        </div>
      </div>
    );
  }
}

export default App;
