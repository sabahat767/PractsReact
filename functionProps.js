import React from 'react'
//with props:
function FunctionProps(props) {
    return (
        <div>
           {props.name}
        </div>
    )
}

export default FunctionProps
//without props by passing multiples props as parameters name only
// function FunctionProps({name,msg}) {
//     return (
//         <div>
//          hi {name}{msg}
//         </div>
//     )
// }
//<FunctionProps name='abc'msg='guh'/> main file m call krwate qt isko aese dengy multiples props