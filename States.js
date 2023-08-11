import React, { useState } from 'react'

function States() {
    const[count, setCount] = useState(0)
    const [visible, setVisible] = useState(false);
    const [name, setName] = useState("")
    const [arrayState, setArrayState] = useState([
        {
            name: "Arnav",
            age: 23,
        },
        {
            name: "Piyush",
            age: 24
        },
        {
            name: "Kavita",
            age: 22
        }
    ])

    const increment = () => {
        setCount(count+1)
        setVisible(!visible);
        setName("Arnav")
    }
    const decrement = () => {
        setCount(count-1)
        setVisible(!visible);
        setName("Arnav")
    }
  return (
    <div>
        {visible ? <p>Count is Visible</p> : <p>Count is not Visible</p>}
        <p>{name}</p>
        <button onClick={increment}>Increase</button>
        <h2>{count}</h2>
        <button onClick={decrement}>Decrease</button>

        <ul>
            {arrayState.map((items, index) => {
              return ( <div key={index}>
                    <p>Name: {items.name}</p>
                    <p>Age: {items.age}</p>
                </div>)
            })}
        </ul>
    </div>
  )
}

export default States