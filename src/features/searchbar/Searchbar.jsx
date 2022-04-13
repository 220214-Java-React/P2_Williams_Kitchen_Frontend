import React, { useState, useEffect } from 'react'
import axios, { Requests } from 'axios';
import Select from "react-select"



// TODO: figure out what's going on with .env files 
// TODO: figure out what's going on with api key

const SearchBar = () => {
   
   const [searchInput, setSearchInput] = useState("");
   const [multiSearchInput, setMultiSearchInput] = useState("");
   const [selectedOption, setSelectedOption] = useState(null);
   
   
   const mealTimes = [
      { value: "breakfast", label: " Breakfast" },
      { value: "snack", label: " Snack" },
      { value: "lunch", label: " Lunch" },
      { value: "dinner", label: " Dinner" },
      { value: "smoothie", label: " Smoothie" },
   ]

   const mealSugg = [
      { value: "chicken", label: "Chicken" },
      { value: "broccoli", label: "broccoli" },
      { value: "squash", label: "squash" },
      { value: "rice", label: "rice" },
      { value: "seaweed", label: "seaweed" },

   ]

      
   
   // function to send
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
            const request = await axios.get(``);
            console.log(request.data.results)

         } catch (err) {
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


                  <Select value={selectedOption} onChange={setSelectedOption} options={mealTimes}></Select>

                  <Select value={selectedOption} onChange={setSelectedOption} options={mealSugg} isMulti></Select>
                  
               </form>
               <div className="resultTable">

               </div>
            </div>
         </div>
         
      </>
   )
}

export default SearchBar;