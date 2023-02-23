// to give this function a state, we need useState hook
import React, {useState, useEffect} from 'react'

function UseEffectCounter2() {
  // const [count, setCount] = useState(0);
  const [time, setTime] = useState(0);
  
  // useEffect(() => {
  //   console.log('count 1 effect')
  //   document.title = count;
  // }, [count]);

  useEffect(() => {
    console.log('creating timer');
    const interval = setInterval(() => {
      setTime(time => time + 1)
    }, 1000);
  }, []);

  
  return (
    <div>
      {/* <button onClick={
        () => setCount(count => count + 1)
      }>
        Increment count 1 ({count})
      </button> */}
      <h2>Time is {time}</h2>
    </div>
  )
}

export default UseEffectCounter2