import React, { Component } from 'react'

export class EventsClass extends Component {
    // in a class component, we don't need the function keyword
    clickHandler(){
        console.log("clicked the class button")
    }
  render() {
    return (
      <div>
        {/* Use "this" because it's a class component */}
        <button onClick={this.clickHandler}>click me - class component</button>
      </div>
    )
  }
}

export default EventsClass