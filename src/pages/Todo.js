import React, { Component } from 'react'

export default class Todo extends Component {
    constructor(props){
        super(props),
        this.state = {
            lists: ["Mohammed", "Saud"],
            task: ""
        }
    }

    handleTask = (event) => {
        this.setState({task: event.target.value});
    }

    addItem = () => {
        this.setState({lists: [...this.state.lists, this.state.task]})
        this.setState({task: ""})
    }

    clearList = () => {
        this.setState({lists: []})
    }

  render() {
    const lists = this.state.lists.map((list, index) => {
        return (
            <li key={index}> {list} </li>
        );
    })
    return (
        <form>
            <div>
                <h1>My list</h1>
                <button type="button" onClick={this.clearList}>Clear List</button>
                <ul>
                    {lists}
                </ul>
                <h1> {this.state.task}</h1>
                <input type='text' value={this.state.task} placeholder='Type the list' onChange={this.handleTask}/> 
                <button type="button" onClick={this.addItem}> Add item</button>
                
            </div>
        </form>
    )
  }
}
