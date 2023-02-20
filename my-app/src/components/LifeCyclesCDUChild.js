import React, { Component } from 'react'

export class LifeCyclesCDU extends Component {
    constructor(props) {
        console.log('child constructor called')
        super(props)

        this.state = {
            greeting: 'Hello'
        }
    }

    // new method as a class property
    // this ternary conditional allows us to toggle the greeting
    updateGreeting = () => {
        console.log('child update greeting called')
        this.setState(prevState => {
            return {
                greeting: prevState.greeting === 'Hello' ? 'Bye' : 'Hello'
            }
        })
    }

        // giving props from parent 
    componentDidUpdate(prevProps, prevState) {
        console.log('child component updated')
        console.log('prevProps', prevProps)
        console.log('prevState', prevState)
        if (prevProps.parentGreeting !== this.props.parentGreeting) {
            console.log('parent greeting has changed')
        }
    }

    render() {
        console.log('child render method called')
        return (
            <div>
                <h1>{this.state.greeting}</h1>
                <button onClick={this.updateGreeting}>Update Child Greeting</button>
            </div>
        )
    }
}

export default LifeCyclesCDU