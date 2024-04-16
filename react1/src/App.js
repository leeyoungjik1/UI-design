import './App.css';
import React, { Component } from 'react';
import logo from './logo.svg'
import dummyData2 from './240412/연습과제3_dummyData2';
import Button from './240412/Button'
import Word from './240416/Word';
import images from './240416/imageData';
import Sidebar from './240416/Sidebar';

// class App extends Component {
//   state = {
//     toggle: true
//   }
//   toggleScreenMode = () => {
//     this.setState({toggle: !this.state.toggle})
//   }
//   render(){
//     const {toggle} = this.state
//     return (
//       <div className={`normal ${toggle? "" : "dark"}`}>
//         <h1>Change screen mode</h1>
//         <button onClick={this.toggleScreenMode}>{toggle ? 'DARK' : 'NORMAL'}</button>
//       </div>
//     )
//   }
// }


// class App extends Component {
//   state = {
//     words: dummyData2
//   }
//   handleRemove = (id, e) => {
//     const word = e.target.previousSibling.innerText
//     alert(`You want to delete word - ${word}`)
//     const words = this.state.words.filter((w, index) => index !== id)
//     this.setState({words})
//   }
//   render(){
//     const {words} = this.state

//     return (
//       <div>
//         <h1 style={{textAlign: 'center'}}>Word List</h1>
//         {words.map((word, id) => {
//           return (
//             <Word key={id} handleRemove={(e) => this.handleRemove(id, e)} w={word}></Word>
//           )
//         })}
//       </div>
//     )
//   }
// }



// class App extends Component {
//   state = {
//     index: 0
//   }
//   decreaseIndex = () => {
//     const nextIndex = this.state.index - 1
//     this.setState({index: (nextIndex < 0) ? images.length -1 : nextIndex})
//   }
//   increaseIndex = () => {
//     const nextIndex = this.state.index + 1
//     this.setState({index: (nextIndex > images.length - 1) ? 0 : nextIndex})
//   }
//   render(){
//     const {index} = this.state
//     const {decreaseIndex, increaseIndex} = this
//     const img = images[index]
//     return (
//       <div className='App'>
//         <div className='img-container'>
//           <img src={img.src} alt={img.title}></img>
//         </div>

//         <div className='control-btns'>
//           <Button handleClick={decreaseIndex}>Prev</Button>
//           <Button handleClick={increaseIndex}>Next</Button>
//         </div>
//       </div>
//     )
//   }
// }


// const menus = [
//   {
//     icon: '♜',
//     title: 'HOME'
//   },
//   {
//     icon: '♞',
//     title: 'ABOUT'
//   },
//   {
//     icon: '☻',
//     title: 'SETTING'
//   },
//   {
//     icon: '♜',
//     title: 'HOME'
//   },
//   {
//     icon: '♞',
//     title: 'ABOUT'
//   },
//   {
//     icon: '☻',
//     title: 'SETTING'
//   }
// ]

// class App extends Component {
//   state = {
//     toggle: false
//   }
//   toggleMenu = () => {
//     this.setState({toggle: !this.state.toggle})
//   }
//   render(){
//     const {toggle} = this.state
//     return (
//       <div className='App'>
//         <Button handleClick={this.toggleMenu}>Open sidebar</Button>
//         <Sidebar open={toggle}>
//           {menus.map((menu, id) => {
//             return <div className='menu' key={id}>{menu.icon} {menu.title}</div>
//           })}
//         </Sidebar>
//       </div>
//     )
//   }
// }




// class App extends Component {
//   state = {
//     id: '',
//     password: ''
//   }
//   handleChange = (e) => {
//     console.log(e.target)
//     const {name, value} = e.target
//     console.log(name, value)
//     this.setState({[name]: value})
//   }
//   login = (e) => {
//     e.preventDefault()
//     const {id, password} = this.state
//     alert(`
//       아래 정보로 로그인 하시겠습니까?

