import './App.css';
import React, { Component, useEffect, useRef, useState  } from 'react';
import logo from './logo.svg'
import Button from './240412/Button';


// class App extends Component {
//   state = {
//     count: 0
//   }
//   increaseCount = () => {
//     this.setState({ count: this.state.count + 1 })
//   }

//   render(){
//     const { count } = this.state
//     return (
//       <div className="App">
//         <h1>Count : {count}</h1>
//         <Button handleClick={this.increaseCount}>Increase Count number</Button>
//       </div>
//     );
//   }
// }

// import React, { useState } from 'react';

// function App(){
//   const [count, setCount] = useState(0)
//   console.log(count)

//   const increaseCount = () => {
//     setCount(count + 1)
//   }
//   return (
//     <div className="App">
//       <h1>Count : {count}</h1>
//       <Button handleClick={increaseCount}>Increase Count number</Button>
//     </div>
//   )
// }


// class App extends Component {
//   state = {
//     user: {
//       name: "syleemomo",
//       age: 23,
//       fruits: ["apple", "banana", "orange"]
//     },
//     todos: [
//       {title: 'cleaning', done: false, description: 'cleaning my living room'},
//       {title: 'learning', done: false, description: 'learing react on tomorrow morning'},
//       {title: 'drinking', done: false, description: 'drinking soju with close friends'}
//     ]
//   }
//   changeName = () => {
//     const newUser = {...this.state.user, name: "새로운 이름"}
//     this.setState({user: newUser})
//   }
//   addTodo = () => {
//     const newTodo = {
//       title: 'checking', done: true, description: 'checking my state of score'
//     }
//     const todos = [...this.state.todos, newTodo]
//     this.setState({todos})
//   }
//   render(){
//     const {user, todos} = this.state
//     return (
//       <div className='App'>
//         <h1>User Information</h1>
//         <h2>{user.name} ({user.age})</h2>
//         <h3>favorite food: {user.fruits.join(' ')}</h3>
//         <Button handleClick={this.changeName}>이름 변경하기</Button>

//         <h1>Todo List</h1>
//         {todos.map((todo, id) => {
//           return (
//             <div key={id}>
//               <h2>{todo.title} ({todo.done ? "완료" : "진행중"})</h2>
//               <p>{todo.description}</p>
//             </div>
//           )
//         })}
//         <Button handleClick={this.addTodo}>할일 추가하기</Button>
//       </div>
//     )
//   }
// }




// import React, { useState } from 'react';

// function App(){
//   const [user, setUser] = useState(
//     {
//       name: "syleemomo",
//       age: 23,
//       fruits: ["apple", "banana", "orange"]
//     }
//   )
//   const changeName = () => {
//     const newUser = {...user, name: "새로운 이름"}
//     setUser(newUser)
//   }

//   const [todos, setTodos] = useState(
//     [
//       {title: 'cleaning', done: false, description: 'cleaning my living room'},
//       {title: 'learning', done: false, description: 'learing react on tomorrow morning'},
//       {title: 'drinking', done: false, description: 'drinking soju with close friends'}
//     ]
//   )
//   const addTodo = () => {
//     const newTodo = {
//       title: 'checking', done: true, description: 'checking my state of score'
//     }
//     const newTodos = [...todos, newTodo]
//     setTodos(newTodos)
//   }

//   return (
//     <div className='App'>
//       <h1>User Information</h1>
//       <h2>{user.name} ({user.age})</h2>
//       <h3>favorite food: {user.fruits.join(' ')}</h3>
//       <Button handleClick={changeName}>이름 변경하기</Button>

//       <h1>Todo List</h1>
//       {todos.map((todo, id) => {
//         return (
//           <div key={id}>
//             <h2>{todo.title} ({todo.done ? "완료" : "진행중"})</h2>
//             <p>{todo.description}</p>
//           </div>
//         )
//       })}
//       <Button handleClick={addTodo}>할일 추가하기</Button>
//     </div>
//   )
// }




// function App() {
//   const [count, setCount] = useState(0)
//   const [aa, setAa] = useState(0)
//   const increaseCount = () => {
//     setCount(count + 1)
//   }
//   const test = () => {
//     setAa('a')
//     console.log(aa)
//   }
//   useEffect(() => {
//     console.log('카운트')
//     document.title = `You clicked ${count} times`
//   }, [count])

