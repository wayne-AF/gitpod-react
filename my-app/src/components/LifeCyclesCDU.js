import React, { Component } from 'react'
import LifeCyclesCDUChild from './LifeCyclesCDUChild'

export class LifeCyclesCDU extends Component {
    constructor(props) {
        console.log('constructor called')
        super(props)

        this.state = {
            greeting: 'Hello'
        }
    }

    // new method as a class property
    // this ternary conditional allows us to toggle the greeting
    updateGreeting = () => {
        console.log('update greeting called')
        this.setState(prevState => {
            return {
                greeting: prevState.greeting === 'Hello' ? 'Bye' : 'Hello'
            }
        })
    }

        // good place to run code you want to run each time the method is updated 
    componentDidUpdate() {
        console.log('component updated')
    }

    render() {
        console.log('render method called')
        return (
            <div>
                <h1>{this.state.greeting}</h1>
                <button onClick={this.updateGreeting}>Update Greeting</button>
                {/* updating a parent will always cause a child to rerender */}
                {/* if a parent has a lot of children, this can cause an application to slow down */}
                <LifeCyclesCDUChild parentGreeting={this.state.greeting}/>
            </div>
        )
    }
}

export default LifeCyclesCDU