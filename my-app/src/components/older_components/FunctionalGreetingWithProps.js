// This line is not required in the latest versions of React
// Including this line also makes latest versions compatible with earlier versions
import React from "react";


const FunctionalGreetingWithProps = (props) => {
    console.log(props);
    return <h1>Hello from React, whore. {props.greeting} {props.warning}</h1>;
}

export default FunctionalGreetingWithProps;

