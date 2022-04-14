import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import SearchBar from './Searchbar'
const LandingPage=()=>{

    return ( 
        <>
        <div className="navhome">
        
        <ul className="home"><li> 
            < Link to="/">Home</Link></li>
            </ul>
        
        <ul className="navhomeReg">
           <li><Link to="/login">Login</Link></li>
           <>/</>
           <li><Link to ="/Register">Register</Link>
           </li>
        </ul>
        </div>
        <article>
            <SearchBar/>
        </article>
        
        <div className='footer'></div>
        </>
    )
}
export default LandingPage