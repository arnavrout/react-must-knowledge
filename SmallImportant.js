import React, { useState } from 'react'
import './App.css';


function SmallImportant() {
    //this is for "event handling"
    const getInput = (event) => {
        console.log(event.target.name);
    }
    const addNumbers = (num1, num2) => {
        console.log(num1+num2);
    }

    //this is for "keys"
    const onlyArray = [10, 20, 30, 40, 50];
    const objArray = [
        {
            team: "LFC",
            position: 5
        },
        {
            team: "Man City",
            position: 1
        },
        {
            team: "Arsenal",
            position: 2
        },
    ]

    //this is for forms
    const[objData, setObjData] = useState({})
    const getInputs = (value, name) => {
        let data = {[name] : value};
        setObjData({...objData, ...data})
    }

    const submitHandler = () => {
        console.log(objData);
    }

  return (
    <div>
        <input placeholder='Add values' onChange={getInput} name='input' />
        <button onClick={() => addNumbers(2,5)}>Add numbers</button>

        {/* for keys */}
        {onlyArray.map((noList, index) => {
            return (<p key={index}>
                {noList}
                </p>)
        })}
         {objArray.map((teams, index) => { //if we don't have a unique property in object then only we can add index as a key
            return (
                <div className='wrapTeam' key={index}>
                    <p>{teams.team}</p>
                    <p>{teams.position}</p>
                </div>
            )
        })}

        {/* for forms in react */}
        <div className='formsWrap'>
            <input type='text' placeholder='Name' name='name' onChange={(event) => getInputs(event.target.value, event.target.name)} />
            <input type='number' placeholder='Age' name='age'  onChange={(event) => getInputs(event.target.value, event.target.name)}/>
            <input type='text' placeholder='Hobbies' name='hobbies'   onChange={(event) => getInputs(event.target.value, event.target.name)}/>
            <input type='date' placeholder='Date' name='date'  onChange={(event) => getInputs(event.target.value, event.target.name)} />

            <button onClick={submitHandler}>Submit</button>
        </div>
    </div>
  )
}

export default SmallImportant