import './App.css';
import React, { Component } from 'react';
import Button from './240412/Button'

// const foods = ["짜장면", "짬뽕", "탕수육"]

// class App extends Component {
//   state = {
//     selectedItems: []
//   }
//   selectItem = (e) => {
//     const {selectedItems} = this.state

//     // if(!selectedItems.includes(e.target.value)){
//     //   this.setState({selectedItems: [...selectedItems, e.target.value]})
//     // }else{
//     //   this.setState({selectedItems: selectedItems.filter(item => item !== e.target.value)})
//     // }

//     if(e.target.checked){
//       this.setState({selectedItems: [...selectedItems, e.target.value]})
//     }else{
//       this.setState({selectedItems: selectedItems.filter(item => item !== e.target.value)})
//     }
//   }
//   render(){
//     const {selectedItems} = this.state
//     return (
//       <div className="App">
//         {foods.length > 0 && foods.map((food, id) => 
//           (
//             <div key={id}>
//               <input type='checkbox' onChange={this.selectItem} value={food}/><span className={selectedItems.includes(food) && 'active'}>{food}</span>
//             </div>
//           )
//         )}
//         <h2>사용자가 선택한 음식목록</h2>
//         <h3>{selectedItems.length !== 0 ? 
//               selectedItems.join(' ') : '먹고 싶은 음식을 선택하세요'}
//         </h3>
//       </div>
//     )
//   }
// }



// class App extends Component {
//   state = {
//     selectedValue: '짜장면',
//   }

//   selectItem = (e) => {
//     console.log(e.target.value)
//     console.log(e.target.checked)

//     this.setState({selectedValue : e.target.value})
//   }

//   render(){
//     const { selectedValue } = this.state
   
//     return (
//       <div className="App">
//         <input type="radio" onChange={this.selectItem} value="짜장면" name='food'/><span style={{background:  `${selectedValue === '짜장면' ? 'yellow' : ''}`}}>짜장면</span>
//         <input type="radio" onChange={this.selectItem} value="짬뽕" name='food'/><span style={{background:  `${selectedValue === '짬뽕' ? 'yellow' : ''}`}}>짬뽕</span>
//         <input type="radio" onChange={this.selectItem} value="탕수육" name='food'/><span style={{background:  `${selectedValue === '탕수육' ? 'yellow' : ''}`}}>탕수육</span>
        
//         <h2>사용자가 선택한 음식</h2>
//         <h3>{selectedValue}</h3>
//       </div>
//     );
//   }
// }



// class App extends Component {
//   constructor(props){ 
//     super(props) 
//     this.state = {
//       fileName: '',
//       imgSrc: ''
//     }
//     this.fileInput = React.createRef() // ref 생성하기 
//   }
//   isValid = (type) => type === "image"
//   handelChange = (e) => {
//     const file = e.target.files[0]
//     const imgSrc = URL.createObjectURL(file)
//     if(this.isValid(file.type.split('/')[0])){
//       this.setState({fileName: file.name, imgSrc})
//     }else{
//       this.setState({fileName: 'File not valid!', imgSrc: ''})
//     }
//   }
//   openFileWindow = () => {
//     this.fileInput.current.click()
//   }
//   render(){
//     const {fileName, imgSrc} = this.state
//     return (
//       <div className="App">
//         <h1>{fileName}</h1>
//         {imgSrc !== '' && <img src={imgSrc} alt="preview-img" width="300px" height="400px"/>}
//         <input className='upload' type='file' accept='image/*' onChange={this.handelChange} ref={this.fileInput}></input>
//         <Button handleClick={this.openFileWindow}>이미지 업로드</Button>
//       </div>
//     )
//   }
// }



// import ScrollComponent from './240417/ScrollComponent';

// class App extends Component {
//   render(){
//     return (
//       <div className="App">
//         <ScrollComponent></ScrollComponent>
//       </div>
//     )
//   }
// }


