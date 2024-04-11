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
import Movie from './240411/Movie';
import MovieList from './240411/MovieList';
import User from './240411/과제1_User';


// class App extends Component {
//   state = {
//     movies: [
//       {id: "123450", title: 'Harry Potter', language: "korean", release: '2003-02-22', length:"12345", author: "sunrise", production: "sunrise" }, 
//       {id: "123451", title: 'Indiana Jhones', language: "english", release: '2009-01-09', length:"12345", author: "sunrise", production: "sunrise"}, 
//       {id: "123452", title: 'Terminator', language: "japanese", release: '2007-04-11', length:"12345", author: "sunrise", production: "sunrise"},
//       {id: "123453", title: 'Dracula', language: "chinese", release: '2007-04-13', length:"12345", author: "sunrise", production: "sunrise"},
//       {id: "123454", title: 'Jurassic Park', language: "germany", release: '2007-05-13', length:"12345", author: "sunrise", production: "sunrise"},
//       {id: "123455", title: 'Iron man', language: "italian", release: '2012-12-18', length:"12345", author: "sunrise", production: "sunrise"},
//       {id: "123456", title: 'Spider man', language: "russian", release: '2017-03-07', length:"12345", author: "sunrise", production: "sunrise"}
//     ]
//   }

//   render(){
//     const {movies} = this.state
//     return (
//       <MovieList movies={movies}></MovieList>
//     )
//   }
// }


// const colors = ["red", "blue", "green", "orange", "skyblue"]

// class App extends Component{
//   state = {
//     colorIndex: 0
//   }
//   changeColor = () => {
//     this.setState({colorIndex: this.state.colorIndex + 1})
//   }
//   componentDidMount(){
//     this.timerId = setInterval(this.changeColor, 1000)
//   }
//   componentWillUnmount(){
//     clearInterval(this.timerId)
//   }
//   render(){
//     const {colorIndex} = this.state
//     const color = colors[colorIndex % colors.length]
//     return (
//       <>
//         <div className={`color-box ${color}`}>{color}</div>
//       </>
//     )
//   }
// }



// class App extends Component{
//   state = {
//     cnt: 0
//   }
//   increase = () => {
//     this.setState({ cnt: this.state.cnt + 1})
//   }
//   componentDidUpdate(prevProps, prevState){
//     console.log('카운트 업데이트 !')
//     console.log('직전 카운트 값: ', prevState)
//   }

//   render(){
//     const { cnt } = this.state

//     return (
//       <div className='center'>
//         <div>{cnt}</div>
//         <button onClick={this.increase}>카운트 증가</button>
//       </div>
//     )
//   }
// }


// 연습과제 2
// class App extends Component {
//   render(){
//     return(
//       <>
//         <User></User>
//       </>
//     )
//   }
// }


// 연습과제 3
// const Friends = ({friends, city}) => {
//   return (
//     <>
//       <h1>{`${city} 사용자 조회`}</h1>
//       <div>
//       {friends.map((friend) => 
//       <h2>{`이름: ${friend.name} 나이: ${friend.age} 지역: ${friend.city}`}</h2>
//       )}
//       </div>
//     </>
//   )
// }

// class App extends Component {
//   state = {
//     friends: [
//       {name: 'victoria', age: 13, city: 'seoul'},
//       {name: 'sun', age: 34, city: 'busan'},
//       {name: 'johseb', age: 25, city: 'busan'},
//       {name: 'syleemomo', age: 9, city: 'seoul'},
//       {name: 'hannah', age: 41, city: 'daegu'},
//       {name: 'shara', age: 37, city: 'seoul'},
//       {name: 'martin', age: 28, city: 'daegu'},
//       {name: 'gorgia', age: 39, city: 'seoul'},
//       {name: 'nana', age: 24, city: 'busan'},
//       {name: 'dannel', age: 19, city: 'seoul'},
//     ],
//     updatedFriends: null
//   }
//   // 구현하기
//   filterCity = (city) => {
//     this.setState({updatedFriends: this.state.friends.filter(friend =>
//       friend = friend.city === city
//     )})
//   }
//   // 구현하기
//   render(){
//     let { friends, updatedFriends } = this.state 
//       return (
//         <>
//           <button onClick={() => this.filterCity("seoul")}>서울</button>
//           <button onClick={() => this.filterCity("busan")}>부산</button>
//           <button onClick={() => this.filterCity("daegu")}>대구</button>
//           {<Friends 
//             friends={updatedFriends? updatedFriends: friends} 
//             city={updatedFriends? updatedFriends[0].city: "전체"}/>}
//         </>
//       )
//   }
// }


