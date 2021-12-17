import React from "react";
import RecipeConstruct from "./RecipeConstruct";

function RecipeList({recipes, deleteRecipe}) {
  //Return an element with a table, the headers are hard-named labels and the body is a render.
  return (
    <div className="recipe-list">
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Cuisine</th>
            <th>Photo</th>
            <th>Ingredients</th>
            <th>Preparation</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          <RecipeConstruct recipes={recipes} deleteRecipe={deleteRecipe}/>
        </tbody>
      </table>
    </div>
  );
}

export default RecipeList;
