import ReactPlayer from "react-player";
import Header from "./header";
import Footer from "./footer";
import UserHeader from "./UserHeader";
import { useLocation } from "react-router-dom";
import { useEffect, useState } from "react";

export default function RecipeUser(props) {
    const location = useLocation()
    const state = location.state
    
    const user = null;
    const recipe = state[1];
    const isMealDb = state[2]

    const mealIngredientsList = []
    const [recipeDetails, setDetails] = useState(null)
    console.log(state)


    async function getMealData(id) {
    //    await fetch("www.themealdb.com/api/json/v2/9973533/lookup.php?i=" + id).then(response => console.log(response.json.meal))
        await fetch("https://www.themealdb.com/api/json/v1/1/search.php?s=" + id).then(response => response.json()).then(data => setDetails(data.meals[0]))
    }

    if (user == null) {
        console.log(null)
    } else {
        const user = state[0]
        console.log(user)
    }

    console.log(recipe)
    useEffect(() =>{
        if (recipe !== null) {
            if(isMealDb == true) {
                getMealData(recipe.strMeal, true)
            }
    }}, [])



    useEffect(() =>{
        console.log(recipeDetails)    
    }, [recipeDetails])

    
    return (
        <>
            {user == null ? <Header /> : <UserHeader/>}

            {isMealDb == true ? (
            <article>
                <div id="mealDetails">
                    <img id="mealImg" src={recipeDetails.strMealThumb} width="300px"/>
                    <h1 id="recipeName">{recipeDetails.strMeal}</h1>
                    <p id="mealTimeStr">Prep Time: <span id="prepTime">{}</span> Cook Time: <span id="cookTime">{}</span></p>
                    <p>This meal originates from: <span id="meal Culture">{recipeDetails.strArea}</span></p>
                </div>

                <div id="ingredientsList">
                    <h3>Ingredients</h3>
                    <ul>
                        {mealIngredientsList}
                    </ul>
                </div>

                <div id="stepsList">
                    <h3>Instructions</h3>
                    <p id="instructions">{recipeDetails.strInstructions}</p>
                </div>
            
                <div id="bonusMaterial">
                    <ReactPlayer url={recipeDetails.strYoutube} />
                    <a href={recipeDetails.strSource} target="new">read more</a>
                </div>


            </article>
        ) : <CustomMeal/>}

            <Footer />
        
        </>
    )
}



function MealDb(recipe) {

   


    return 
}

function CustomMeal(recipe) {

    const mealIngredientsList = []
    return (
        <article>
            <div id="mealDetails">
                <h1 id="recipeName">{}</h1>
                <p id="mealTimeStr">Prep Time: <span id="prepTime">{}</span> Cook Time: <span id="cookTime">{}</span></p>
                <p>This meal originates from: <span id="meal Culture">{}</span></p>
            </div>

            <div id="ingredientsList">
                <h3>Ingredients</h3>
                <ul>
                    {mealIngredientsList}
                </ul>
            </div>

            <div id="stepsList">
                <h3>Instructions</h3>
                <p id="instructions">{}</p>
            </div>

        </article>
    )
}




// "idMeal": "52993",
//             "strMeal": "Honey Balsamic Chicken with Crispy Broccoli & Potatoes",
//             "strDrinkAlternate": null,
//             "strCategory": "Chicken",
//             "strArea": "American",
//             "strInstructions": "2 Servings\r\n\r\n1. Preheat oven to 425 degrees. Wash and dry all produce. Cut potatoes into 1/2-inch-thick wedges. Toss on one side of a baking sheet with a drizzle of oil, salt, and pepper. (For 4 servings, spread potatoes out across entire sheet.) Roast on top rack for 5 minutes (we'll add the broccoli then). \r\n\r\n2. Meanwhile, cut broccoli florets into bite-size pieces, if necessary. Peel and finely chop garlic. In a small microwave-safe bowl, combine 1 TBSP olive oil (2 TBSP for 4 servings) and half the garlic. Microwave until garlic sizzles, 30 seconds. \r\n\r\n3. Once potatoes have roasted 5 minutes, remove sheet from oven and add broccoli to empty side; carefully toss with garlic oil, salt, and pepper. (For 4 servings, add broccoli to a second sheet.) Continue roasting until potatoes and broccoli are browned and crispy, 15-20 minutes more. \r\n\r\n4. While veggies roast, pat chicken dry with paper towels; season all over with salt and pepper. Heat a drizzle of oil in a large pan over medium-high heat. Add chicken and cook until browned and cooked through, 5-6 minutes per side. (If chicken browns too quickly, reduce heat to medium.) Turn off heat; set chicken aside to rest. Wash out pan. \r\n\r\n5. Heat pan used for chicken over medium-high heat. Add a drizzle of oil and remaining garlic; cook until fragrant, 30 seconds. Stir in vinegar, honey, stock concentrate, and 1/4 cup water (1/3 cup for 4 servings). Simmer until thick and glossy, 2-3 minutes. Remove from heat and stir in 1 TBSP butter (2 TBSP for 4). Season with salt and pepper. \r\n\r\n6. Return chicken to pan and turn to coat in glaze. Divide chicken, broccoli, and potatoes between plates. Spoon any remaining glaze over chicken and serve. ",
//             "strMealThumb": "https://www.themealdb.com/images/media/meals/kvbotn1581012881.jpg",
//             "strTags": null,
//             "strYoutube": "",
//             "strIngredient1": "Potatoes",
//             "strIngredient2": "Broccoli",
//             "strIngredient3": "Garlic",
//             "strIngredient4": "Chicken Breast",
//             "strIngredient5": "Balsamic Vinegar",
//             "strIngredient6": "Honey",
//             "strIngredient7": "Chicken Stock",
//             "strIngredient8": "Butter",
//             "strIngredient9": "Vegetable Oil",
//             "strIngredient10": "Olive Oil",
//             "strIngredient11": "",
//             "strIngredient12": "",
//             "strIngredient13": "",
//             "strIngredient14": "",
//             "strIngredient15": "",
//             "strIngredient16": "",
//             "strIngredient17": "",
//             "strIngredient18": "",
//             "strIngredient19": "",
//             "strIngredient20": "",
//             "strMeasure1": "5",
//             "strMeasure2": "1",
//             "strMeasure3": "2 cloves",
//             "strMeasure4": "2",
//             "strMeasure5": " ",
//             "strMeasure6": " ",
//             "strMeasure7": " ",
//             "strMeasure8": "1 tbsp",
//             "strMeasure9": "1 tbsp",
//             "strMeasure10": "1 tbsp",
//             "strMeasure11": " ",
//             "strMeasure12": " ",
//             "strMeasure13": " ",
//             "strMeasure14": " ",
//             "strMeasure15": " ",
//             "strMeasure16": " ",
//             "strMeasure17": " ",
//             "strMeasure18": " ",
//             "strMeasure19": " ",
//             "strMeasure20": " ",
//             "strSource": "",
//             "strImageSource": null,
//             "strCreativeCommonsConfirmed": null,
//             "dateModified": null