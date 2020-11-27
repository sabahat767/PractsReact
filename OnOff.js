import React, { Component } from 'react';
import '../App.css';
import Counter from '../components/counter';
import Toggle from '../components/toggle'

class Onoff extends React.Component{
    constructor(props)
    {
        super(props)
        this.state={
            Oncolor:'white',
            Offcolor:'white'
         }
    }
   
    HndleClickOn=e=>{
        
        this.setState(
           { Oncolor:'orange',
            Offcolor:'white'
            
    }
       
        )
    }
    HndleClickOff=e=>{
        
        this.setState(
            {   Oncolor:'white',
                Offcolor:'orange',
                
            }
        )
        console.log(this.state)
    }
    render()
    {
        console.log(this.state)
        return(
            <div >
                <button onClick={this.HndleClickOn} style={{backgroundColor:this.state.Oncolor}}>ON</button>
               
                <button onClick={this.HndleClickOff} style={{backgroundColor:this.state.Offcolor}}>OFF</button>
              <Counter/>
              <Toggle/>
                </div>
        )
       
    }
}
export default Onoff;