import React from 'react'
import { Link } from 'react-router-dom'

export default function ss({id,title,image}) {
  return (
    <div>

        <p > {title}</p>

        <Link to={`/recipe/${id}`}>  <img
        style={{
            width: "100%",
            height: "150px",
            objectFit: "cover",
            borderRadius: "9px",
            cursor:'pointer'
          }}
        src={image}
        alt={title}
       
        /> </Link>
       
 
    </div>
  )
}
