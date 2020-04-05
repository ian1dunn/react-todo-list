import React from 'react';
import shortid from 'shortid';

export default class TodoForm extends React.Component {
  state = {
    text: ''
  };

  handleChange = (event) => {
    this.setState({
      [event.target.name]: event.target.value
    });
  };

  handleSubmit = (event) => {
    event.preventDefault();
    this.props.onSubmit({
      text: this.state.text,
      complete: false,
      id: shortid.generate()
    });
    this.setState({
      text: ''
    });
  };

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <input
          name="text"
          value={this.state.text}
          onChange={this.handleChange}
          placeholder="Add an item"
        />
        <button onClick={this.handleSubmit}>Add Item</button>
      </form>
    );
  }
}
