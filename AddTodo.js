import React, { Component } from 'react';
import '../App.css';
class Addtodo extends React.Component{
    constructor(props){
        super(props)
        {
            this.state={
                title:'',
                id:''
            }
        }
    }
   handleSubmit=(e)=>{
        e.preventDefault();//take form submit na ho islye prevet default lgaya
       // console.log("hi")
       let newobj=this.state;
      // this.props.addtodo() or const {addtodo}=this.props //props s funct lare todo m add krwane k lye
const {addtodo}=this.props

addtodo(newobj)

    }
handleChange=(e)=>{
console.log(e.target)
this.setState(
    {
title:e.target.value,
id: Math.round(Math.random()*100+.2)
}
)
//console.log(this.state)
}

    render(){
        
        return(
<div>
    <form onSubmit={this.handleSubmit}>
    <input type='text' onChange={this.handleChange}/>
    <button type='submit'  >Add Todo</button>
    {/* <button type='submit' onClick={this.props.dlt_All} >Remove All</button> */}

    </form>
</div>
        )

        
    }
}
export default Addtodo;