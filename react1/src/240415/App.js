import './App.css';
import React, { Component } from 'react';
import logo from './logo.svg'
import CustomInput from './240415/CustomInput';
import ScollBox from './240415/ScrollBox';
import Counter3 from './240415/Counter3';
import Comment from './240415/Comment';

// class App extends Component {
//     constructor(props){
//         super(props)
//         this.scrollBox = React.createRef()
//     }
//     moveBox = () => {
//         console.log(this.scrollBox)
//         console.log(this.scrollBox.current)
//         const { scrollHeight, clientHeight } = this.scrollBox.current;
//         this.scrollBox.current.scrollTop = scrollHeight - clientHeight;
//     }
//     render(){
//       return (
//         <div className="App">
//             <ScollBox ref={this.scrollBox}></ScollBox>
//             <button onClick={this.moveBox}>맨 밑으로</button>
//         </div>
//       )
//     }
//   }

//   class App extends Component {
//     render(){
//       return (
//         <div className="App">
//             <Counter3></Counter3>
//         </div>
//       )
//     }
//   }

// class App extends Component {
//     postId = 1
    
//     state = {
//         comments: []
//     }
//     getComments = () => {
//         fetch(`https://jsonplaceholder.typicode.com/comments/?postId=${this.postId}`)
//         .then(response => response.json())
//         .then(comments => {
//             console.log(comments)
//             this.setState({comments})
//         })
//     }
//     showNextComments = () => {
//         this.postId++
//         this.getComments()
//     }
//     componentDidMount(){
//         this.getComments()
//     }
//     render(){
//         const {comments} = this.state
//         return (
//             <div className="App">
//                 <h1>블로그 ({this.postId})</h1>
//                 <button onClick={this.showNextComments}>다음</button>
//                 {comments.length > 0 && comments.map(comment => <Comment key={comment.id} {...comment}></Comment>)}
//             </div>
//         )
//     }
// }

// 연습과제 1
class App extends Component {
    constructor(props){
        super(props)
        this.input = React.createRef()
    }
    showInput = () => {
        console.log(this.input)
        this.input.current.style.visibility = 'visible'
    }
    render(){
      return (
        <div className="App">
          <h1>File Upload</h1>
          <button type="button" onClick={this.showInput}>Upload</button>
          <input type="file" style={{visibility:'hidden'}} ref={this.input}></input>
        </div>
      );
    }
  }

export default App;