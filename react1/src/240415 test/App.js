import './App.css';
import React, { Component } from 'react';
import Movie from './240412/Movie';
import logo from './logo.svg'


class App extends Component{
    constructor(props){
        super(props)
        this.state = {
            loading: true,
            movies: []
        }
    }
    componentDidMount(){
        fetch('https://yts.mx/api/v2/list_movies.json?limit=12')
        .then(res => res.json())
        .then(result => {
            const {data: {movies}} = result
            console.log(movies)
            this.setState({loading: false, movies})
        })
    }
    render(){
        const {loading, movies} = this.state
        const style = {
            display: 'flex',
            flexWrap: 'wrap',
            justifyContent: 'center',
            alignItems: 'center',
            width: '60%',
            margin: '100px auto',
            textAlign: 'center'
        }
        const loadingStyle = {
            position: 'absolute', 
            left: '50%', 
            top:'50%', 
            transform: 'translate(-50%, -50%)', 
            fontSize: '2rem'
        }

        if(loading){
            return (
                <div style={loadingStyle}>
                    <img src={logo}></img>
                    <h1>Loading...</h1>
                </div>
            )
        }else{
            return (
                <div style={style}>
                    {movies.length !== 0 && movies.map(movie => {
                        return (
                            <Movie
                                key={movie.id}
                                title={movie.title}
                                genres={movie.genres}
                                cover={movie.medium_cover_image}
                                summary={movie.summary}
                            >
                            </Movie>
                        )
                    })}
                </div>
            )
        }
    }
}

export default App;