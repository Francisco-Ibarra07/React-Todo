import React from 'react'

export class AddTodo extends React.Component {

  state = {
    title: ''
  }

  // As we type into form, state var named 'title' is constantly changed
  onChange = (event) => {
    this.setState({
      // Key will become whatever the name of input is (in this case 'title')
      [event.target.name]: event.target.value
    });
  }

  onSubmit = (event) => {
    event.preventDefault();
    this.props.addTodo(this.state.title);
    this.setState({ title: '' });
  }

  render() {
    return (
      <form onSubmit={this.onSubmit} style={{ display: 'flex' }}>
        <input
          type="text"
          name="title"
          style={{ flex: '10', padding: '5px' }}
          placeholder="Add Todo..."
          value={this.state.title}
          onChange={this.onChange}
        />
        <input
          type="submit"
          value="Submit"
          className="btn"
          style={{ flex: '1' }}
        />
      </form>
    )
  }
}

export default AddTodo
