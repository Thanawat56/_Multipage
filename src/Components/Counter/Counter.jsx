import { useState } from 'react'

import'./counter.css'

function Counter(props){

    //      read    write                initial
    //       v        v                     v
    const [value, setValue] = useState(props.value || 0)

    function increment(){
        setValue(value + 1)
        console.log(value)
    }

    function decrement(){
        setValue(value - 1)
        console.log(value)
    }

    return(
        <div className="counter-container">
            <h2 className='counter-title'>{props.name || "Counter"}</h2>
            <div className='Button-center'> 
            <button className='btn btn-danger' onClick={decrement}>-</button>
            <span className='counter-value'>{value}</span>
            <button className='btn btn-success' onClick={increment}>+</button>
            </div>
        </div>
    )
}

export default Counter