//   return (
//     <div className="App">
//       <h1>Count: {count}</h1>
//       <Button handleClick={increaseCount}>Increase Number</Button>
//       <Button handleClick={test}>Increase Number</Button>
//     </div>
//   )
// }



// function App() {
//   const [count, setCount] = useState(0)

//   useEffect(() => {
//     const increaseCount = () => {
//       clearTimeout(timerId)
//       setCount(count+1)
//     }
//     const timerId = setTimeout(increaseCount, 1000)
//     return () => {
//       clearTimeout(timerId)
//     }
//   }, [count])


//   const [number, setNumber] = useState(0)

//   useEffect(() => {
//     const pickRandomNumber = () => {
//       const randNum = Math.floor(Math.random()*100)
//       setNumber(randNum)
//     }
//     const timerId = setTimeout(pickRandomNumber, 1000)
//     return () => {
//       clearTimeout(timerId)
//     }
//   }, [count])

//   return (
//     <div className="App">
//       <h1>숫자 자동 카운팅</h1>
//       <h2>Count: {count}</h2>
//       <br/>
//       <h1>랜덤 숫자</h1>
//       <h2>Random Number: {number}</h2>
//     </div>
//   )
// }

// import imageData from './240416/imageData';
// import words from './240418/dictionaryData';
// import useCounter from './240418/useCounter';

// function App(){
//   const randIndex = useCounter(imageData.length)
//   const animal = imageData[randIndex]


//   const randIndex2 = useCounter(words.length)
//   const dic = words[randIndex2]

//   return (
//     <div className="App">
//       <h1>이미지 갤러리</h1>
//       <img src={animal.src} alt={animal.title}></img>
//       <h2>{animal.title}</h2>
//       <br/>
//       <h1>플래쉬 카드</h1>
//       <h2>{dic.word}</h2>
//       <h3>{dic.meaning}</h3>
//     </div>
//   )
// }



// function App() {  
//   // 서버에서 데이터를 가져오는 로직
//   const [movies, setMovies] = useState([])
//   useEffect( () => {
//     fetch('https://yts.mx/api/v2/list_movies.json?limit=12')
//     .then( res => res.json())
//     .then( result => { 
//       const {data: {movies}} = result 
//       console.log(movies) 
//       console.log('useEffect - Movies')
//       setMovies(movies)
//     })
//   }, [])

//   return (
//     <div className="App">
//       <h1>영화목록</h1>
//       {movies.map( (movie, id) => {
//         return(
//           <div key={id}>{movie.title}</div>
//         )
//       })}
//     </div>
//   );
// }




// 연습과제 0
// import Modal from './240412/연습과제2_Modal2'

// function App(){
//   const [open, setOpen] = useState(false)

//   const openModal = () => {
//     setOpen(true)
//   }
//   const closeModal = () => {
//     setOpen(false)
//   }
//   return (
//     <div className="App">
//       <Button handleClick={openModal}>Add Todo</Button>
//       <Modal open={open}>
//         <div className="header">You want to add new todo ?</div>
//         <div className="body">
//           <label>todo name: <input type="text"></input></label><br/>
//           <label>todo description: <input type="text"></input></label>
//         </div>
//         <div className="footer">
//           <Button size="small">Add</Button>
//           <Button size="small" handleClick={closeModal}>Close</Button>
//         </div>
//       </Modal>
//     </div>
//   )
// }



// 연습과제 1
// function App(){
//   const [count, setCount] = useState(0)

//   const showUI = (cnt) => {
//     let ui = null;
//     switch(cnt){
//       case 0:
//         ui = <h1>Home</h1>
//         break;
//       case 1:
//         ui = <h1>About</h1>
//         break;
//       case 2:
//         ui = <h1>Detail</h1>
//         break;
//       default:
//         ui = <h1>NotFound</h1>
//     }
//     return ui
//   }
//   const increase = () => {
//     setCount(count+1)
//   }
//   return (
//     <>
//     {showUI(count)}
//     <button type="button" onClick={increase}>카운팅</button>
//     </>
//   )
// }


