import './App.css';
import React, { Component } from 'react';
import Movie from './240412/Movie';
import logo from './logo.svg'
// import animals from './240412/dummyData';
// import Button from './240412/Button';
// import Modal from './240412/Modal';
// import dummyData2 from './240412/연습과제3_dummyData2';
import Product from './240412/연습과제4_Product';
import './240412/연습과제4_Product.css'
// import Nav from './240412/연습과제1_Nav';
// import Modal2 from './240412/연습과제2_Modal2';
// import Card from './240412/연습과제3_Card';
// import Input from './240412/연습과제4_Input';


// class App extends Component{
//     state = {
//         count: 0
//     }
//     increaseCount = () => {
//         this.setState({count: this.state.count + 1})
//     }
//     componentDidMount(){
//         this.countId = setInterval(this.increaseCount, 1000)
//     }
//     componentWillUnmount(){
//         clearInterval(this.countId)
//     }
//     render(){
//         const {count} = this.state
//         const animal = animals[count%animals.length]
//         return(
//             <div>
//                 <h1>이미지 갤러리</h1>
//                 <img src={animal.src} alt={animal.title}></img>
//                 <h1>{count}</h1>
//             </div>
//         )
//     }
// }



// class App extends Component{
//     handleClick = () => alert('clicked button')
//     render(){
//         return(
//             <div className='App'>
//                 <Button size='small' handleClick={this.handleClick} disabled={false}>Add Todo</Button>
//                 <Button size='small' handleClick={this.handleClick} disabled={true}>Add Todo</Button>

//                 <Button>Add Todo</Button>
//                 <Button size='large'>Add Todo</Button>
//                 <Button color='blue'>Add Todo</Button>
//                 <Button>Add Todo</Button>
//                 <Button color='grey'>Add Todo</Button>
//                 <Button width='fullWidth'>Add Todo<img src="http://simpleicon.com/wp-content/uploads/rocket.png" width="30px" height="30px"></img></Button>
//             </div>
//         )
//     }
// }

// class App extends Component{
//     state = {
//         open: false
//     }
//     openModal = () => {
//         this.setState({open: true})
//     }
//     closeModal = () => {
//         this.clearInputs()
//         this.setState({open: false})
//     }
//     clearInputs = () => {
//         const inputs = document.querySelectorAll('.Modal-body input')
//         for(let input of inputs){
//             input.value = ''
//         }
//     }
//     handleKeyUp = (e) => {
//         console.log(e.key)
//         if(e.key === 'Enter'){
//             this.closeModal()
//         }
//     }
//     componentDidUpdate(){
//         if(this.state.open){
//             const firstInput = document.querySelectorAll('.Modal-body input')[0]
//             firstInput.focus()
//         }
//     }
//     render(){
//         const {open} = this.state
//         return(
//             <div className='App'>
//                 <Button handleClick={this.openModal}>Add Todo</Button>
//                 <Modal open={open}>
//                     <div className='Modal-header'>You want to add new todo?</div>
//                     <div className='Modal-body'>
//                         <label>todo name: <input type="text"></input></label><br/>
//                         <label>todo description: <input type="text" onKeyUp={this.handleKeyUp}></input></label>
//                     </div>
//                     <div className='Modal-footer'>
//                         <Button size="small">Add</Button>
//                         <Button size="small" handleClick={this.closeModal}>Close</Button>
//                     </div>
//                 </Modal>
//             </div>
//         )
//     }
// }


// 연습과제 1
// class App extends Component{
//     state = {
//         lotto: []
//     }
//     makeLottoNum = () => {
//         const setLotto = []
//         for(let i=0; i<6; i++){
//             setLotto.push(this.pickRandomNumber(1,45))
//         }
//         if(!setLotto.every(function(num){
//             if(setLotto.indexOf(num) !== setLotto.lastIndexOf(num)){
//                 return false
//             }else{
//                 return true
//             }
//         })){
//             this.makeLottoNum()
//         }else{
//             this.setState({lotto: setLotto})
//         }
//     }
//     pickRandomNumber = (min, max) => {
//         return Math.floor( Math.random() * (max-min+1) ) + min
//     }
//     componentDidMount(){
//         this.makeLottoNum()
//         this.countId = setInterval(this.makeLottoNum, 1000)
//     }
//     componentWillUnmount(){
//         clearInterval(this.countId)
//     }
//     render(){
//         const {lotto} = this.state
//         return(
//             <div>
//                 <h1>로또번호 자동 생성기</h1>
//                 <div className='lottoNum-box'>{lotto.map(num => <h2>{num}</h2>)}</div>
//             </div>
//         )
//     }
// }


