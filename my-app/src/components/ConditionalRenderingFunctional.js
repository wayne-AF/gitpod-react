import React from 'react'

function ConditionalRenderingFunctional(props) {
  return (
    <div>
      {/* if props.connected is true, render connected, otherwise render not connected */}
      {/* using this ternary statement is the best way of writing an if statement in ES6 */}
      <h1>
        {/* using "props" because we gave the function a prop in App.js */}
        {props.connected ? 'Connected' : 'Not Connected'}
        </h1>
    </div>
  )
}

export default ConditionalRenderingFunctional