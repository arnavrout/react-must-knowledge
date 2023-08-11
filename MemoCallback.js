import React, { useMemo, useState } from 'react'

function MemoCallback() {
    //useMemo
    const[couter1, setCouter1] = useState(0);
    const[couter2, setCouter2] = useState(0);
    const incrementOne = () => {
        setCouter1(couter1+1)
    }
    const incrementTwo = () => {
        setCouter2(couter2+1)
    }
    const showEven = useMemo(() => {
        console.log("........");
        let i = 0;
        while (i < 200000000) i++;
        return couter1 % 2 === 0;
    }, [couter1]);

    //this will run for all the component of the web page, to get rid of it we use useMemo above
    // const showEven = () => {
    //     console.log("........");
    //     let i=0;
    //     while(i<200000000) i++;
    //     return couter1%2===0
    // }
  return (
    <div>
        <button onClick={incrementOne}>Couter1 - {couter1}</button>
        <span>{showEven? "Even no." : "Odd no."}</span>
        <button onClick={incrementTwo}>Couter2 - {couter2}</button>
    </div>
  )
}

export default MemoCallback