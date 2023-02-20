import React from 'react'

// functional component which doesn't have any state so we pass in whether used is logged in as a prop
function UserMessage(props) {
    return (
        <div>
            {
                props.isLoggedIn ? (
                    <div>
                        <p>Welcome to the site. Please complete the steps below</p>
                        <ol>
                            <li>Confirm email</li>
                            <li>Complete profile</li>
                            <li>Subscribe to newsletter</li>
                        </ol>
                    </div>

                ) : (
                    <p>Please sign in</p>
                )
            }
        </div>
    )
}

export default UserMessage