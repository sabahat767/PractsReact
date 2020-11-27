import React, { Component } from 'react';
import '../App.css';
import Addtodo from './AddTodo'
class Todolist extends React.Component{
    constructor(props)
    {
        super(props)
        this.state={
 todoList:[
     {title:'Namaz',id:1},
     {title:'Breakfast',id:2},
     {title:'Gym',id:3},
 ]
        }        
 }
  addtodo=(Todo)=>{
    console.log(Todo);
    let newTodo =[...this.state.todoList]
      newTodo.push(Todo)
    this.setState(
        {
            todoList:newTodo
        }
    )
            }
       dlt_todo(id){
           console.log(id)
           let newobj=[...this.state.todoList]
           let newTodos=newobj.filter(item=>item.id!=id)//ane wali id ko sare ids s match krware 
           this.setState({
               todoList:newTodos
           })
       } 
    //    dlt_All(){
    //     this.setState(
    //         {
    //             todoList:''
    //         }
    //     )
    //    }
render()
{
    
    return(
        <div>
             <Addtodo addtodo={this.addtodo} dlt_todo={this.dlt_todo}  dlt_All={this.dlt_All}  /> {/*is page p banee funct ko as a prop isk apne page p lekr jaegy */}

             <ul>{ 
    this.state.todoList.map(item=>{
        return(
          <li key={item.id}>{item.title}
          <button onClick={()=>{this.dlt_todo(item.id)}}>X</button>
          </li>
    )})
    }</ul>
    )
        </div>
    )
}
} 

export default Todolist;