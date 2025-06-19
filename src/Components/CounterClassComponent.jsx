import React, { Component } from "react";

class CounterClassComponent extends Component{
    constructor(props){
        super(props);
        this.state={
            classCounter : 0
        }
    }
    resetClassCounter(){
        this.setState({
            classCounter: 0
        })
    }
    // this.state.classCounter = this.state.classCounter + 1
    incClassCounter(){
        this.setState({
            // classCounter: 1
            classCounter : this.state.classCounter + 1

        })
    }
    decClassCounter(){
        this.setState({
            // classCounter: -1
            classCounter : this.state.classCounter - 1

        })
    }
    render(){
        return(
            <div>
            <h1>Class Counter</h1>
            <h2>{this.state.classCounter}</h2>
            <button onClick={()=>{this.incClassCounter()}}>inc</button>
            <button onClick={()=>{this.resetClassCounter()}}>reset</button>
            <button onClick={()=>{this.decClassCounter()}}>dec</button>
            </div>
        )
    }
}

export default CounterClassComponent;