// 연습과제 2
import animals from './240416/imageData';

function App() {
  let [count, setCount] = useState(0);
  const animal = animals[count%animals.length]
  console.log(count)
  const increaseCount = () => {
    setCount(count+=1)
  }

  useEffect(() => {
    const countID = setInterval(increaseCount, 1000)
    return () => {
      clearInterval(countID)
    }
  }, []);

  return (
    <div className="App">
      <h1>Image Gallery !</h1>
      <img src={animal.src} alt={animal.title}></img>
    </div>
  )
}



// 연습과제 3
// import Movie from './240412/Movie'

// function App(){
//   const [loading, setLoading] = useState(true)
//   const [movies, setMovies] = useState([])

//   useEffect(() => {
//     fetch('https://yts.mx/api/v2/list_movies.json?limit=12')
//     .then( res => res.json())
//     .then( result => {
//       const {data: {movies}} = result
//       setLoading(false)
//       setMovies(movies)
//     })
//   }, [])

//   const style = {
//     display: 'flex',
//     flexWrap: 'wrap',
//     justifyContent: 'center',
//     alignItems: 'center',
//     width: '60%',
//     margin: '100px auto',
//     textAlign: 'center'
//   }
//   const loadingStyle = {
//     position: 'absolute', 
//     left: '50%', 
//     top:'50%', 
//     transform: 'translate(-50%, -50%)', 
//     fontSize: '2rem'
//   }
//   if(loading){
//     return (
//       <div style={loadingStyle}>
//         <h1>Loading ...</h1>
//       </div>
//     )
//   }else{
//     return (
//       <div style={style}>
//         {movies.map(movie => {
//           return (
//             <Movie 
//               key={movie.id}
//               title={movie.title}
//               genres={movie.genres}
//               cover={movie.medium_cover_image}
//               summary={movie.summary}
//             ></Movie>
//           )
//         })}
//       </div>
//     )
//   }
// }




// 연습과제 4
function App(){
  const [numbers, setNumbers] = useState('')

  const pickRandomNumber = (min, max) => { return Math.floor( Math.random() * (max-min+1) ) + min }

  const isDuplicated = (numbers, picked) => {
    return numbers.find(num => num === picked)
  }
  const getLottoNum = (numbers) => {
    // console.log("length: ", numbers)
    const picked = pickRandomNumber(1, 45)

    const duplicatedNum = isDuplicated(numbers, picked) // 중복체크
    if(duplicatedNum){
      console.log('duplicated ...', duplicatedNum)
      getLottoNum(numbers) // 로또배열에 랜덤으로 뽑은 숫자가 이미 존재하면 재귀적으로 다시 숫자를 뽑음 
    }else{
      numbers.push(picked)
    }
  }
  const showRandomNumber = () => {
    const numbers = [] // 로또번호 배열
    
    while(numbers.length < 6){
      getLottoNum(numbers)
    }
    setNumbers(numbers.join('  '))
  }
  // 초기에 웹화면이 렌더링되었을때 타이머를 설정함
  useEffect(() => {
    const countID = setInterval(showRandomNumber, 1000)
    return () => {
      clearInterval(countID)
    }
  }, [])
  return (
    <div className='App'>
      <h1>로또번호 자동 생성기</h1>
      <h1>{numbers}</h1>
    </div>
  )
}




// 연습과제 5
// import Word from './240418/연습과제5_useWord';

// function App(){
//   const [words, setWords] = useState([])

//   useEffect(() => {
//     const BASE_URL = 'https://dictionary-search.herokuapp.com/api/words'
//     fetch(BASE_URL, {
//       headers: {
//           "Content-Type": "application/json",
//           // "Access-Control-Allow-Origin": "*" // 이 코드 때문에 CORS 에러가 발생한것임. 이 코드 주석처리하면 프론트엔드에서 곧바로 외부 API 접근가능하다. (프록시나 서버가 필요없음)
//       }
//     })
//     .then( res => res.json())
//     .then( data => {
//           console.log(data)
//           const {words} = data;
//           setWords(words)
//       })
//   }, [])
//   return (
//     <div className="App">
//       {words.map( (word, id) => {
//         return (
//           <Word 
//             key={id}
//             r_link={word.r_link}
//             r_word={word.r_word}
//             r_hanja={word.r_hanja}
//             r_des={word.r_des}
//           ></Word>
//         ) 
//       })}
//     </div>
//   );
// }




