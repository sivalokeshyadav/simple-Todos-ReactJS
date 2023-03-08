// Write your code here

import {Component} from 'react'

import './index.css'

class TodoItem extends Component {
  onClickButton = () => {
    const {todoInfo, deleteItem} = this.props
    const {id} = todoInfo
    deleteItem(id)
  }

  render() {
    const {todoInfo} = this.props
    const {title} = todoInfo

    return (
      <li className="todo-item">
        <p className="todo-item-heading">{title}</p>
        <button
          className="delete-button"
          type="button"
          onClick={this.onClickButton}
        >
          Delete
        </button>
      </li>
    )
  }
}

export default TodoItem
