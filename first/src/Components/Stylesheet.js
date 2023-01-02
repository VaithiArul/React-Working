import React from 'react'
import './myStyles.css'

function Stylesheet(props) {
    let className = props.primary ? 'primary':'' 
  return (
    <div>
      <h1 className={`${className} font-xl font-bold`}>Stylesheet</h1>
      {/* Here two class is used(primary[true/false,font-xl]) */}
    </div>
  )
}

export default Stylesheet
 