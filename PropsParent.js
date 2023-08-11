import React, {useState} from 'react'
import Props from './Props'

function PropsParent() {
    const [parentProps, setParentProps] = useState("Arnav")

    const handleChangeName = (value) => {
        // setParentProps("Rahul") //pass data from parent to child
        setParentProps(value);   //pass data from child to parent through value argument
    }

  return (
    <div>
        <Props childName={parentProps} changeName={handleChangeName}/>
        {/* <button onClick={() => setParentProps("Rahul")}>Change name</button> --> we can add this button in child component */}
    </div>
  )
}

export default PropsParent