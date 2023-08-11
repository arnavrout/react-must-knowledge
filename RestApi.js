import React, { useEffect, useState } from 'react'
import axios from 'axios'

function RestApi() {
    //we have POST, GET, PUT OR PATCH and DELETE kind of requests
    const [name, setName] = useState("");
    const postData = () => {
        axios("https://jsonplaceholder.typicode.com/users", {
            name: name,
            age: 23,
            graduated: true
        })
        //this is promise after API call
        .then((res) => {
            console.log(res);
        })
        .catch((err) => {
            console.log(err);
        })

        //to GET the data we use useEffect hook
        // useEffect(() => {
        //     axios.get("https://jsonplaceholder.typicode.com/users")
        //     .then((res) => {
        //         console.log(res);
        //     })
        //     .catch((err) => {
        //         console.log(err);
        //     })
        // }, [])
    }
  return (
    <div>
        <input type="text" placeholder='name' onChange={(event)=>setName(event.target.value)} />
        <button onClick={postData}>POST Data</button>
    </div>
  )
}

export default RestApi