// 연습과제 6
// import dicWords from './240418/dictionaryData';

// function App(){ 
//   const [words, setWords] = useState(dicWords)

//   const handleRemove = (id, e) => { 
//     const word = e.target.previousSibling.innerText 
//     console.log(word) 
//     console.log(id) 
//     alert(`You want to delete word - ${word}?`) 
//     const newWords = words.filter( (w, index) => index !== id ) // 제거하려는 단어의 id 와 일치하는 요소만 걸러냄 
//     setWords(newWords)
//   } 
//   const wordStyle = { display: 'flex', alignItems: 'center', justifyContent: 'center' } 
//   return ( 
//     <div> 
//       <h1 style={{textAlign:'center'}}>Word List</h1> 
//       {words.map( (w, id) => { 
//           return ( 
//             <div key={id} style={wordStyle}> 
//               <h2>{w.word}</h2> 
//               <Button size="small" type="button" handleClick={(e) => handleRemove(id, e)}>DELETE</Button> 
//             </div> 
//           ) 
//       })} 
//     </div> 
//   ); 
// } 



// 연습과제 7
// import images from './240416/imageData';

// function App(){
//   const [index, setIndex] = useState(0)

//   const decreaseIndex = () => {
//     const nextIndex = index - 1
//     setIndex((nextIndex < 0) ? images.length - 1 : nextIndex)
//   }
//   const increaseIndex = () => {
//     const nextIndex = index + 1
//     setIndex((nextIndex > images.length - 1) ? 0 : nextIndex)
//   }
//   const path = images[index].src
//   const title = images[index].title
//   return (
//     <div className="App">
//       <div className="img-container">
//         <img src={path} alt={title}/>
//       </div>

//       <div className="control-btns">
//         <Button handleClick={decreaseIndex}>Prev</Button>
//         <Button handleClick={increaseIndex}>Next</Button>
//       </div>
//     </div>
//   );
// }




// 연습과제 8
// function App(){
//   const [id, setId] = useState('')
//   const [password, setPassword] = useState('')

//   const handleChange = (e) => {
//     const { name, value } = e.target
//     console.log(name, value)
//     if(name==='id'){
//       setId(value)
//     }else if(name==='password'){
//       setPassword(value)
//     }
//   }
//   const login = (e) => {
//     e.preventDefault() // 새로고침 방지
//     console.log('login')
//   }

//   return (
//     <div className="App">
//       <form>
//           <label>ID <input type="text" placeholder="TYPE YOUR ID ..." name="id" value={id} onChange={handleChange}></input></label><br/><br/>
//           <label>PASSWORD <input type="password" placeholder="TYPE YOUR PASSWORD ..." name="password" value={password} onChange={handleChange}></input></label>
//           <div className="login-btn"><Button handleClick={login}>Login</Button></div>
//       </form>
//     </div>
//   );
// }



// 연습과제 9
// function App(){
//   const [fileName, setFileName] = useState('')
//   const [imgSrc, setImgSrc] = useState('')
//   const fileInput = useRef(null)

//   const isValid = (type) => {
//     return type === 'image'
//   }
 
//   const handleChange = (e) => {
//     console.log(e.target.files[0])
//     const file = e.target.files[0]
//     const newImgSrc = URL.createObjectURL(file)

//     if(isValid(file.type.split('/')[0])){
//       setFileName(file.name)
//       setImgSrc(newImgSrc)
//     }else{
//       setFileName('File is not valid type !')
//       setImgSrc('')
//     }
//   }
//   const openFileWindow = () => {
//     fileInput.current.click() // ref 사용하기
//   }

//   return (
//     <div className="App">
//       <h1>{fileName}</h1>
//       {imgSrc !== '' && <img src={imgSrc} alt="preview-img" width="300px" height="400px"></img> }
//       <input className="Upload" type="file" onChange={handleChange} ref={fileInput} accept="image/*"></input>
//       <Button handleClick={openFileWindow}>Upload</Button>  
//     </div>
//   );
// }


export default App;