import React, { useState, useEffect } from 'react'
import axios, { Requests } from 'axios';
import Select from "react-select"
import './Searchbar.css';


// TODO: figure out what's going on with .env files 
// TODO: figure out what's going on with api key

const SearchBar = () => {
   
   const [searchInput, setSearchInput] = useState("");
   const [multiSearchInput, setMultiSearchInput] = useState("");
   const [selectedOption, setSelectedOption] = useState(null);
   const [list, setlist] = useState([])
   const [favorite, setFavorite] = useState(false);

   const mealSugg = [
      { value: "chicken", label: "Chicken" },
      { value: "chicken_breast", label: "Chicken Breast" },
      { value: "beef", label: "Beef" },
      { value: "pork", label: "Pork" },
      { value: "pork_chops", label: "Pork Chops" },
      

      { value: "broccoli", label: "broccoli" },
      { value: "squash", label: "squash" },
      { value: "rice", label: "rice" },
      { value: "seaweed", label: "seaweed" },
   ]

   const tableItems = []
      
   
   // function to send
   async function handleSubmit (e) {
      e.preventDefault();
      //console.log(selectedOption)
      let searchString = ""
      if (selectedOption.length !== 0) {
         for(let i = 0; i < selectedOption.length; i++ ) {
            if (i === selectedOption.length - 1) {
               searchString += selectedOption[i].value
            }else {
               searchString += selectedOption[i].value + ","
            }
         }
      } else {
         searchString = searchInput
      }
      
      console.log("Form has been submitted, it's recipe time!!😋" +  searchString)
      // imported function to make diff calls for different searches
      // add search to local storage just in case
      const mealDbUrl = "https://www.themealdb.com/api/json/v2/9973533/filter.php?i="
      console.log(mealDbUrl + searchString)
      
      await fetch(mealDbUrl + searchString).then(resp => resp.json()).then(data => setlist(data.meals)).then(console.log(list))
      
      
      

      console.log(tableItems)
      setSearchInput("");
   }

   const handleInput = (e) => {
      setSearchInput(e.target.value);
      
   }



   
   try {
      for (let i = 0; i < list.length; i++) {
         tableItems.push(
            <tr>
               <td>{list[i].idMeal}</td>
               <td>{list[i].strMeal}</td>
               <td><img src={list[i].strMealThumb} width="50px"></img></td>
               <td><button 
               type="button" 
               class="button"
               key={i}
               className={i == favorite ? "on" : "off"} 
               onClick={() => setFavorite(i)}
               >
                  <span className="star">&#9733;</span>
                  </button></td>
            </tr>
         )
      }
   }catch (e) {
      console.log(e)
      tableItems.push(
         <tr>
            <td>0</td>
            <td>no meals to display</td>
            <td><img src="https://via.placeholder.com/50" width="50px"></img></td>
         </tr>
      )
   }

   return (

      <>
         <article className="searchBody">
            <div className="main">

               <form onSubmit={handleSubmit}>
                  <label htmlFor="search input">What's for eating 😋</label>
                  <input type="text" placeholder="Enter a food item" name={searchInput} value={searchInput} onChange={handleInput} autoFocus />
                  <Select value={selectedOption} onChange={setSelectedOption} options={mealSugg} isMulti></Select>
                  <input type="submit" value="Submit" />
               </form>

               <div className="resultTable">
                  <table>
                     <thead>
                        <tr>
                           <th>meal Id</th>
                           <th>meal Title</th>
                           <th>image of meal</th>
                        </tr>
                     </thead>
                     <tbody>
                        {tableItems}
                     </tbody>
                  </table>
               </div>
            </div>
         </article>
      </>
   )
}

export default SearchBar;