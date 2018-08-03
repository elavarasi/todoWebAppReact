import React from 'react';
import ReactDOM from 'react-dom';

class ToDo extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      currentTodo: '',
      todolist: []
    };
    this.addToDo = this.addToDo.bind(this);
    this.updateInput = this.updateInput.bind(this);
    this.deleteToDo = this.deleteToDo.bind(this);
  }

  updateInput(event){
    this.setState(
      {
        currentTodo: event.target.value
      }
    )
  }

  addToDo(event) {
    event.preventDefault();
    if(this.state.currentTodo) {
      let newtodo = [...this.state.todolist];
      newtodo.push(this.state.currentTodo);
      console.log("inside the add to do");
      console.log(this.state.currentTodo);
      console.log(newtodo);
      this.setState(
        {
          todolist: newtodo,
          currentTodo: ''
        }
      )
    }
  }

  deleteToDo(index){
    console.log("inside the delete event");
    console.log(index);
    let newtodo = [...this.state.todolist];
    newtodo.splice(index, 1);
    console.log(newtodo);
    this.setState(
      {
        todolist: newtodo
      }
    )
  }

  render(){
    let liElements = this.state.todolist.map((eachtodo,index) => {
      return <li key={index}>
        {eachtodo}
        <input item={index} height="25" width="25" type="image" src={require('./images/delete.png')} alt="my image" className="delete" onClick={(e) => {e.preventDefault(); this.deleteToDo(index)}}/>
      </li>
    });

    return (
      <div>
        <form name="todoform">
          <input type="text" id="inputToDo" onChange={this.updateInput} value={this.state.currentTodo} placeholder="Enter your todos"/>
          <button onClick={this.addToDo} >Add</button>
          <ul name="todoList" id="todoList">{liElements}</ul>
        </form>
      </div>
    )
  }
}

ReactDOM.render(<ToDo />, document.getElementById("app"));

