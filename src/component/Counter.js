import React,{useState} from 'react'

const Counter = (props) => {
//    console.log(setIncrease(increase+1))
   
    return(
        <div>
             <button onClick={props.value}>increase</button>
            
        </div>
    )
}

export default Counter;   