// class App extends Component {
//   pageNum = 1
//   state = {
//     keyword: '',
//     photos: []
//   }
//   handleChange = (e) => {
//     this.setState({keyword: e.target.value})
//   }
//   getPhotos = async () => {
//     const data = await fetch(`https://api.unsplash.com/search/photos?query=${this.state.keyword}&client_id=${process.env.REACT_APP_UNSPLASH_API_KEY}&per_page=20&page=${this.pageNum}`)
//     const dataJson = await data.json()
//     console.log(dataJson)
//     return dataJson.results
//   }
//   searchPhotos = async(e) => {
//     e.preventDefault()
//     const photos = await this.getPhotos()
//     this.setState({photos})
//   }
//   handleScroll = async () => {
//     const photosContainer = document.querySelector('.App-photo-container')
//     if(photosContainer.scrollTop === photosContainer.scrollHeight - photosContainer.clientHeight){
//       this.pageNum++
//       const photos = await this.getPhotos()
//       this.setState({photos: [...this.state.photos, ...photos]})
//     }
//   }
//   render(){
//     const {keyword, photos} = this.state
//     return (
//       <div className="App">
//         <form className='App-search-container'>
//           <input type="text" onChange={this.handleChange} value={keyword} placeholder="검색어 입력"></input>
//           <button type='submit' onClick={this.searchPhotos}>검색</button>
//         </form>
//         <div className='App-photo-container' onScroll={this.handleScroll}>
//           {photos.length === 0 ? 
//             <div>원하시는 사진을 <br/> 검색창에서 찾아보세요!</div> :
//             photos.map(photo => <img key={photo.id} className='App-photo-item' src={photo.urls.small} alt={photo.alt_description}></img>)}
//         </div>
//       </div>
//     )
//   }
// }



// 연습과제 8, 9, 10
// import Product from './240412/연습과제4_Product'
// const dropdownMenus = [
//   {
//     title: 'menu1',
//     sideMenusTitle: ['sidemenu1', 'sidemenu2', 'sidemenu3']
//   },
//   {
//     title: 'menu2',
//     sideMenusTitle: ['sidemenu1', 'sidemenu2', 'sidemenu3']
//   },
//   {
//     title: 'menu3',
//     sideMenusTitle: ['sidemenu1', 'sidemenu2', 'sidemenu3']
//   },
// ]

// class App extends Component{
//   isLoaded = false
//   state = {
//       products: [],
//       setProducts: [],
//       searchProducts: [],
//       isSortPrice: false,
//       isUserInput: false,
//   }
//   sortPrice = () => {
//       this.setState({isSortPrice: !this.state.isSortPrice, isUserInput: false})
//   }
//   mapProduct = ({products}) => {
//       return products.map(function(product){
//           return (
//               <Product
//                   key={product.id}
//                   img={product.image_link}
//                   name={product.name}
//                   price={product.price}
//                   description={product.description}
//                   productType={product.product_type}
//               ></Product>
//           )
//       })
//   }
//   search = (e) => {
//       const userInput = e.target.value.toLowerCase()
//       if(userInput){
//         this.setState({searchProducts: this.state.products.filter(function(product){
//           const productName = product.name.toLowerCase()
//           return productName.includes(userInput)
//         }), isUserInput: true})
//       }else{
//         this.setState({isUserInput: false})
//       }
//   }
//   showDropdownMenus = (e) => {
//     if(e.target.className === 'main-menu'){
//       const sideMenu = e.target.querySelector('.side-menu')
//       sideMenu.classList.add('show')
//     }
//   }
//   scrollBtn = React.createRef()
//   handleSroll = () => {
//     const header = document.querySelector('.header')
//     if(window.pageYOffset > 200){
//       header.classList.add('shadow')
//     }else if(header.className.includes('shadow')){
//       header.classList.remove('shadow')
//     }

//     const scrollBtn = this.scrollBtn.current
//     if(window.pageYOffset > document.documentElement.clientHeight * 1.5){
//       scrollBtn.classList.add('show')
//     }else if(this.scrollBtn.current.className.includes('show')){
//       scrollBtn.classList.remove('show')
//     }
//   }
//   scrollToTop = () => {
//     window.scrollTo({
//       top: 0,
//       behavior: "smooth"
//     })
//   }
//   componentDidUpdate(){
//     if(this.isLoaded){
//       alert('load complete')
//       console.log('업데이트')
//       this.isLoaded = false
//     }
//   }
//   componentDidMount(){
//       fetch('http://makeup-api.herokuapp.com/api/v1/products.json?brand=maybelline')
//       .then(res => res.json())
//       .then(result => {
//           const copyProduct = [...result]
//           this.setState({products: result, 
//               setProducts: copyProduct.sort((a,b) => Number(a.price) - Number(b.price)),

