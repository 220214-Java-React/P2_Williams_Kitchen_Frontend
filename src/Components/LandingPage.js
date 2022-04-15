import React, { Component, useState } from 'react'
import { useLocation } from 'react-router-dom'
import SearchBar from './Searchbar'
import Footer from './footer'
import Header from './header'

const LandingPage=(props)=>{

    const location = useLocation();
    const state = location.state
    
    const [user, setUser] = useState({})

    if (state.id !== 0) {
        console.log("user logged in")
    }
    


    return ( 
        <>
        <Header/>

        <article>
            {console.log(state)}
            <SearchBar/>
        </article>
        
        <Footer/>
        </>
    )
}
export default LandingPage