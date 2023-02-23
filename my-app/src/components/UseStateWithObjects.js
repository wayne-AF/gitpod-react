import React, {useState} from 'react'

function UseStateWithObjects() {
    const [name, setName] = useState({ firstName: "", lastName: ""});

  return (
    <div>
        <form>
            <input 
                type="text" 
                value={name.firstName}
                onChange={e => setName({
                    // must spread in old value to avoid replacing entire object
                    ...name,
                    firstName: e.target.value
                })}
            />
            <input 
                type="text" 
                value={name.lastName}
                // must spread in old value to avoid replacing entire object
                onChange={e => setName({...name, lastName: e.target.value})}
            />
            <h2>{JSON.stringify(name)}</h2>
        </form>
    </div>
  )
}

export default UseStateWithObjects