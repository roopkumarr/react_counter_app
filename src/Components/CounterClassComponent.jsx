import React, { Component } from "react";

class CounterClassComponent extends Component{
    constructor(){
        super();
        this.state = {
            classCounter : 0
        }
    }
    resetClassCounter(){
        this.setState({
            classCounter: 0
        })
    }
    incClassCounter(){
        this.setState({
            classCounter : this.state.classCounter + 1
        })
    }
    decClassCounter(){
        if(this.state.classCounter > 0)
        this.setState({
            classCounter : this.state.classCounter - 1
        })
    }
    render(){
        return(
            <div>
            <h1>Class Counter</h1>
            <h2>{this.state.classCounter}</h2>
            <button onClick={()=>{this.incClassCounter()}}>+</button>
            {/* <button onClick={()=>{this.resetClassCounter()}}>reset</button> */}
            <button onClick={()=>{this.decClassCounter()}}>-</button>
            </div>
        )
    }
}

export default CounterClassComponent;