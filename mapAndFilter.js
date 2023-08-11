import React, { useState } from 'react'

const myArray = [11, 22, 33, 44, 55];

function MapAndFilter() {
    // const [numbers, setNumbers] = useState([1,2,3,4,5,6,7,8,9,10])
    const [double, setDouble] = useState(myArray);

    // const mapFilter = () => {
    //     let squateRoot = numbers.map((filtered) => {
    //         return filtered * filtered;  //double the value of number on click
    //     }).filter((number) => {
    //         return number <= 50;          //print only double-number which are less than 50
    //     })
    //     setNumbers(squateRoot)
    // }
    const handleDouble = () => {
        let newValue = myArray;
        let doubleValue = newValue.map((number) => number*2).filter((number) => number<=80)
        setDouble(doubleValue);
    }
    const handleDelete = (i) => {
        let delNumber = [...double];
        delNumber.splice(i, 1);
        setDouble(delNumber);
    }



  return (
    <div>
        {/* <p>{numbers}</p>
        <button onClick={mapFilter}>Click to double</button> */}
        <ul>
            {double.map((listt, i) => (
                <p key={i}>
                    {listt}
                    <button onClick={() => handleDelete(i)}>delete</button>
                </p>
            ))}
        </ul>
        <button onClick={handleDouble}>Click to double</button>
    </div>
  )
}

export default MapAndFilter