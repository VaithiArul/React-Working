 import React from 'react'

 // This is inline styling
 const heading = {
    fontSize: '72px',
    color: 'blue'
 }
 
 function Inline() {
   return (
     <div>
       <h1 style={heading}>Inline</h1>
     </div>
   )
 }
 
 export default Inline
 