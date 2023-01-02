import React from 'react'
// Using JS:
/*
function Greet(){
    return <h1>Hello Friends!</h1>
}
*/

//Using CS6:

const Greet = (props) => {
    console.log(props)
    return (
        <div>
            <h1>
                Hello {props.name} a.k.a {props.heroName}
            </h1>
            {props.children}
        </div> 
    )
}


export default Greet

//Destructing props:
/* 
const Greet = ( {name, heroName}) => {
    return (
        <div>
            <hl>
                Hello {name} a.k.a {heroName}
            </h1>
        </div>
        )
    }
*/
//Destructin props and using "props" keyword to use its objects(name,heroName):
/* 
const Greet = props => {
    const {name, heroName} = props
    return (
        <div>
            <hl>
                Hello {name} a.k.a {heroName}
            </h1>
        </div>
        )
    }
*/ 