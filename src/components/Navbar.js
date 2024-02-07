import React from 'react'
import {Link} from 'react-router-dom'
import './Navbar.css'
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import SearchIcon from '@mui/icons-material/Search';

const Navbar = () => {
  return (
    <nav className='navbar'>
       
        <h3 className='logo' ><ShoppingCartIcon/>upGrad E-Shop</h3>
        <div className="input-wrapper"><SearchIcon id="searchicon"/><input placeholder=""/></div>
        <div className='container'>
   
            <Link to='/Home'id='links'> Home</Link>
            <Link to='/AddProducts' id='links'> AddProducts</Link> 
            <Link to='/Login' id='links'> Login</Link>
        <Link to='/Signup' id='links'> Signup</Link>
        
</div>
    </nav>
  )
}

export default Navbar
