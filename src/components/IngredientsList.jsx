import React from 'react'

export default function IngredientsList({ingredients}) {
  return (
    <div>{ingredients?.map((item)=><li>{item}</li>)}</div>
  )
}
