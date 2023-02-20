import React, { Component } from 'react'

export class ConditionalRenderingClass extends Component {
  // class component, so we must have a state, constructor
  constructor(props) {
    super(props)

    this.state = {
      // state properties
      isLoaded: true,
      isLoggedIn: true
    }
  }
  
  render() {
    return (
      <div>
        {/* ternary statement checking if isLoaded is equal to true or not */}
        <h1>{this.state.isLoaded ? 'Data loaded' : 'Loading...'}</h1>
        {/* if isLoggedIn is true, the first brackets contents will show, else the second content will show */}
        {this.state.isLoggedIn ? (
          <div>
            <p>Welcome to the site. Please complete the steps below</p>
            <ol>
              <li>Confirm email</li>
              <li>Complete profile</li>
              <li>Subscribe to my hole</li>
            </ol>
          </div>
              
        ) : (<p>Please sign in</p>)}
      </div>
    )
  }
}

export default ConditionalRenderingClass