import './App.css';
import React, { Component } from 'react';
import logo from './logo.svg'
import Button from './240412/Button';
import { FaHeart } from 'react-icons/fa6';


// class App extends Component {
//   constructor(props){
//     super(props)
//     this.selectBox = React.createRef()
//   }
//   handleOpen = (e) => {
//     this.selectBox.current.size = 3
//   }
//   render(){
//     return (
//       <div className="App">
//         <button onClick={this.handleOpen}>열기</button>
//         <select ref={this.selectBox}>
//           <option value='first'>First Value</option>
//           <option value='second'>Second Value</option>
//           <option value='third'>Third Value</option>
//         </select>
//       </div>
//     )
//   }
// }


// import Card from './240418/Card';

// class App extends Component {
//   numOfCards = 9
//   state = {
//     sx: {background: '#0e1111', color: 'lightgray', borderRadius: '10px'},
//     selectIds: []
//   }
//   selectFlipCard = (id) => {
//     const {selectIds} = this.state
//     if(!selectIds.includes(id)){
//       this.setState({selectIds: [...selectIds, id]})
//     }else{
//       this.setState({selectIds: selectIds.filter(selectId => selectId !== id)})
//     }
//   }
//   render(){
//     const {sx, selectIds} = this.state
//     console.log('선택한 아이디:', selectIds)
//     return (
//       <div className="App">
//         {new Array(this.numOfCards).fill(0).map((_, id) => {
//           const active = selectIds.length > 0 && selectIds.includes(id)
//           const activeStyle = active ? {
//             transform: "rotateY(180deg)",
//             background: "orange",
//           } : {}
//           return (
//             <Card key={id} handleClick={() => this.selectFlipCard(id)} sx={{...sx, ...activeStyle}}>
//               <div className='thumbnail-img'>
//                 <img className='thumbnail' src={logo} alt={logo}></img>
//                 <span className='likes'><FaHeart/></span>
//               </div>
//               <div className='thumbnail-info'>
//                 <h3 className='title'>제목</h3>
//                 <p className='description'>이미지 설명</p>
//               </div>
//             </Card>
//           )
//         })}
//       </div>
//     )
//   }
// }



import Card from './240418/Card';

class App extends Component {
  numOfCards = 9
  state = {
    sx: {background: '#0e1111', color: 'lightgray', borderRadius: '10px'},
    selectIds: []
  }
  selectFlipCard = (id) => {
    const {selectIds} = this.state
    if(!selectIds.includes(id)){
      this.setState({selectIds: [...selectIds, id]})
    }else{
      this.setState({selectIds: selectIds.filter(selectId => selectId !== id)})
    }
  }
  render(){
    const {sx, selectIds} = this.state
    console.log('선택한 아이디:', selectIds)
    return (
      <div className="App">
        {new Array(this.numOfCards).fill(0).map((_, id) => {
          const active = selectIds.length > 0 && selectIds.includes(id)
          const activeStyle = active && 'active'
          return (
            <Card key={id} handleClick={() => this.selectFlipCard(id)} sx={{...sx}}>
              <div className='thumbnail-img'>
                <img className='thumbnail' src={logo} alt={logo}></img>
                <span className={`likes ${activeStyle}`}><FaHeart/></span>
              </div>
              <div className={`thumbnail-info ${activeStyle}`}>
                <h3 className='title'>제목</h3>
                <p className='description'>이미지 설명</p>
              </div>
            </Card>
          )
        })}
      </div>
    )
  }
}




export default App;