import React from 'react'

function Props(props) {
  return (
    <div>
        <h3>{props.childName}</h3>
        <button onClick={() => props.changeName("child to parent")}>Change Name</button>
    </div>
  )
}

export default Props;