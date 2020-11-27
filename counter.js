import React, { Component } from 'react';
import '../App.css';
class Counter extends React.Component{
    constructor(props)
    {
        super(props)
        this.state={
            count:0
        }
    }
    HndleClickOn=e=>{
        const count = this.state.count;
        
        console.log(count)
        this.setState(
           { 
            count:count+1
    }
       
        )
    }
    HndleClickOff=e=>{
        const count = this.state.count;
        console.log(count)
        this.setState(
            {  
                count:count-1
            }
        )
        console.log(this.state)
    }
    render(){
        return(
            <div>
                <button onClick={this.HndleClickOn}>+</button>
               
                       <button onClick={this.HndleClickOff} > -</button>
                      <h5>{this.state.count}</h5>
            </div>
        )
    }
}
export default Counter;