// 연습과제 4
const signs = [
  [
    [0, 0, 0, 1, 1, 1, 1, 0, 0, 0],
    [0, 0, 1, 0, 0, 0, 0, 1, 0, 0],
    [0, 0, 1, 0, 0, 0, 0, 1, 0, 0],
    [0, 0, 1, 0, 0, 0, 0, 1, 0, 0],
    [0, 0, 1, 0, 0, 0, 0, 1, 0, 0],
    [0, 0, 0, 1, 1, 1, 1, 0, 0, 0],
    [0, 0, 0, 0, 1, 1, 0, 0, 0, 0],
    [0, 0, 0, 0, 1, 1, 0, 0, 0, 0],
    [0, 1, 1, 1, 1, 1, 1, 1, 1, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  ],
  [
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 1, 1, 1, 1, 1, 0, 0, 1, 0],
    [0, 0, 0, 0, 1, 0, 0, 0, 1, 0],
    [0, 0, 0, 1, 0, 0, 0, 0, 1, 0],
    [0, 0, 1, 0, 1, 0, 0, 0, 1, 0],
    [0, 1, 0, 0, 0, 1, 0, 0, 1, 0],
    [0, 0, 0, 1, 1, 1, 1, 1, 0, 0],
    [0, 0, 1, 0, 0, 0, 0, 0, 1, 0],
    [0, 0, 1, 0, 0, 0, 0, 0, 1, 0],
    [0, 0, 0, 1, 1, 1, 1, 1, 0, 0],
  ],
  [
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 1, 0],
    [0, 0, 1, 1, 1, 0, 0, 0, 1, 0],
    [0, 1, 0, 0, 0, 1, 0, 0, 1, 0],
    [0, 1, 0, 0, 0, 1, 1, 1, 1, 0],
    [0, 1, 0, 0, 0, 1, 1, 1, 1, 0],
    [0, 1, 0, 0, 0, 1, 0, 0, 1, 0],
    [0, 0, 1, 1, 1, 1, 0, 0, 1, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 1, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  ],
  [
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 1, 0, 1, 0],
    [0, 1, 1, 1, 0, 0, 1, 0, 1, 0],
    [0, 0, 0, 1, 1, 1, 1, 0, 1, 0],
    [0, 0, 0, 1, 1, 1, 1, 0, 1, 0],
    [0, 0, 0, 1, 0, 0, 1, 0, 1, 0],
    [0, 1, 1, 0, 0, 0, 1, 0, 1, 0],
    [0, 0, 0, 0, 0, 0, 1, 0, 1, 0],
    [0, 0, 0, 0, 0, 0, 1, 0, 1, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  ],
  [
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 1, 1, 1, 0, 0, 1, 1, 0],
    [0, 1, 0, 0, 0, 1, 0, 1, 1, 0],
    [0, 1, 0, 0, 0, 1, 0, 1, 1, 0],
    [0, 1, 0, 0, 0, 1, 0, 1, 1, 0],
    [0, 0, 1, 1, 1, 0, 0, 1, 1, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 1, 1, 1, 1, 1, 1, 0],
    [0, 0, 0, 1, 0, 0, 0, 0, 1, 0],
    [0, 0, 0, 1, 1, 1, 1, 1, 1, 0],
  ]
]
const Cell = ({state}) => <div className={state === 0 ? 'cell' : 'cell bright'}></div>

class App extends Component {
  state = {
    index: 0,
  }

  // 구현하기
  redraw = () => {
    this.setState({index: this.state.index + 1})
  }

  componentDidMount(){
    setInterval(this.redraw, 1000)
  }

  // 구현하기
  render(){
    const {index} = this.state
    const sign = signs[index % signs.length]
    return (
      <div className='sign'>
          {sign.map(sign => 
            sign.map(cell => <Cell state={cell}/>)
          )}
      </div>
    )
  }
}

export default App;
