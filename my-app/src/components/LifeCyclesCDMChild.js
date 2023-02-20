import React, { Component } from 'react'

export class LifeCyclesCDMChild extends Component {

    constructor(props) {
        console.log('Child Constructor Called')
      super(props)
    
      this.state = {
         data: 'Child Loading...'
      }
    }

    getData() {
        console.log('Child getData() called')
        setTimeout(() => {
            console.log('Child data fetched!')
            this.setState({
                data: 'Child loaded!'
            })
        }, 3000)
    }

    // called right after component is first loaded to the DOM
    // does not get recalled unless the component is unmounted and remounted
    // commonly used for data fetching
    // great for making API calls
    componentDidMount() {
        console.log('Child Component mounted')
        this.getData()
    }

  render() {
    console.log('Child render method called')
    return (
      <div>
        <h1>{this.state.data}</h1>
      </div>
    )
  }
}

export default LifeCyclesCDMChild