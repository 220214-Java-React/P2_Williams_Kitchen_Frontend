import React, { Component, useState } from 'react'
import { Link } from 'react-router-dom'
import Footer from './footer'
import Header from './header'
import UserHeader from './UserHeader'


export default function SubmitRecipe() {
    //const userIdRef = useRef()

    const [recipeTitle, setRecipeTitle] = useState("")
    const [recipeCulture, setRecipeCulture] = useState("")
    const [recipePrepTime, setRecipePrepTime] = useState("")
    const [recipeCookTime, setRecipeCookTime] = useState("")
    const [recipeIngredients, setRecipeIngredients] = useState("")
    const [recipeSteps, setRecipeSteps] = useState("")

    const getPrepTime = () => {

    }

    
    const getCookTime = () => {

    }


    return (
        <>
            <UserHeader />

            <article id="submitRecipeFormDiv">
                <form id="recipeForm">

                    <div className="recipeField" id="recipeTitle">
                        <label for="titleInput">Title</label>
                        <input type="text" id="titleInput" name="titleInput"/>
                    </div>

                    <div className="recipeField" id="recipeCulture">
                        <label for="cultureInput">Culture of origin</label>
                        <input type="text" id="cultureInput" name="cultureInput" />
                    </div>

                    <div className="recipeField" id="recipePrepTime">
                        <p>Prep Time</p>
                        <span>
                            <label for="prepTimeHours">HH:</label>
                            <input type="number" min="0" max="60" id="prepTimeHours" name="prepTimeHours"></input>
                        </span>
                        <span>
                            <label for="prepTimeMinutes">MM:</label>
                            <input type="number" min="0" max="60" id="prepTimeMinutes" name="prepTimeMinutes"></input>
                        </span>
                        <span>
                            <label for="prepTimeSeconds">SS:</label>
                            <input type="number" min="0" max="60" id="prepTimeSeconds" name="prepTimeSeconds "></input>
                        </span>
                    </div>

                    <div className="recipeField" id="recipeCookTime">
                        <p>Cook Time</p>
                        <span>
                            <label for="cookTimeHours">HH:</label>
                            <input type="number" min="0" max="60" id="cookTimeHours" name="cookTimeHours"></input>
                        </span>
                        <span>
                            <label for="cookTimeMinutes">MM:</label>
                            <input type="number" min="0" max="60" id="cookTimeMinutes" name="cookTimeMinutes"></input>
                        </span>
                        <span>
                            <label for="cookTimeSeconds">SS:</label>
                            <input type="number" min="0" max="60" id="cookTimeSeconds" name="cookTimeSeconds "></input>
                        </span>
                    </div>
                    
                    <div className="recipeField" id="recipeList">
                        <p>Ingredients List</p>
                        <textarea cols="75" rows="3" id="ingredientsListText" placeholder="2 lbs-chicken breast; 3/4 cup-soy sauce; etc;"></textarea>
                    </div>
                    
                    <div className="recipeField" id="recipeSteps">
                        <p>Recipe Steps</p>
                        <textarea cols="75" rows="3" id="recipeStepsText" placeholder="1: enter step one; 2: enter step two; etc;"></textarea>
                    </div>
                    
                    <button id="recipeSubmit"> Submit </button>
                </form>
            </article>

            <Footer />
        </>
    )
}