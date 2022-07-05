
import './App.css';
import React from 'react';
import AddBar from './Components/AddBar/AddBar';
import TaskList from './Components/TaskList/TaskList';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      taskList: [{id: 1, text: "task1"},{id: 2, text: "task2"}, {id: 3, text: "task3"}]
    };
    this.addTask = this.addTask.bind(this);
  }

  addTask(task) {
    let tasks = this.state.taskList;
    tasks = tasks.concat({text: task, id: tasks.length+1});

    this.setState({taskList: tasks});
  }

  render() {
    return (
      <div>
        <h1>My To Do List</h1>
        <div className="App">
          <AddBar onAdd={this.addTask}/>
          <TaskList tasks={this.state.taskList}/>
        </div>
      </div>
    );
  }
}

export default App;
