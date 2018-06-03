import React, {Component} from "react"
import TodoItem from "./TodoItem"

class TodoList extends Component{
  render(){
    return(
      <div>
      <ul>
        <li><TodoItem></TodoItem></li>
      </ul>
      </div>
    )
  }
}

export default TodoList
