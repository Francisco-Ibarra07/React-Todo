import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Todos from './components/Todos';
import AddTodo from './components/AddTodo';
import About from './components/pages/About';
import Header from './components/layout/Header';
import axios from 'axios';

class App extends React.Component {
  state = {
    todos: []
  }

  componentDidMount() {
    axios.get('https://jsonplaceholder.typicode.com/todos?_limit=1')
      .then(response => {
        this.setState({ todos: response.data });
      })
  }

  // Toggle complete
  markComplete = (id) => {
    this.setState({
      todos: this.state.todos.map(todo => {
        if (todo.id === id) {
          todo.completed = !todo.completed;
        }
        return todo;
      })
    })
  }

  // Removes an item from todo list
  // Re-assigns the array to be all elements besides the one with the given
  // id
  deleteTodo = (id) => {
    axios.delete('https://jsonplaceholder.typicode.com/todos/' + id)
      .then(res => {
        this.setState({
          todos: [...this.state.todos.filter(todo => todo.id !== id)]
        })
      })
  }

  // TODO: Fix the constant 'id' value and use 'uuid' module
  // https://youtu.be/sBws8MSXN7A?t=4428
  addTodo = (title) => {
    axios.post('https://jsonplaceholder.typicode.com/todos', {
      title: title,
      completed: false
    })
      .then(res => {
        console.log(res);
        this.setState({
          todos: [...this.state.todos, res.data]
        })
      })
  }

  render() {
    return (
      <Router>
        <div className="App">
          <Header />
          <Route exact path="/" render={props => (
            <React.Fragment>
              <AddTodo addTodo={this.addTodo} />
              <Todos
                todos={this.state.todos}
                markComplete={this.markComplete}
                deleteTodo={this.deleteTodo}
              />
            </React.Fragment>
          )} />

          <Route path="/about" component={About} />
        </div>
      </Router>
    );
  }
}

export default App;
