import axios from "axios";
import SearchBar from "../searchbar/Searchbar";


const API_KEY = `9973533`;


const instance = axios.create({
   baseURL: `www.themealdb.com/api/json/v2/${API_KEY}`,
})

export const requests = ({ searchInput, multiSearchInput }) => {
   const request = {

      getByName: `/search.php?s=${searchInput}`,
      getByFirstLetter: `/search.php?f=${searchInput}`,
      getSingleRandomMeal: `/random.php`,
      getTenRandomMeals: `/randomselection.php`,
      getAllMealCategories: `/categories.php`,
      getLatestMeals: `/latest.php`,
      listAllCategories: `/list.php?c=list`,
      listAllAreas: `/list.php?a=list`,
      listAllIngredients: `/list.php?i=list`,
      filterByMainIngredient: `/filter.php?i=${searchInput}`,
      filterByMultiIngredient: `/filter.php?i=${multiSearchInput}`,
      filterByCategory: `/filter.php?c=${searchInput}`,
      filterByArea: `/filter.php?a=${searchInput}`,
      mealImages: `/`
   }
}


export default instance