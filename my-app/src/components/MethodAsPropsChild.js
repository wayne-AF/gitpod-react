import React from 'react'

// it would probably make more sense to actually make this a stateful component so it
// would be fully independent from the parent component ,i.e. being the constructor 
// and setStates in here instead of in the parent component
function MethodAsPropsChild(props) {
  return (
    <div>
        {
            props.isLoggedIn ? (
                <div>
                    <p>Welcome to the site. Please complete the following steps:</p>
                    <ol>
                        <li>Confirm your email</li>
                        <li>Complete your profile</li>
                        <li>Subscribe to the newsletter</li>
                    </ol>
                    <button onClick={props.handleSignOut}>Sign out</button>
                </div>
            ) : (
                <div>
                    <p>Please sign in</p>
                    {/* we need a click handler on this button but because it's a functional component,
                    we can't change the state from inside here. Whether or not the user is logged in, 
                    is passed down from the parent as a prop. To do this, we must create the clickhandler in the parent
                    and pass it down to the child as a prop */}
                    <button onClick={props.handleSignIn}>Sign in</button>
                    
                </div>
                
                
            )
        }
    </div>
  )
}

export default MethodAsPropsChild