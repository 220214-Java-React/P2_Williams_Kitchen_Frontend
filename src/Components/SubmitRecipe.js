import React, { Component, useState } from 'react'
import Footer from './footer'
import UserHeader from './UserHeader'
import axios from 'axios';

export default function SubmitRecipe() {
    //const userIdRef = useRef()

    const [recipeTitle, setRecipeTitle] = useState("")
    const [recipeCulture, setRecipeCulture] = useState("")
    const [recipePrepHour, setRecipePrepHour] = useState("")
    const [recipePrepMinute, setRecipePrepMinute] = useState("")
    const [recipePrepSecond, setRecipePrepSecond] = useState("")
    const [recipePrepTime, setRecipePrepTime] = useState("")
    const [recipeCookHour, setRecipeCookHour] = useState("")
    const [recipeCookMinute, setRecipeCookMinute] = useState("")
    const [recipeCookSecond, setRecipeCookSecond] = useState("")
    const [recipeCookTime, setRecipeCookTime] = useState("")
    const [recipeIngredients, setRecipeIngredients] = useState("")
    const [ingredientOne, setIngredientOne] = useState("")
    const [ingredientTwo, setIngredientTwo] = useState("")
    const [ingredientThree, setIngredientThree] = useState("")
    const [recipeSteps, setRecipeSteps] = useState("")
 
    const buildTimeString = (hh, mm, ss) => {
        if (hh < 10) {
            hh = "0" + hh
        }
        if (mm < 10) {
            mm = "0" + mm
        }
        if (ss < 10) {
            ss = "0" + ss
        }
        return hh + " hours:" + mm + " Minutes:" + ss + " Seconds"
    }
    const getCoreIngredients = () => {
        try {
            let arr = recipeIngredients.split(";")
            if (arr.length < 3) {
                if (arr.length < 2) {
                    if (arr.length < 1) {
                        setIngredientOne(null)
                        setIngredientTwo(null)
                        setIngredientThree(null)
                    }else {
                        setIngredientOne(recipeIngredients.split(";")[0].split("-")[1])
                    }
                }else {
                    setIngredientOne(recipeIngredients.split(";")[0].split("-")[1])
                    setIngredientTwo(recipeIngredients.split(";")[1].split("-")[1])
                }
            }else{
                setIngredientOne(recipeIngredients.split(";")[0].split("-")[1])
                setIngredientTwo(recipeIngredients.split(";")[1].split("-")[1])
                setIngredientThree(recipeIngredients.split(";")[2].split("-")[1])
            } 
            
        }catch (e) {
            setIngredientOne(null)
            setIngredientTwo(null)
            setIngredientThree(null)
        }
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        setRecipePrepTime(buildTimeString(recipePrepHour,recipePrepMinute,recipePrepSecond))
        setRecipeCookTime(buildTimeString(recipeCookHour,recipeCookMinute,recipeCookSecond))

        try {
            getCoreIngredients()
            const recipe = {
                "recipeName":recipeTitle,
                "stepsList":recipeSteps,
                "prepTime":recipePrepTime,
                "cookTime":recipeCookTime,
                "ingredient1":ingredientOne,
                "ingredient2":ingredientTwo,
                "ingredient3":ingredientThree,
                "ingredientList":recipeIngredients,
                "cuisine":recipeCulture
            }

            console.log(recipe)
            axios.post("http://localhost:8080/recipe/create", recipe).then(response => console.log(response.JSON))
        } catch (er) {

        }

    }


    return (
        <>
            <UserHeader />

            <article id="submitRecipeFormDiv">
                <form id="recipeForm" onSubmit={handleSubmit}>

                    <div className="recipeField" id="recipeTitle">
                        <label for="titleInput">Title</label>
                        <input type="text" id="titleInput" name="titleInput" value={recipeTitle} onChange={(e) => setRecipeTitle(e.target.value)}/>
                    </div>

                    <div className="recipeField" id="recipeCulture">
                        <label for="cultureInput">Culture of origin</label>
                        <input type="text" id="cultureInput" name="cultureInput" value={recipeCulture} onChange={(e) => setRecipeCulture(e.target.value)}/>
                    </div>

                    <div className="recipeField" id="recipePrepTime">
                        <p>Prep Time</p>
                        <span>
                            <label for="prepTimeHours">HH:</label>
                            <input type="number" min="0" max="60" id="prepTimeHours" name="prepTimeHours" value={recipePrepHour} onChange={(e) => setRecipePrepHour(e.target.value)}></input>
                        </span>
                        <span>
                            <label for="prepTimeMinutes">MM:</label>
                            <input type="number" min="0" max="60" id="prepTimeMinutes" name="prepTimeMinutes" value={recipePrepMinute} onChange={(e) => setRecipePrepMinute(e.target.value)}></input>
                        </span>
                        <span>
                            <label for="prepTimeSeconds">SS:</label>
                            <input type="number" min="0" max="60" id="prepTimeSeconds" name="prepTimeSeconds" value={recipePrepSecond} onChange={(e) => setRecipePrepSecond(e.target.value)}></input>
                        </span>
                    </div>

                    <div className="recipeField" id="recipeCookTime">
                        <p>Cook Time</p>
                        <span>
                            <label for="cookTimeHours">HH:</label>
                            <input type="number" min="0" max="60" id="cookTimeHours" name="cookTimeHours" value={recipeCookHour} onChange={(e) => setRecipeCookHour(e.target.value)}></input>
                        </span>
                        <span>
                            <label for="cookTimeMinutes">MM:</label>
                            <input type="number" min="0" max="60" id="cookTimeMinutes" name="cookTimeMinutes" value={recipeCookMinute} onChange={(e) => setRecipeCookMinute(e.target.value)}></input>
                        </span>
                        <span>
                            <label for="cookTimeSeconds">SS:</label>
                            <input type="number" min="0" max="60" id="cookTimeSeconds" name="cookTimeSeconds" value={recipeCookSecond} onChange={(e) => setRecipeCookSecond(e.target.value)}></input>
                        </span>
                    </div>
                    
                    <div className="recipeField" id="recipeList">
                        <p>Ingredients List</p>
                        <textarea cols="75" rows="3" id="ingredientsListText" placeholder="2 lbs-chicken breast; 3/4 cup-soy sauce; etc;" value={recipeIngredients} onChange={(e) => setRecipeIngredients(e.target.value)}></textarea>
                    </div>
                    
                    <div className="recipeField" id="recipeSteps">
                        <p>Recipe Steps</p>
                        <textarea cols="75" rows="3" id="recipeStepsText" placeholder="1: enter step one; 2: enter step two; etc;"value={recipeSteps} onChange={(e) => setRecipeSteps(e.target.value)}></textarea>
                    </div>
                    
                    <button id="recipeSubmit"> Submit </button>
                </form>
            </article>

            <Footer />
        </>
    )
}