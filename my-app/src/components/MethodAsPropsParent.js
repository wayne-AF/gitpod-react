import React, { Component } from 'react'
import MethodAsPropsChild from './MethodAsPropsChild'

export class MethodAsPropsParent extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
         isLoggedIn: false,
      }
    }
    // method
    handleSignIn = () => {
        this.setState({
            isLoggedIn: true
        })
        console.log(this)
    }
    // arrow function so we don't have to worry about binding it
    handleSignOut = () => {
        this.setState({
            isLoggedIn: false
        })
        console.log(this)
    }

  render() {
    return (
      <div>
        <MethodAsPropsChild
        // props for the MethodAsPropsChild
            isLoggedIn={this.state.isLoggedIn}
            // pass down the handleSignIn prop to the child this way
            // we don't use parentheses because we are not calling the function,
            // just passing the function itself down to the child
            handleSignIn={this.handleSignIn}
            handleSignOut={this.handleSignOut}
            />
      </div>
    )
  }
}

export default MethodAsPropsParent