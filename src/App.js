import React, { Component } from 'react';
import './App.css';
import './OptionView';
import OptionView from './OptionView';
import OptionGroup from './OptionGroup'

export default class TodoDragDropDemo extends Component {
  
  state = {
    tasks: [
      {id: 1, task: "Read book", type: "inProgress", backgroundColor: "red"},
      {id: 2, task: "Pay bills", type:"inProgress", backgroundColor: "green"},
      {id: 3, task: "Go to the gym", type: "done", backgroundColor: "blue"},
      {id: 4, task: "Play baseball", type: "done", backgroundColor: "green"}
    ]
  };
 
  onDragStart = (event, task) => {
    console.log(`drag start on div: ${task}`);
    event.dataTransfer.setData('task', task);
  };

  onDragOver = (event) => {
    event.preventDefault();
  };

  onDrop = (event, cat) => {
    let taskName = event.dataTransfer.getData('task');

    let tasks = this.state.tasks.filter((task) => {
      if(task.task === taskName)
        task.type = cat;
      return task;
    });

    this.setState({
      ...this.setState,
      tasks
    });

  };

  render() {

    let tasks = {
      inProgress: [],
      done: []
    };

    this.state.tasks.forEach(task => {
      tasks[task.type].push(
        <div key={task.id}
          onDragStart= {event => this.onDragStart(event, task.task)}
          draggable
          className="draggable"
          style={{backgroundColor: task.backgroundColor}}>
          {task.task}
        </div>
      );
    });

    // <OptionView draggable onDragStart={event => console.log(event)} content={"helloo"} group="choice"></OptionView>
    //     <OptionView draggable content={"my"} group="choice"></OptionView>
    //     <OptionView draggable content={"name"} group="choice"></OptionView>
    //     <OptionView draggable content={"loloo"} group="choice"></OptionView>

    return (
      <div className="drag-container">
        <OptionGroup></OptionGroup>

        <h2 className="head">Todo List Drag & Drop</h2>
        <div className="inProgress"
          onDragOver={event => this.onDragOver(event)}
          onDrop={event => this.onDrop(event, "inProgress")}>
          <span className="group-header">In Progress</span>
          {tasks.inProgress}
        </div>
        <div className="droppable"
          onDragOver={event => this.onDragOver(event)}
          onDrop={event => this.onDrop(event, "done")}>
          <span className="group-header">Done</span>
          {tasks.done}
        </div>
      </div>
    );
  }
}