//       - ID: ${id} / PASSWORD: ${password}
//     `)
//   }
//   render(){
//     const {id, password} = this.state
//     return (
//       <div className='App'>
//         <form>
//           <label>ID <input type='text' placeholder='TYPE YOUR ID...' onChange={this.handleChange} name='id' value={id} autoFocus></input></label>
//           <label>PASSWORD <input type='password' placeholder='TYPE YOUR PASSWORD...' onChange={this.handleChange} name='password' value={password}></input></label>
//           <div className='login-btn'>
//             <Button handleClick={this.login}>Login</Button>
//           </div>
//         </form>
//       </div>
//     )
//   }
// }



// const menus = [
//   { value: "서울", text: 'Seoul'},
//   { value: "대구", text: 'Deagu'},
//   { value: "부산", text: 'Busan'},
// ]


// class App extends Component {
//   state = {
//     value: ''
//   }
//   handleChange = (e) => {
//     console.log(e.target.value)
//     this.setState({value: e.target.value})
//   }
//   render(){
//     return (
//       <select onChange={this.handleChange} value={this.state.value}>
//         {menus.length !== 0 && menus.map((menu, id) => {
//           return <option key={id} value={menu.value}>{menu.text}</option>
//         })}
//       </select>
//     )
//   }
// }

// const coordinates = [
//   {
//       "name": "서울 강남",
//       "coordinate": [
//           37.497944,
//           127.027618
//       ]
//   },
//   {
//       "name": "대구 동성로",
//       "coordinate": [
//           35.865467,
//           128.593369
//       ]
//   },
//   {
//       "name": "부산 해운대",
//       "coordinate": [
//           35.1884,
//           129.166957
//       ]
//   },
// ]

// class App extends Component {
//   state = {
//     info: '',
//     map: null,
//     marker: null,
//     selectValue: ''
//   }
//   decomposeArgs = (args) => {
//     const {name, coordinate} = args
//     const [lat, lon] = coordinate
//     return [lat, lon, name]
//   }
//   displayLocation = (lat, lon, name, mapObj, marker) => {
//     const map = mapObj.setView([lat, lon], 13)
//     window.L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
//       maxZoom: 19,
//       attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
//     }).addTo(map);
//     marker.setLatLng([lat, lon])
//     .bindPopup(name)
//     .openPopup()

//     this.setState({
//         info: `
//           지역: ${name}
//           위치: ${lat} 위도 / ${lon} 경도
//         ` 
//       })
//   }
//   display = (map, marker, loc) => {
//     const [lat, lon, name] = this.decomposeArgs(loc)
//     this.displayLocation(lat, lon, name, map, marker)
//   }
//   componentDidMount(){
//     const map = window.L.map('map')
//     const marker = window.L.marker([0, 0]).addTo(map)
//     const firstLocation = coordinates[0]
//     this.display(map, marker, firstLocation)
//     this.setState({map, marker})
//   }
//   selectItem = (e) => {
//     const selectedLocation = coordinates[e.target.selectedIndex]
//     this.display(this.state.map, this.state.marker, selectedLocation)
//     this.setState({selectValue: e.target.value})
//   }
//   render(){
//     const {info, selectValue} = this.state
//     return (
//       <div className='App'>
//         <select onChange={this.selectItem} value={selectValue}>
//           {coordinates.length !== 0 && coordinates.map((coord, id) => {
//             return <option key={id} value={coord.name}>{coord.name}</option>
//           })}
//         </select>
//         <div id="map"></div>
//         <p>{info}</p>
//       </div>
//     )
//   }
// }



// 연습과제 1
// import youtubeVideos from './240416/연습과제1_youtubeVideos';

// class App extends Component {
//   state = {
//     index: 0
//   }
//   changeVideo = (e) => {
//     if(e.target.innerText === 'Next'){
//       this.setState({index: this.state.index+1})
//       if(this.state.index > youtubeVideos.length-2){
//         this.setState({index: 0})
//       }
//     }else if(e.target.innerText === 'Prev'){
//       this.setState({index: this.state.index-1})
//       if(this.state.index < 1){
//         this.setState({index: youtubeVideos.length-1})
//       }
//     }
//   }
//   render(){
//     const {index} = this.state
//     const selectedVideo = youtubeVideos[index]
//     return (
//       <div className='App'>
//         <iframe width="480" height="300" src={selectedVideo.src} title={selectedVideo.title} frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
//         <div>
//           <Button size='small' handleClick={this.changeVideo}>Prev</Button>
//           <Button size='small' handleClick={this.changeVideo}>Next</Button>
//         </div>
//       </div>
//     )
//   }
// }



