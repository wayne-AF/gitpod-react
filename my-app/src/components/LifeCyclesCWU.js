import React, { Component } from 'react'
import LifeCyclesCWUTracker from './LifeCyclesCWUTracker'

export class LifeCyclesCWU extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
         visible: true
      }
    }

    toggleDisplay = () => {
        // we always want to use this pattern when the state update depends on the previous state
        // this code will toggle between true and false based
        // whatever it was in the previous state
        this.setState((prevState) => ({ visible: !prevState.visible }))
    }

  render() {
    return (
      <div>
        {this.state.visible && <LifeCyclesCWUTracker />}
        <button onClick={this.toggleDisplay}>Toggle display</button>
      </div>
    )
  }
}

export default LifeCyclesCWU