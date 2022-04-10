import React, { useState, useEffect } from 'react'
import axios from 'axios';


// TODO: figure out what's going on with .env files 
// TODO: figure out what's going on with api key

const SearchBar = () => {
   
   const [searchInput, setSearchInput] = useState("");


   const handleSubmit = (e) => {
      e.preventDefault();
      console.log("Form has been submitted, it's recipe time!!😋")
      // imported function to make diff calls for different searches
      // add search to local storage just in case
      setSearchInput("");
   }

   const handleInput = (e) => {
      setSearchInput(e.target.value);
      
   }

   useEffect(() => {
      
      async function getData() {
         try {
            const res = await axios.get(`www.themealdb.com/api/json/v1/1/search.php?s=Arrabiata`);
            console.log(res.data.results)
            
         } catch(err) {
            console.log(err)
         }
      }
      getData();
   }, [])
   


   return (

      <>
         <div className="body">                        
            <div className="main">
               <form onSubmit={handleSubmit}>
                  <label htmlFor="search input">What's for eating 😋 </label>
                  <input type="text" placeholder="Enter a food item" name={searchInput} value={searchInput} onChange={handleInput} autoFocus />
                  <input type="submit" value="Submit" />
                  
               </form>
            </div>
         </div>
      </>
   )
}

export default SearchBar;