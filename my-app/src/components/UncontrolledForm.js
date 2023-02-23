import React, { Component } from 'react'

export class UncontrolledForm extends Component {
    constructor(props) {
      super(props)
      this.inputName = React.createRef();
      this.category = React.createRef();
      this.comments = React.createRef();
      }
    

    
    // prevents the page from reloading when submit button is clicked
    handleSubmit = (event) => {
        event.preventDefault();
        console.log(this.inputName.current.value)
        console.log(this.category.current.value)
        console.log(this.comments.current.value)
       
    }
  render() {
    return (
      <div>
        <h2>Please complete the form</h2>
        <form onSubmit={this.handleSubmit}>
            <div>
            <label htmlFor="id-name">Your name: </label>
            <input 
                
                id="id-name" 
                name="name" 
                type="text"
                ref={this.inputName}
            />
            </div>
            <div>
            <label htmlFor="id-category">Query Category: </label>
            <select 
                name="category" 
                id="id-category"
                ref={this.category}
                
                >
                <option value="website">Website issue</option>
                <option value="order">Order issue</option>
                <option value="general">General inquiry</option>
            </select>
            </div>
            <div>
                <label htmlFor="id-comments">Comments: </label>
                <textarea 
                    
                    name="comments" 
                    id="id-comments" 
                    cols="30" 
                    rows="10" 
                    ref={this.comments}
                    />
            </div>
            
            <input type="submit" value="Submit"/>
        </form>
      </div>
      
    )
  }
}


export default UncontrolledForm
