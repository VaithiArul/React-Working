import React, { Component } from 'react'

class Welcome extends Component{
    render(){         
        return (
            <h1>
                Welcome to React JS {this.props.name} ({this.props.heroName})
            </h1>
        )
    }
}
export default Welcome

//Destructing props:
/*
class Welcome extends Component{
    render(){ 
        const {name, heroName} = this.props
        // const {state1, state2} = this.state
        return (
            <h1>
                Welcome to React JS {name} ({heroName})
            </h1>
        )
    }
}
*/
