import React, { Component } from 'react';
import '../App.css';
class Toggle extends React.Component{
    constructor(props)
    {
        super(props)
        this.state={
           
            toggle: true,
            toggle1:false,
            greet:'login'
         
           
        }
    }
    toogle=()=>{
        this.setState(
            {
                toggle:!this.state.toggle,//agr true h tw false krdo agr false h tw true is lye not equal lgya invert krne k lye on off ka ek sath am kre ek button p
                
            }
            
        )
    }
    toogle1=()=>{
        this.setState(
            {
                toggle1:!this.state.toggle1,//agr true h tw false krdo agr false h tw true is lye not equal lgya invert krne k lye on off ka ek sath am kre ek button p
                
            }
            
        )
    }
    render()
    {
        console.log(this.state)
        return(
            <div>
          <button onClick={this.toogle}>toggle</button>
{this.state.toggle ? (<div style={{backgroundColor:'green'}}>{this.state.greet}</div>):(<div style={{backgroundColor:'orange'}}>{this.state.toggle1 }Logout</div>)}
            </div>
        )
    }
}

export default Toggle;
