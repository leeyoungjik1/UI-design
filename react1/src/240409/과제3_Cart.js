import React, { Component } from 'react'

class Cart extends Component{
    state = {
        cart: []
    }

    //구현하기
    addProduct = () => {
        const product = prompt("원하시는 상품을 추가해주세요 !")
        this.setState({cart: [...this.state.cart, product]})
    }

    // 구현하기
    render(){
        const { cart } = this.state 
        return (
            <>
                <button onClick={this.addProduct}>상품 추가하기</button>
                <h1>상품 목록</h1>
                <p>----------------</p>
                <div>{cart.map(product => <h3 key={product}>{product}</h3>
                )}</div>
            </>
        )
    }
}
export default Cart