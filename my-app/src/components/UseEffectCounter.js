// to give this function a state, we need useState hook
import React, {useState, useEffect} from 'react'

function UseEffectCounter() {
  const [count, setCount] = useState(0);
  // useEffect hook takes as a prop a function that will run after every render of the component
  // both immediately after it mounts and every time it updates
  // because count1 has no dependency array, it will run every single time 
  useEffect(() => {
    console.log('count 1 effect')
    document.title = count;
  });

  const [count2, setCount2] = useState(0);
  // passing a dependency array that ensures the hook will only run when count2 is updated
  // count2 will only run when count2 is activated
  useEffect(() => {
    console.log('count 2 effect')
    document.title = count2
  }, [count2]);

  return (
    <div>
      <button onClick={
        () => setCount(count => count + 1)
      }>
        Increment count 1 ({count})
      </button>
      <button onClick={
        () => setCount2(count2 => count2 + 1)
      }>
        Increment count 2 ({count2})
      </button>
    </div>
  )
}

export default UseEffectCounter