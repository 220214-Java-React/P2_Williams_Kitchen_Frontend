import React, { Component, useState } from 'react'
import { useLocation } from 'react-router-dom'
import SearchBar from './Searchbar'
import Footer from './footer'
import Header from './header'
import UserHeader from './UserHeader'

const LandingPage=(props)=>{

    const location = useLocation();
    const state = location.state
    
    if (state !== null) {
        if (state.id !== 0) {
            console.log("user logged in")
        }
    }else {
        console.log("no user")
    }
    
    return ( 
        <>
        {state === null ? <Header/> : <UserHeader state={state}/>}

        <article>
            {console.log(state)}
            <SearchBar state={state}/>
        </article>
        
        <Footer/>
        </>
    )
}
export default LandingPage