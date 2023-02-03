import React, { Component } from "react";

export class Tasks extends Component {
  handleTasks = ({ index, userInput }) => {
    if (userInput.experience[index].tasks === undefined) return;
    let tasks = userInput.experience[index].tasks.split(",");
    let taskArray = tasks.map((task) => <li key={task}>{task}</li>);
    return <ul>{taskArray}</ul>;
  };

  render() {
    return this.handleTasks(this.props);
  }
}

// handleTasks = (props) => {
//     let index = props.index;
//     if (this.props.userInput.experience[index].tasks === undefined) return;
//     let tasks = this.props.userInput.experience[index].tasks.split(",");
//     let taskArray = tasks.map((task) => <li key={task}>{task}</li>);
//     return <ul>{taskArray}</ul>;
//   };
