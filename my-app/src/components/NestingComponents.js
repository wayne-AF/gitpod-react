import React, { Component } from 'react'
import UserMessage from './UserMessage'
import UserData from './UserData'

export class NestingComponents extends Component {
  // class component, so we must have a state, constructor
  constructor(props) {
    super(props)

    this.state = {
      // passes down to child components as a prop
      isLoaded: true,
      isLoggedIn: false
    }
  }

  render() {
    return (
      <div>
        <UserData isLoaded={this.state.isLoaded}/>
        {/* pass the state in as a prop */}
        <UserMessage isLoggedIn={this.state.isLoggedIn}/>
      </div>
    )
  }
}

export default NestingComponents