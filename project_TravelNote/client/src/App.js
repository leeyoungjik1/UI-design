import './App.css';
import { Route, Routes } from 'react-router-dom'
import { Home, Login, Join, NotFound } from './pages'

function App() {
  return (
    <div className="App">
      <Routes>
        <Route exact path='/' element={<Home/>}/>
        <Route exact path='/join' element={<Join/>}/>
        <Route exact path='/login' element={<Login/>}/>
        <Route path='*' element={<NotFound/>}/>
      </Routes>
    </div>
  );
}

export default App;
