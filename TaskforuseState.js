//Add 2 more buttons:
//“ON” and “OFF”. Turn the light either ON or OFF
//depending on which button is clicked by wiring up the onClick handlers to set
//the state.
//question 2
// Add another piece of state: the room temperature. (Hint: you can call useState
//     more than once!) Initialize it to 72 (or 22 for you Celsius types). Display the
//     current temperature under the light status.
    
import React,{useState} from 'react'

function TaskforuseState() {
   const [light, setlight] =useState(true)
   const [Temp, setTemp] =useState(72)

    return (
        <div>
            <div >
                 {/* jb true ho tw on ko white show krwao k by default off hai   */}
                <button className={`${light?'lit':'drk'}`} onClick={()=>setlight(!light)} >On</button> 
                {/* jb false ho tw off ko blck show krwao  k by clixk on hogya   */}
                <button className={`${light?'drk':'lit'}`} onClick={()=>setlight(!light)}>Off</button>
            
            
             {/* Answer 2 */}
                <button  onClick={()=>setTemp(Temp+1)}> +</button>
               <button  onClick={()=>setTemp(Temp-1)}> -</button>
                <h1>{Temp}</h1>
            </div>
        </div>
    )
}

export default TaskforuseState
