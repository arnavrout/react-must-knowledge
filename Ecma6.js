import React from 'react'

function Ecma6() {
    //Default parameters
    const gggg = (a = "Jiju") => a + "Rout";
    console.log(gggg()); //if we put anyrhing inside here(vacant now), it'll override the default value

    //Rest parameters
    const rest = (...argument) =>{
        console.log(argument);
    }
    console.log(rest("Jiya", "Elvish", "Pooja", "Abhishek")); //these values will be stored inside an array

    //Spred operator
    const cities = ["Mumbai", 'Jaipur', "Cuttack"];
    const ut = ["Delhi", "Chandigarh", "Pondicherry"]
    const bothArray = [...cities, ...ut]; //concatinate all the data of both the arrays in a single array
    console.log(bothArray);

    const obj1 = {name: "Bubu", age: 12, home: "Ninital"};
    const obj2 = {graduated: false, occupation: "stdent"};
    const bothObj = {...obj1, ...obj2};
    console.log(bothObj);

    //Object destructuring
    const deObj = {
        village: "Patna",
        school: true
    }
    const {village, school} = deObj
    console.log(deObj);

    //async-await (replacement of promises inside es6 javascript)
    async function print() {
        const runPromise = new Promise((resolve) => {
            setTimeout(() => {
                resolve("promise completed");
            }, 3000)
        });
        console.log("Before");
        await runPromise;
        console.log("After");
    }
    console.log(print());

    //Array methods
    const sports = ["Cricket", "Football", "Tennis"]
    //to print all the data
    sports.map((khel, index) => {
        console.log(khel);
    })
    //to print a specific data
    const specific = sports.find((only) => only==="Football")
    console.log(specific);

    //Ternary operators
    let age = 16;
    let standard = 21;
    console.log(age>18? "person can vote" : "person cannot vote");
    //logical && operator
    console.log(age===16 && "Mature kid"); //if this statement is not true it'll print false
    //logical ||(or) operator
    console.log(age>18 || standard<13? "Must be in school" : "Not be in school");
  return (
    <div>
        <h1>Ecma6 concepts</h1>
    </div>
  )
}

export default Ecma6