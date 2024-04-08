import React from "react";

// class Person extends React.Component {
//     render(){
//         const name = 'stleemomo'
//         const age = 3

//         return (
//             <React.Fragment>
//                 <h3>{name}</h3>
//                 <h4>{age}</h4>
//             </React.Fragment>
//         )
//     }
// }

// function Person(props){
//     return (
//         <>
//                 <h3>{props.name}</h3>
//                 <h4>{props.age}</h4>
//         </>
//     )
// }

const Person = ({name, age}) => {
    return (
        <>
                <h3>{name}</h3>
                <h4>{age}</h4>
        </>
    )
}


export default Person