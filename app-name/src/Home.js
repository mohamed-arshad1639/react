import React from 'react'
import { useState } from 'react'

function Home(props) {

    const [data,setData]= useState(1)

    function increment() {
        setData(data + 1)
    }
    function decrement() {
        setData(data - 1)
    }



    return (
        <div><p>{data}</p>
            <h1>{props.item}</h1>
            <h1>{props.trial}</h1>
            <button onClick={increment}>Increament</button>
            <button onClick={decrement}>Decreament</button>
        </div>
    )


}

export default Home