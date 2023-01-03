import React, { Component } from 'react'
import MemoComp from './MemoComp'
import PureComp from './PureComp'
import RegComp from './RegComp'

class ParentComp extends Component {

    constructor(props) {
      super(props)
    
      this.state = {
         name: 'Vaithi'
      }
    }

    componentDidMount() {
        setInterval(() => {
            this.setState({
                name: 'Vaithi'
            })
        }, 2000)
    }
    
  render() {
    console.log('*** Parent Component Render ***')
    return (
      <div>
        Parent Component
        <MemoComp name={this.state.name}/>
        {/* TO know difference between Pure & Regular Component--
        <RegComp name={this.state.name}/>
        <PureComp name={this.state.name}/>
        */}
      </div>
    )
  }
}

export default ParentComp