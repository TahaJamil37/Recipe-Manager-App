import React from 'react'
import { data, useParams } from 'react-router-dom'
import IngredientsList from './IngredientsList';
import Steps from './Steps';



export default function RecipeDetails({recipes}) {

    const id = useParams().id;
    const recipe= recipes?.find((data)=>data?.id==Number(id))
    
  return (

    <>

    {recipe?<div style={{ padding: "20px" }}>
      <h1>{recipe.title}</h1>
      <img
        src={recipe.image}
        alt={recipe.title}
        style={{
          width: "100%",
          maxWidth: "800px",
          borderRadius: "8px",
        }}
      />
      <p>{recipe.description}</p>
      <IngredientsList ingredients={recipe?.ingredients} />
      <Steps steps={recipe.steps}/>
    </div>
   
   :<p>no recipe found</p>}
    
    </>
    
  )
}
