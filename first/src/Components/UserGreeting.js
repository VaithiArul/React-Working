import React, { Component } from 'react'

class UserGreeting extends Component {

    constructor(props) {
      super(props)
    
      this.state = {
         isLoggedIn: true //if 'false' executes else tag
      }
    }
    

  render() {
    //Approach 1:
    if (this.state.isLoggedIn) {
        return <div>Welcome Buddy</div>
    } else {
        return <div>Welcome Guest</div>
    } 
    
    //Approach 2:
    /*
    let message
    if (this.state.isLoggedIn) {
        message = <div>Welcome Buddy</div>
    } else {
        message = <div>Welcome Guest</div>
    } 
    return <div>{message}</div>
    */

    //Approach 3:
    /*
    return(
        this.state.isLoggedIn ?
        <div>Welcome Buddy</div> : <div>Welcome Guest</div>
    )
    */

    //Approach 4
    /*
    return this.state.isLoggedIn && <div>Welcome Buddy</div>
    */
  }
}

export default UserGreeting
