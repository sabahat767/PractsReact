import React, { Component } from 'react';
 import Header from './components/header'
import Body from './components/body'
//import Todolist from './components/ToDoList'

import './App.css';

class App extends React.Component{
  render(){
    return(
      <div>
<Header/> 
 <Body/> 
 {/* <Todolist/>  */}
      </div>
    )
  }
}
// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
        
        
//         <a>
          
//         </a>
//       </header>
//     </div>
//   );
// }

export default App;
