import React from "react";

// creating a class component
// to make it a react component instead of just js component:
class StatefulGreetingWithPrevState extends React.Component {
    // classes do not have the ability to return anything
    // all classes must return a render method which returns the jsx

    // constructor is a special method that's always called when the class is first instantiated
    // this is where state is usually defined in class components
    // this automatically creates a property called state that can be accessed and manipulated as required
    constructor(props) {
        // first thing must always do inside constructor
        super(props);
        this.state = {
            // initial state, represents the intitial values of anything the component might change on its own or
            // due to human interaction
            introduction: "hi girl",
            buttonText: "exit",
            count: 0,
        };
    }
    // should never update state without using the setState method
    // attempting to update the state directly will result in the component failing to render
    // and the change will not be rendered in the UI
    handleClick() {
        this.setState((prevState, prevProps) => {
            console.log('previous state', prevState)
            console.log('previous props', prevProps)
            return {
                introduction: prevState.introduction === "hi girl" ? "bye girl" : "hi girl",
                buttonText: prevState.buttonText === "exit" ? "enter" : "exit",
            }
        })
    }

    increaseClick() {
        this.setState((prevState, prevProps) => {
            console.log('previous state', prevState)
            console.log('previous props', prevProps)
            return{
                count: prevState.count + 1
            }
        });
    }

    render () {
        return (
            <div>
                <h1>{this.state.introduction}</h1>
                <button onClick={() => this.handleClick()}>{this.state.buttonText}</button>
                <button onClick={() => this.increaseClick()}>Click me</button>
                <h3>You've clicked me {this.state.count} times.</h3>
            </div>
        )
    }

}

export default StatefulGreetingWithPrevState;