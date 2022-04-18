import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import SearchBar from './Searchbar'
const LandingPage=()=>{

    return ( 
        <>
        <header className="navhome">
        
            <nav>
                <a><Link to="/">Home</Link></a>
                
                <a><Link to="/Submit">Submit Recipe</Link></a>
                
            </nav>
            
            <nav>
                <a><Link to="/login">Login</Link></a>
                <span>/</span>
                <a><Link to ="/Register">Register</Link></a>
            </nav>

        </header>

        <article>
            <SearchBar/>
        </article>
        
        <div className='footer'>
            <p>created by: Brett, William, Boualem, Chas, Nakisha</p>
        </div>
        </>
    )
}
export default LandingPage