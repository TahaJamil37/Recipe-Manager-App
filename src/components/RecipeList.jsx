import React from 'react'

import RecipeItem from "./RecipeItem";

export default function RecipeList({recipes}) {
  return (
   <>
     <h2 className="">Recipes </h2>
   {
    recipes.map((recipe)=><RecipeItem key={recipe?.id} id={recipe.id}
    title={recipe.title}
    description={recipe.description}
    image={recipe.image} />)
   }
   </>
  )
}
