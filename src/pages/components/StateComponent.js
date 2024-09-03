import React, { Component } from 'react'

export default class StateComponent extends Component {
    constructor(props){
        super(props),
        this.changeColor = this.changeColor.bind(this);
        this.state={
            counter: 5,
            show: true,
            color: "red"
        }
    }

    changeCounter= () => {
        this.setState({counter: 12});
    }

    changeShow = () => {
        this.state.show?this.setState({show: false}): this.setState({show: true});
    }

    changeColor(event) {
        this.setState({color: event.target.value})
    }
  render() {
    return (
        <form>
            <h1 style={{color: "gray"}}> The color is {this.state.color}</h1>
            <input type={"text"} onChange={this.changeColor}/>
            <div>
                <h1>The counter is :  {this.state.counter}</h1>
                <button onClick={this.changeCounter}>Change Counter</button>
                <h1>{this.state.show?<>On</>: <>OFF</>}</h1>
                <button onClick={this.changeShow}> Change Show</button>
            </div>
        </form>
    )
  }
}
