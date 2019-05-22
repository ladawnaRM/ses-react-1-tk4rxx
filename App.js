import React, { Component } from 'react';
import './style.css';

const InputForm = props => {
  return (
    <form>
      <input onChange={props.setValue} value={props.value} type='text' />
      <input type='submit' onClick={props.addToDo}/>
    </form>
  )
}

const ToDoList = props => {
  return (
  <ul>
    {props.toDos.map(item => <li>{item}</li>)}
  </ul>
  )
}

class App extends Component {
  constructor() {
    super()
    this.state = {
      toDos: [],
      value: ''
    }
  }

  addToDo = e => {
    e.preventDefault()
    if(this.state.value.trim().length){
       this.setState((prevState) => ({
        toDos: [...prevState.toDos, this.state.value],
        value: ''
      }))
    }
  }

  setValue = e => {
    this.setState({ value: e.target.value })
  }

  render() {
    const { toDos, value } = this.state
    
    return (
      <div>
        <h1>To Do List</h1>
        <InputForm value={value}
          setValue={this.setValue}
          addToDo={this.addToDo} />
        <ToDoList toDos={toDos} />
      </div>
    );
  }
}

export default App
