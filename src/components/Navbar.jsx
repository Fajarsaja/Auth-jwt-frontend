import React from 'react'
import logo from "../logo.png"
import { useNavigate } from 'react-router-dom'
import axios from 'axios'

const Navbar = () => {
    const navigate =useNavigate()


    const Logout = async() => {
        try {
            await axios.delete('http://localhost:5001/logout')
            navigate("/")
        } catch (error) {
            console.log(error);
            
        }
    }


  return (
    <nav className="navbar is-fixed-top has-shadow" role="navigation" aria-label="main navigation">
      <div className="navbar-brand">
        <a className="navbar-item" >
          <img src={logo} 
             width="60" 
             height="60"
             alt='logo'/>
        </a>
    
        <a role="button" className="navbar-burger burger" aria-label="menu" aria-expanded="false" data-target="navbarBasicExample">
          <span aria-hidden="true"></span>
          <span aria-hidden="true"></span>
          <span aria-hidden="true"></span>
        </a>
      </div>
    
      <div id="navbarBasicExample" className="navbar-menu">
        <div className="navbar-start">
          <a href='/' className="navbar-item">
            Home
          </a>
          </div>
        </div>
    
        <div className="navbar-end">
          <div className="navbar-item">
            <div className="buttons">
              <button onClick={Logout} className="button is-light">
                Log out
              </button>
            </div>
          </div>
        </div>
    </nav>
  )
}

export default Navbar
