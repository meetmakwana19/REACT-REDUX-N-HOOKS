import React, { useState, useEffect } from 'react'

const HooksDemo = () => {

    // useState hook
    const [searchString, setSearchString] = useState(null)
    // const [filter, setFilter] = useState(null)
    const [activeIndex, setActiveIndex] = useState(10)
    // shorthand syntax
    // const activeIndex = useState(100)

    console.log(activeIndex);

    const handleDecrement = () =>{
        setActiveIndex(activeIndex-1)
    }
    const handleIncrement = () =>{
        setActiveIndex(activeIndex+1)
    }
    const handleInputChange = (event) => {
        // console.log(event.target.value);
        setSearchString(event.target.value);
    }

    // useEffect hook
    // useEffect(whatToExecute, whenToExecute)
    useEffect(() => {
        // do something like lifecycle method/network call
        console.log("useEffect ran");
        // for eg, make network call here only when searchString changes 
    }, [])
    // }, ) //runs at every re-render
    // }, [searchString]) //runs only when searchString changes
    // }, [searchString, filter]) //can also give multiple conditions 

    return (
        <div className='container'>
            <h3 className='m-2'>About hooks</h3>
            <p className='m-2'>Active Index : {activeIndex}</p>
            <button type="button" className="btn btn-primary m-2" onClick={()=>handleDecrement()}>Decrement</button>
            <button type="button" className="btn btn-primary m-2" onClick={()=>handleIncrement()}>Increment</button>
            <br />
            <input className="form-control me-2 m-2" onChange={(event)=>handleInputChange(event)} type="search" placeholder="Type & search" />
            <p className='m-2'>Preview : {searchString}</p>
        </div>
    )
}

export default HooksDemo;
