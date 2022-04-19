import React, { useState, useEffect } from 'react'
import axios, { Requests } from 'axios';
import Select from "react-select"
import { Link, useLocation } from 'react-router-dom';



// TODO: figure out what's going on with .env files 
// TODO: figure out what's going on with api key

const SearchBar = () => {
   
   const location = useLocation();
   const user = location.state

   const [searchInput, setSearchInput] = useState("");
   const [multiSearchInput, setMultiSearchInput] = useState("");
   const [selectedOption, setSelectedOption] = useState(null);
   const [mealDBList, setMealDbList] = useState([])
   const [customMealList, setCustomMealList] = useState([])

   const mealSugg = [

      //meats
      { value: "chicken", label: "Chicken" },
      { value: "chicken_breast", label: "Chicken Breast" },
      { value: "beef", label: "Beef" },
      { value: "pork", label: "Pork" },
      { value: "pork_chops", label: "Pork Chops" },
      //vegies

      { value: "broccoli", label: "broccoli" },
      { value: "squash", label: "squash" },
      //fruits



      //carbs
      { value: "rice", label: "rice" },
      { value: "seaweed", label: "seaweed" },


      //expand in morning
   ]

   const tableItems = []
   const customTableItems = []

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
      // imported function to make diff calls for different searches
      // add search to local storage just in case
      const mealDbUrl = "https://www.themealdb.com/api/json/v2/9973533/filter.php?i="
      const localApiUrl = "http://localhost:8080/recipe"
      
      await fetch(mealDbUrl + searchString).then(resp => resp.json()).then(data => setMealDbList(data.meals)).then(console.log(mealDBList))
      await fetch(localApiUrl).then(resp => resp.json()).then(data => setCustomMealList(data)).then(console.log(customMealList))
      

      setSearchInput("");
      console.log(user)
   }

   const handleInput = (e) => {
      setSearchInput(e.target.value);
      
   }

   
   try {
      for (let i = 0; i < mealDBList.length; i++) {
         tableItems.push(
            <tr>
               <td><Link to="/Recipe" state={[user, mealDBList[i], true]}>{mealDBList[i].idMeal}</Link></td>
               <td><Link to="/Recipe" state={[user, mealDBList[i], true]}>{mealDBList[i].strMeal}</Link></td>
               <td><Link to="/Recipe" state={[user, mealDBList[i], true]}><img src={mealDBList[i].strMealThumb} width="50px"></img></Link></td>
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

   try {
      for (let i = 0; i < customMealList.length; i++) {
         customTableItems.push(
            <tr>
               <td><Link to="/Recipe" state={[user, customMealList[i], false]}>{customMealList[i].recipe_id}</Link></td>
               <td><Link to="/Recipe" state={[user, customMealList[i], false]}>{customMealList[i].recipe_title}</Link></td>
               <td><Link to="/Recipe" state={[user, customMealList[i], false]}><img src="https://via.placeholder.com/50" width="50px"></img></Link></td>
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
                  <Select value={selectedOption} onChange={setSelectedOption} options={mealSugg} isMulti></Select>
                  <input type="submit" value="Submit" />
               </form>

               <div id="mealDbTableContainer" className='tableContainer'>
                  <h2>Search Table</h2>
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

               <div id="customMealTableContainer" className='tableContainer'>
                  <h2>User Recipes</h2>
                  <table>
                     <thead>
                        <tr>
                           <th>meal Id</th>
                           <th>meal Title</th>
                           <th>meal Origin</th>
                        </tr>
                     </thead>
                     <tbody>
                        {customTableItems}
                     </tbody>
                  </table>
               </div>
            </div>

         </article>
      </>
   )
}






export default SearchBar;