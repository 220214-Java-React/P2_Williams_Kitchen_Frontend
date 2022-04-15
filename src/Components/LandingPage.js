import React, { Component } from 'react'

import SearchBar from './Searchbar'
import Footer from './footer'
import Header from './header'
const LandingPage=()=>{

   

    return ( 
        <>
        <Header/>

        <article>
            <SearchBar/>
        </article>
        
        <Footer/>
        </>
    )
}
export default LandingPage