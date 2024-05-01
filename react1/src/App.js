import './App.css';
import React, { Component, useEffect, useRef, useState  } from 'react';
import logo from './logo.svg'

class App extends Component{
    state = {
        msg: ''
    }
    componentDidMount(){
        fetch('http://localhost:5000/hello', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                userId: 'test',
                email: 'test@gmail.com'
            })
        })
        .then(res => res.json())
        .then(data => this.setState({msg: data}))
    }
    render(){
        const {msg} = this.state
        return(
            <div>{msg.userId} {msg.email}</div>
        )
    }
}

export default App;