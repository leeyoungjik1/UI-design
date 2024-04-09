import logo from './logo.svg';
import './App.css';
import NameTag from './240409/NameTag';
import Counter from './240409/Counter';
import Counter2 from './240409/Counter2';
import YoutubeVideo from './240409/YoutubeVideo';
import dummyData from './240409/dummyData_YotubeVideo';
import React, { Component } from 'react';
import Cart from './240409/과제3_Cart';
import PhotoGallery from './240409/과제4_PhotoGallery';
import CommentFilter from './240409/과제5_CommentFilter';


// const loadingPage = <h1>로딩중...</h1>
// const homePage = <h1>홈 페이지</h1>

// function App() {
//   const MyComponents = {
//     DataPicker: function(props){
//       return <div>Imagine a {props.color} datepicker here.</div>
//     },
//     Movie: function(props){
//       return <div>Watch movie {props.title} in the future!</div>
//     },
//     Fruit: function(props){
//       return <div>{props.name} is healthy food</div>
//     }
//   }
//   return (
//     <div className="App">
//       <MyComponents.DataPicker color="blue"></MyComponents.DataPicker>
//       <MyComponents.Movie title="아이언맨"></MyComponents.Movie>
//       <MyComponents.Fruit name="블루베리"></MyComponents.Fruit>
//     </div>
//   )
// }

// 연습과제 2
// class App extends Component {
//   state = {
//     title: "변경전 제목"
//   }
//   changeTitle = () => {
//     this.setState({title: "제목 업데이트"})
//   }
//   render(){
//     const {title} = this.state
//     return (
//       <div className="App">
//         <h1>제목: {title}</h1>
//         <button type="button" onClick={this.changeTitle}>change title</button>
//       </div>
//     )
//   }
// }


// 연습과제 3
// class App extends Component {
//   render(){
//     return (
//       <div className="App">
//        <Cart/>
//       </div>
//     )
//   }
// }


// 연습과제 4
// class App extends Component {
//   render(){
//     return (
//       <div className="App">
//        <PhotoGallery/>
//       </div>
//     )
//   }
// }


// 연습과제 5
class App extends Component {
  render(){
    return (
      <div className="App">
        <h1>필터링된 댓글</h1>
        <h2>==============</h2>
       <CommentFilter comment="너는 진짜 못말리는 바보 똥개다"/>
       <CommentFilter comment="임마! 너 그렇게 살지마! 그지 새끼야 !"/>
       <CommentFilter comment="야 씨~ 너 죽을래? 진짜 ! 콱! 마! "/>
      </div>
    )
  }
}

export default App;