//           })
//           this.isLoaded = true
//       })
//       window.addEventListener('scroll', this.handleSroll)
//   }
//   render(){
//       const {products, setProducts, searchProducts, isUserInput} = this.state
//       console.log('렌더')
//       return(
//           <div className='App'>
//               <div className='header'>
//                   <nav>
//                     {dropdownMenus.map((menu, id) => {
//                       return (
//                         <ul key={id} onMouseOver={this.showDropdownMenus} className='main-menu'>
//                           <li>{menu.title}
//                             <ul className={`side-menu`}>
//                               {menu.sideMenusTitle.map((sideMenu, id) => <li key={id}>{sideMenu}</li>)}
//                             </ul>
//                           </li>
//                         </ul>
//                       )
//                     })}
//                   </nav>
//                   <button className='sort-btns' onClick={this.sortPrice}>Price</button>
//                   <select onMouseEnter={this.showDropdownMenus}>
//                     {dropdownMenus.map((menu, id) => <option key={id}>{menu.title}</option>)}
//                   </select>
//                   <input type='text' onInput={this.search}></input>
//               </div>
//               <div className='root'>
//                   {isUserInput ? 
//                     <this.mapProduct products={searchProducts}/> : this.state.isSortPrice ? 
//                       <this.mapProduct products={setProducts}/> : 
//                       <this.mapProduct products={products}/>
//                   }
//               </div>
//               <button ref={this.scrollBtn} className='scrollBtn' onClick={this.scrollToTop}>scroll to top</button>
//           </div>
//       )
//   }
// }



// 연습과제 11, 12, 13


class App extends Component {
  pageNum = 1
  modalPhotoId = null
  state = {
    keyword: '',
    photos: [],
    isModalOpened: false,
    modalPhoto: null
  }
  handleChange = (e) => {
    this.setState({keyword: e.target.value})
  }
  getPhotos = async () => {
    const data = await fetch(`https://api.unsplash.com/search/photos?query=${this.state.keyword}&client_id=${process.env.REACT_APP_UNSPLASH_API_KEY}&per_page=20&page=${this.pageNum}`)
    const dataJson = await data.json()
    // console.log(dataJson)
    return dataJson.results
  }
  searchPhotos = async(e) => {
    e.preventDefault()
    const photos = await this.getPhotos()
    this.setState({photos})
  }
  lastPage = React.createRef()
  handleScroll = async () => {
    const photosContainer = document.querySelector('.App-photo-container')
    if(photosContainer.scrollTop === photosContainer.scrollHeight - photosContainer.clientHeight){
      this.pageNum++
      const photos = await this.getPhotos()
      this.setState({photos: [...this.state.photos, ...photos]})
      if(photos.length === 0){
        console.log('더 이상 사진이 없음')
        this.lastPage.current.classList.add('show')
      }
    }
  }
  modalImg = React.createRef()
  showPhotoInModal = (e) => {
    this.modalPhotoId = Number(e.target.id)
    this.setState({isModalOpened: true, modalPhoto: this.state.photos[Number(e.target.id)]})
  }
  closeToModal = () => {
    this.setState({isModalOpened: false})
  }
  changeModalPhoto = (e) => {
    const {photos} = this.state
    if(this.modalPhotoId < photos.length-1 && e.target.innerText === 'Next'){
      this.modalPhotoId++
      this.setState({modalPhoto: photos[this.modalPhotoId]})
    }else if(this.modalPhotoId > 0 && e.target.innerText === 'Prev'){
      this.modalPhotoId--
      this.setState({modalPhoto: photos[this.modalPhotoId]})
    }
  }
  render(){
    const {keyword, photos, isModalOpened, modalPhoto} = this.state
    if(modalPhoto){
      console.log(photos, isModalOpened, modalPhoto, this.modalPhotoId)
    }
    return (
      <div className="App">
        <div className='content-container'>
          <form className='App-search-container'>
            <input type="text" onChange={this.handleChange} value={keyword} placeholder="검색어 입력"></input>
            <button type='submit' onClick={this.searchPhotos}>검색</button>
          </form>
          <div className='App-photo-container' onScroll={this.handleScroll}>
            {photos.length === 0 ? 
              <div>원하시는 사진을 <br/> 검색창에서 찾아보세요!</div> :
              photos.map((photo, id) => <img key={photo.id} id={id} className='App-photo-item' src={photo.urls.small} alt={photo.alt_description} onClick={this.showPhotoInModal}></img>)}
              <div className='App-last-page' ref={this.lastPage}>마지막 사진입니다.</div>
          </div>
        </div>
        <div className={`App-modal-container ${isModalOpened && 'show-modal'}`}>
              <button className='App-modal-prev-btn' onClick={this.changeModalPhoto}>Prev</button>
              {modalPhoto && <img src={modalPhoto.urls.regular}></img>}
              <button className='App-modal-next-btn' onClick={this.changeModalPhoto}>Next</button>
              <button className='App-modal-close-btn' onClick={this.closeToModal}>닫기</button>
        </div>
      </div>
    )
  }
}


export default App;