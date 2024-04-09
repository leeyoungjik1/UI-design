import React, { Component } from 'react';

class Counter2 extends Component{
    render(){
        this.props = {user: "성용"}
        console.log(this.props)
    	return (
            <>
            	<h1>Props 변경하기</h1>
            </>
        )
    }
 }
 export default Counter2;