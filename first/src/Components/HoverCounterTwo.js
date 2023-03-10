import React, { Component } from 'react'

export class HoverCounterTwo extends Component {

    //This should be not commented when there is no common component["CounterTwo.js"]
    /*
    constructor(props) {
        super(props)

        this.state = {
        count: 0
        }
    }
    incrementCount = () => {
        this.setState(prevState => {
            return {count: prevState.count + 1}
        })
    }
    */
    
    render() {
    //const {count} = this.state
    const {count, incrementCount} = this.props
    return (
        <div>
            <h2 onMouseOver={incrementCount}>Hovered {count} Times</h2>
        </div>
    )
    }
}

export default HoverCounterTwo
