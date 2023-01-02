import React, { Component } from 'react'

class EventBind extends Component { 

    constructor(props) {
      super(props)
    
      this.state = {
         message: 'Hello Prands'
      }

     //this.clickHandler = this.clickHandler.bind(this) //For 3rd Approach
    }

    // For First, Second & Third Approach
    /*
    clickHandler() {
        this.setState({
            message: 'Oke Byeee!' 
        })
    }
    */

    // For Fourth Approach
    clickHandler =() => {
      this.setState({
          message: 'Oke Byeee!' 
      })
  }

  render() {
    return ( 
      <div>
        <div>{this.state.message}</div>
        {/* <button onClick={this.clickHandler.bind(this)}>Click by Bind in Render</button> */}
        {/* <button onClick={() => this.clickHandler}>Click by Arrow Function in Render</button> */}
        {/* <button onClick={this.clickHandler}>Click by Bind in Constructor</button> */}
        <button onClick={this.clickHandler}>Click by Arrow Function in Constructor</button>
      </div>
    )
  }
}

export default EventBind 
