import React, { useState } from "react";
import RecipeCreate from "./RecipeCreate";
import RecipeList from "./RecipeList";
import RecipeData from "./RecipeData";
import "./App.css";

function App() {
  //Create recipe state variables
  const [recipes, setRecipes] = useState(RecipeData);

  //Two functions to add and delete recipes
  const addRecipe = (newRecipe) => {
    setRecipes([ ...recipes, newRecipe ]);
  };

  function deleteRecipe(recipeIndex) {
    setRecipes(recipes.filter((recipe, index) => index !== recipeIndex));
  };

  //Return the rendered page using components
  return (
    <div className="App">
      <header><h1>Delicious Food Recipes</h1></header>
      <RecipeList recipes={recipes} deleteRecipe={deleteRecipe}/>
      <RecipeCreate addRecipe={addRecipe} />
    </div>
  );
}

export default App;
