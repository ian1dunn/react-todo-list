import React from 'react';

import TodoForm from './TodoForm';
import Todo from './Todo';

export default class TodoList extends React.Component {
  state = {
    items: [],
    filter: 'all'
  };

  addItem = (item) => {
    this.setState({
      items: [item, ...this.state.items]
    });
  };

  toggleComplete = (id) => {
    this.setState({
      items: this.state.items.map((item) => {
        if (item.id === id) {
          return {
            ...item,
            complete: !item.complete
          };
        } else {
          return item;
        }
      })
    });
  };

  deleteItem = (id) => {
    this.setState({
      items: this.state.items.filter((item) => item.id !== id)
    });
  };

  deleteCompletedItems = () => {
    this.setState({
      items: this.state.items.filter((item) => !item.complete)
    });
  };

  filterItems = (newFilter) => {
    this.setState({
      filter: newFilter
    });
  };

  render() {
    let items = [];

    if (this.state.filter === 'active') {
      items = this.state.items.filter((item) => !item.complete);
    } else if (this.state.filter === 'complete') {
      items = this.state.items.filter((item) => item.complete);
    } else {
      // All
      items = this.state.items;
    }

    return (
      <div>
        <div>
          Active Items:{' '}
          {this.state.items.filter((item) => !item.complete).length}
        </div>
        <TodoForm onSubmit={this.addItem} />
        {items.map((item) => (
          <Todo
            toggleComplete={() => this.toggleComplete(item.id)}
            delete={() => this.deleteItem(item.id)}
            item={item}
          />
        ))}
        <div>
          <button onClick={() => this.filterItems('all')}>All Items</button>
          <button onClick={() => this.filterItems('active')}>
            Active Items
          </button>
          <button onClick={() => this.filterItems('complete')}>
            Completed Items
          </button>
        </div>
        <div>
          {this.state.items.some((item) => item.complete) ? (
            <button onClick={this.deleteCompletedItems}>
              Remove All Completed Items
            </button>
          ) : null}
        </div>
      </div>
    );
  }
}