// 연습과제 2, 연습과제 3
// import loginData from './240416/연습과제2_loginData';
// import Modal2 from './240412/연습과제2_Modal2';

// class App extends Component {
//   state = {
//     id: '',
//     password: '',
//     isLogin: false,
//     isFalse: false,
//     isModal: true
//   }
//   handleChange = (e) => {
//     const {name, value} = e.target
//     this.setState({[name]: value})
//   }
//   login = (e) => {
//     e.preventDefault()
//     const {id, password} = this.state
//     const {USER_ID: correctId, USER_PASSWORD: correctPassword} = loginData 
//     alert(`
//       아래 정보로 로그인 하시겠습니까?

//       - ID: ${id} / PASSWORD: ${password}
//     `)
//     if(correctId === id && correctPassword === password){
//       this.setState({isLogin: true})
//     }else{
//       this.setState({isFalse: true, isModal: true})
//     }
//   }
//   closeModal = () => {
//     this.setState({isModal: false})
//   }
//   render(){
//     const {id, password, isLogin, isFalse, isModal} = this.state
//     console.log(isFalse)
//     return (
//       <div className='App'>
//         {isLogin? 
//           <h1>HOME PAGE</h1> :
//           <form>
//           <label>ID <input type='text' placeholder='TYPE YOUR ID...' onChange={this.handleChange} name='id' value={id} autoFocus></input></label>
//           <label>PASSWORD <input type='password' placeholder='TYPE YOUR PASSWORD...' onChange={this.handleChange} name='password' value={password}></input></label>
//           <div className='login-btn'>
//             <Button handleClick={this.login}>Login</Button>
//           </div>
//         </form>
//         }
//         {isFalse && 
//           <Modal2 open={isModal}>
//             <p>로그인 실패</p>
//             <Button handleClick={this.closeModal}>Close</Button>
//           </Modal2>
//         }
//       </div>
//     )
//   }
// }



// 연습과제 4
// class App extends Component {
//   constructor(props){
//       super(props)
//       this.input = React.createRef()
//   }
//   state = {
//     imgs: []
//   }
//   showInput = () => {
//       this.input.current.style.visibility = 'visible'
//   }
//   handleChange = (e) => {
//     const uploadedFiles = e.target.files
//     const uploadedImg = []
//     for(let i=0; i<e.target.files.length; i++){
//       const objectURL = URL.createObjectURL(uploadedFiles[i])
//       uploadedImg.push({imgSrc: objectURL, imgTitle: uploadedFiles[i].name})
//     }
//     this.setState({imgs: uploadedImg})
//   }
//   render(){
//     const {imgs} = this.state
//     return (
//       <div className="App">
//         <h1>File Upload</h1>
//         <button type="button" onClick={this.showInput}>Upload</button>
//         <input type="file" style={{visibility:'hidden'}} ref={this.input} onChange={this.handleChange} accept="image/*" multiple></input>
//         {imgs.length > 0 && imgs.map((img, id) => {
//           return (
//             <div key={id}>
//               <h1>{img.imgTitle}</h1>
//               <img src={img.imgSrc}></img>
//             </div>
//           )
//         })}
//       </div>
//     );
//   }
// }



// 연습과제 5, 6
// const menus = [
//   {
//     icon: '♜',
//     title: 'HOME'
//   },
//   {
//     icon: '♞',
//     title: 'ABOUT'
//   },
//   {
//     icon: '☻',
//     title: 'SETTING'
//   },
//   {
//     icon: '♜',
//     title: 'HOME'
//   },
//   {
//     icon: '♞',
//     title: 'ABOUT'
//   },
//   {
//     icon: '☻',
//     title: 'SETTING'
//   }
// ]

