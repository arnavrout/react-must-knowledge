import React, {memo} from 'react'

function CallbackChild({couter2, setCouter2}) {
    console.log("Child component in Callback");
  return (
    <div>CallbackChild</div>
  )
}

export default memo(CallbackChild);