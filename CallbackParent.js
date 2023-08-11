import React, {useCallback, useState} from 'react'
import CallbackChild from './CallbackChild';

function CallbackParent() {
    const[couter1, setCouter1] = useState(0);
    const[couter2, setCouter2] = useState(0);

    const incrementOne = () => {
        setCouter1(couter1+1)
    }

    const justFunc = useCallback(() =>{
        console.log("Arnavvvvv");
    }, couter2)
  return (
    <div>
        <CallbackChild couter2={couter2} justFunc={justFunc}/>
        <button onClick={incrementOne}>Couter1 - {couter1}</button>
    </div>
  )
}

export default CallbackParent