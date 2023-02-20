import React from "react";

// creating a class component
// to make it a react component instead of just js component:
class StatefulGreetingWithCallback extends React.Component {
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
        };
    }
    // should never update state without using the setState method
    // attempting to update the state directly will result in the component failing to render
    // and the change will not be rendered in the UI
    handleClick() {
        // setState is an asynchronous function, executing in the background
        this.setState({
            introduction: "bye girl",
            buttonText: "enter",
        }, ()=>{
            // if there is code that must run after the setState, put it here in callback function
            // inside the callback function, this code will run after setState completes
            console.log('new state', this.state.introduction);
            console.log('new state', this.state.buttonText);
        });
        // outside the callback function, this code will run before setState completes
        console.log(this.state.introduction);
        console.log(this.state.buttonText);

    }

    render () {
        return (
            <div>
                <h1>{this.state.introduction}</h1>
                <button onClick={() => this.handleClick()}>{this.state.buttonText}</button>
            </div>
        )
    }

}

export default StatefulGreetingWithCallback;