// 연습과제 2
// class App extends Component{
//     state = {
//         count: 0
//     }
//     pickRandomNumber = (min, max) => {
//         return Math.floor( Math.random() * (max-min+1) ) + min
//     }
//     componentDidMount(){
//         setInterval(() => {
//             this.setState({count: this.state.count + this.pickRandomNumber(1,dummyData2.length-1)})
//         }, 1000)
//     }
//     render(){
//         const {count} = this.state
//         const card = dummyData2[count % dummyData2.length]
//         return <Card word={card.word} meaning={card.meaning}></Card>
//     }
// }



// 연습과제 3
// class App extends Component{
//     state = {
//         products: [],
//         setProducts: [],
//         isSortPrice: false
//     }
//     componentDidMount(){
//         fetch('http://makeup-api.herokuapp.com/api/v1/products.json?brand=maybelline')
//         .then(res => res.json())
//         .then(result => {
//             const copyProduct = [...result]
//             this.setState({products: result, 
//                 setProducts: copyProduct.sort((a,b) => Number(a.price) - Number(b.price))
//             })
//         })
//     }
//     sortPrice = () => {
//         this.setState({isSortPrice: !this.state.isSortPrice})
//     }
//     mapProduct = ({products}) => {
//         return products.map(function(product){
//             return (
//                 <Product
//                     img={product.image_link}
//                     name={product.name}
//                     price={product.price}
//                     description={product.description}
//                     productType={product.product_type}
//                 ></Product>
//             )
//         })
//     }
//     render(){
//         const {products, setProducts} = this.state
//         return(
//             <div className='App'>
//                 <div className='header'>
//                     <button className='sort-btns' onClick={this.sortPrice}>Price</button>
//                 </div>
//                 <div className='root'>
//                     {this.state.isSortPrice ? <this.mapProduct products={setProducts}></this.mapProduct> : 
//                         <this.mapProduct products={products}></this.mapProduct>
//                     }
//                 </div>
//             </div>
//         )
//     }
// }


// 연습과제 1
// class App extends Component { 
//     render(){ 
//       return ( 
//                 <div className="App"> 
//                   <Nav></Nav>
//                 </div> 
//               ); 
//     } 
//   }


// 연습과제 2
// class App extends Component{
//     state = {
//         open: false
//     }
//     openModal = () => {
//         this.setState({open: true})
//     }
//     closeModal = () => {
//         this.clearInputs()
//         this.setState({open: false})
//     }
//     clearInputs = () => {
//         const inputs = document.querySelectorAll('.Modal-body input')
//         for(let input of inputs){
//             input.value = ''
//         }
//     }
//     handleKeyUp = (e) => {
//         console.log(e.key)
//         if(e.key === 'Enter'){
//             this.closeModal()
//         }
//     }
//     componentDidUpdate(){
//         if(this.state.open){
//             const firstInput = document.querySelectorAll('.Modal-body input')[0]
//             firstInput.focus()
//         }
//     }
//     render(){
//         const {open} = this.state
//         return(
//             <div className='App'>
//                 <Button handleClick={this.openModal}>Add Todo</Button>
//                 <Modal open={open}>
//                     <div className='Modal-header'>You want to add new todo?</div>
//                     <div className='Modal-body'>
//                         <label>todo name: <input type="text"></input></label><br/>
//                         <label>todo description: <input type="text" onKeyUp={this.handleKeyUp}></input></label>
//                     </div>
//                     <div className='Modal-footer'>
//                         <Button size="small">Add</Button>
//                         <Button size="small" handleClick={this.closeModal}>Close</Button>
//                     </div>
//                 </Modal>
//             </div>
//         )
//     }
// }



// 연습과제 4
// function App() {
//     const handleChange = () => console.log('Typing something...') // 이벤트핸들러 함수
//     return (
//       <div className="App">
//        <Input size="small" color="blue" handleChange={handleChange} disabled={false} label="Add Todo" placeholder="Type todo to add ..."/>
//        <Input size="medium" color="tomato" label="입력창" placeholder="뭐든지 입력하세요 !"/>
//        <Input size="large" color="grey" label="Remove Todo" placeholder="Type todo to remove ..."/>
//       </div>
//     );
//   }


// 연습과제 5
class App extends Component{
    state = {
        products: [],
        setProducts: [],
        searchProducts: [],
        isSortPrice: false
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
        this.setState({isSortPrice: !this.state.isSortPrice})
    }
    mapProduct = ({products}) => {
        return products.map(function(product){
            return (
                <Product
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
        console.log(e.target.value)
        console.log(this.state.products.filter(function(product){
            console.log(product.name)
            return product.name.includes('face')
        }))
    }
    render(){
        const {products, setProducts} = this.state
        return(
            <div className='App'>
                <div className='header'>
                    <button className='sort-btns' onClick={this.sortPrice}>Price</button>
                    <input type='text' onInput={this.search}></input>
                </div>
                <div className='root'>
                    {this.state.isSortPrice ? <this.mapProduct products={setProducts}></this.mapProduct> : 
                        <this.mapProduct products={products}></this.mapProduct>
                    }
                </div>
            </div>
        )
    }
}


export default App;