// class App extends Component {
//   state = {
//     toggle: false
//   }
//   toggleMenu = () => {
//     this.setState({toggle: !this.state.toggle})
//   }
//   closeSidebar = (e) => {
//     if(this.state.toggle && !e.target.className.includes('Button')){
//       this.setState({toggle: false})
//     }
//   }
//   componentDidMount(){
//     window.addEventListener('click', this.closeSidebar)
//   }
//   render(){
//     const {toggle} = this.state
//     return (
//       <div className='App'>
//         <Button handleClick={this.toggleMenu}>Open sidebar</Button>
//         <Sidebar open={toggle}>
//           {menus.map((menu, id) => {
//             return <div className='menu' key={id}>{menu.icon} {menu.title}</div>
//           })}
//         </Sidebar>
//       </div>
//     )
//   }
// }



// 연습과제 7
import Product from './240412/연습과제4_Product'
const dropdownMenus = [
  {
    title: 'menu1',
    sideMenusTitle: ['sidemenu1', 'sidemenu2', 'sidemenu3']
  },
  {
    title: 'menu2',
    sideMenusTitle: ['sidemenu1', 'sidemenu2', 'sidemenu3']
  },
  {
    title: 'menu3',
    sideMenusTitle: ['sidemenu1', 'sidemenu2', 'sidemenu3']
  },
]

class App extends Component{
  state = {
      products: [],
      setProducts: [],
      searchProducts: [],
      isSortPrice: false,
      isUserInput: false
  }
  componentDidMount(){
      fetch('http://makeup-api.herokuapp.com/api/v1/products.json?brand=maybelline')
      .then(res => res.json())
      .then(result => {
          const copyProduct = [...result]
          this.setState({products: result, 
              setProducts: copyProduct.sort((a,b) => Number(a.price) - Number(b.price))
          })
      })
  }
  sortPrice = () => {
      this.setState({isSortPrice: !this.state.isSortPrice, isUserInput: false})
  }
  mapProduct = ({products}) => {
      return products.map(function(product){
          return (
              <Product
                  key={product.id}
                  img={product.image_link}
                  name={product.name}
                  price={product.price}
                  description={product.description}
                  productType={product.product_type}
              ></Product>
          )
      })
  }
  search = (e) => {
      const userInput = e.target.value.toLowerCase()
      if(userInput){
        this.setState({searchProducts: this.state.products.filter(function(product){
          const productName = product.name.toLowerCase()
          return productName.includes(userInput)
        }), isUserInput: true})
      }else{
        this.setState({isUserInput: false})
      }
  }
  showDropdownMenus = (e) => {
    if(e.target.className === 'main-menu'){
      const sideMenu = e.target.querySelector('.side-menu')
      sideMenu.classList.add('show')
    }
  }
  render(){
      const {products, setProducts, searchProducts, isUserInput} = this.state
      return(
          <div className='App'>
              <div className='header'>
                  <nav>
                    {dropdownMenus.map((menu, id) => {
                      return (
                        <ul key={id} onMouseOver={this.showDropdownMenus} className='main-menu'>
                          <li>{menu.title}
                            <ul className={`side-menu`}>
                              {menu.sideMenusTitle.map((sideMenu, id) => <li key={id}>{sideMenu}</li>)}
                            </ul>
                          </li>
                        </ul>
                      )
                    })}
                  </nav>
                  <button className='sort-btns' onClick={this.sortPrice}>Price</button>
                  <select onMouseEnter={this.showDropdownMenus}>
                    {dropdownMenus.map((menu, id) => <option key={id}>{menu.title}</option>)}
                  </select>
                  <input type='text' onInput={this.search}></input>
              </div>
              <div className='root'>
                  {isUserInput ? 
                    <this.mapProduct products={searchProducts}/> : this.state.isSortPrice ? 
                      <this.mapProduct products={setProducts}/> : 
                      <this.mapProduct products={products}/>
                  }
              </div>
          </div>
      )
  }
}


export default App;