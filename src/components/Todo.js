import React from 'react';

import './Todo.css';

export default class Todo extends React.Component {
  render() {
    return (
      <div class="todo-container">
        <div
          class={'todo-item' + (this.props.item.complete ? ' complete' : '')}
          onClick={this.props.toggleComplete}
        >
          {this.props.item.text}
        </div>
        <button onClick={this.props.delete}>x</button>
      </div>
    );
  }
}
