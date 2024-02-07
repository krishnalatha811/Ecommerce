import React from 'react'
import Navbar from './components/Navbar'
import Home from './components/Home'
import AddProducts from './components/AddProduct'
import Login from './components/Login'
import Signup from './components/Signup'
import './components/Navbar.css'
import ReactDOM from 'react-dom/client';
import './components/Login.css'
import { BrowserRouter as Router, Routes, Route, Link  } from 'react-router-dom'
const App = () => {
  return (
   
    <>
     
     <Router>
    <Navbar />
   
      <Routes>
        <Route path='/Home' element ={<Home />} ></Route>
        <Route path='/AddProducts' element ={<AddProducts />} ></Route>
        <Route path='/Login' element ={<Login />} ></Route>
        <Route path='/Signup' element ={<Signup />}></Route>
      </Routes>
    </Router>
    </>
   
  )
}

export default App
