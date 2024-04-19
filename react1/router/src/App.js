import logo from './logo.svg';
import './App.css';
import React, { useState } from 'react';
import { Route, Routes } from 'react-router-dom';
import { Home, About, Post, NotFound } from './pages'
import Menu from './component/Menu';
import Sidebar from './component/Sidebar'
import Button from './component/Button'

const homeMenu = [
  {
    name: "HOME",
    url: '/'
  },
  {
    name: "ABOUT",
    url: '/about'
  },
  {
    name: "POST",
    url: '/posts'
  },
]

function App() {
  const [open, setOpen] = useState(false)
  const showSidebar = () => {
    setOpen(!open)
  }
  return (
    <div className="App">
      <Button handleClick={showSidebar}>Menu</Button>
      <Sidebar open={open}>
        <Menu menus={homeMenu}/>
      </Sidebar>
      <Routes>
        <Route exact path='/' element={<Home/>}/>
        <Route exact path='/about' element={<About/>}/>
        <Route path='/posts' element={<Post/>}>
          <Route path=':postId' element={<Post/>}/>
        </Route>
        <Route path='*' element={<NotFound/>}/>
      </Routes>
    </div>
  );
}

export default App;
