import React from "react";

// class Todo extends React.Component {
//     // constructor(props){
//     //     super(props)
//     //     this.state = {
//     //         name: "cleaning",
//     //         done: false,
//     //         discription: "cleaning my room",
//     //     }
//     // }

//     state = {
//         name: "cleaning",
//         done: false,
//         discription: "cleaning my room",
//     }

//     changeTodoName = () => {
//         this.setState({name: "변경하고 싶은 타이틀"})
//     }


//     render(){
//         const {name, done, discription} = this.state
//         console.log(this.props)
//         const {user, age} = this.props
//         return (
//             <>
//                 <h2>사용자: {user}({age})</h2>
//                 <h3>할일 제목: {name}</h3>
//                 <h4>할일 종료 여부: {done ? "종료" : "진행중"}</h4>
//                 <p>할일 상세 설명: {discription}</p>
//                 <button onClick={this.changeTodoName}>할일 제목 변경</button>
//             </>
//         )
//     }
// }

function Todo({user, age, name, done, discription}){
    return (
        <>
        <h2>사용자: {user}({age})</h2>
        <h3>할일 제목: {name}</h3>
        <h4>할일 종료 여부: {done ? "종료" : "진행중"}</h4>
        <p>할일 상세 설명: {discription}</p>
        {/* <button onClick={this.changeTodoName}>할일 제목 변경</button> */}
        </>
    )
}

export default Todo