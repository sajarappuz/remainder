import React, { useState } from 'react'
import "./Remainder.css"
function Remainder() {

  const[remainder,setRemainder] = useState([]);
  const[newRemainder,setNewRemainder] = useState("");

const handleInputChange =(e) =>{
 setNewRemainder(e.target.value)
}
const handleAddRemainder =() =>{
 if (newRemainder.trim())
 setRemainder([...remainder,newRemainder])
 setNewRemainder("")
}

const handleDeleteRemainder = (index) =>{
  setRemainder(remainder.filter((item,itemIndex) => itemIndex !== index)  )
}

  return (
    <div className='maindiv'>
       <h1>REMAINDER APP</h1> 
       <div className="inputcntr">
        <input type="text" value={newRemainder} placeholder='enter remainder..' onChange={handleInputChange} />
        <button className='inputbtn' onClick={handleAddRemainder}>ADD</button>
       </div>
       {
        remainder.length>0 ?
       <div className="display">
      <ul className='showrem'>
        {
          remainder.map((rem,index)=>(
             <li key={index}>
                {rem}
                <button className='dltbtn' onClick={ () => handleDeleteRemainder(index)}>DELETE</button>
             </li>
          )
           
          )
        }
        
      </ul></div> : 
      <p>no remainders</p>
      }
    </div>
  )
}

export default Remainder