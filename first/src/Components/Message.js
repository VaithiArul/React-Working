import React, { Component } from 'react'

class Message extends Component{

    constructor(){
        super()
        this.state = {
            message: 'Welcome Visitor'
        }
    }

    changeMessage() {
        this.setState({
            message: 'Thanks for Clicking'
        })
    }
    revert() {
        this.setState({
            message: 'Welcome Visitor'
        })
    }

    render() { 
        return (
            <div>
                <h1>{this.state.message}</h1>
                <button onClick={() => this.changeMessage()}>Click This Button</button>  <br/>
                <button onClick={() => this.revert()}>Revert</button>                
            </div>
        )
    }
}
export default Message
