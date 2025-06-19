import React, { useState } from "react";

function CounterFunctionalComponent(){
    let [functionalCounter, setFunctionalCounter] = useState(0);
    const incFunctionalCounter=()=>{
        setFunctionalCounter(functionalCounter + 1)
    }
    const decFunctionalCounter=()=>{
        if(functionalCounter > 0)
            setFunctionalCounter(functionalCounter - 1)
    }
    // const resetFunctionalCounter=()=>{
    //     setFunctionalCounter(0)
    // }
    return(
        <div>
            <h1>Functional Counter</h1>
            <h2>{functionalCounter}</h2>
            <button onClick={()=>{incFunctionalCounter()}}>+</button>
            <button onClick={()=>{decFunctionalCounter()}}>-</button>
            {/* <button onClick={()=>{resetFunctionalCounter()}}>reset</button> */}
        </div>
    );
}

export default CounterFunctionalComponent;