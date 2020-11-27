import React,{useState} from 'react'

function Usestate() {
    const[islit,setislit]=useState(true)//initialy true
    let [count,setCount]=useState(0)//initial value of count 0 krdi usesate k ander
    return (
        <div>
            {/* {islit?'light':'dark'}
            <button onClick={()=>setislit(!islit)}>Flip</button> click krne p ulat krdo true ho tw alse false ho tw true
            <button onClick={()=>setCount(count+1) }>{count}</button>
         */}
{/* agr islit mei trye ho tw hi count ka function chle agr false ho tw dark print krde bus count na show ho */}
{/* {islit?(<button onClick={()=>setCount(count+1) }>{count}</button>):'dark'}
<button onClick={()=>setislit(!islit)}>Flip</button> */}
{/* dynamicaly classes: classname me condition k sth do classes dedo k agr true ho tw ye false ho tw ye class or usko styling dedo css m jakr */}
<div className={`${islit?'lit':'drk'}`} onClick={()=>setislit(!islit)}>click me</div>
        </div>
    )
}

export default Usestate
