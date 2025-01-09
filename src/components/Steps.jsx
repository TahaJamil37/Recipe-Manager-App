import React from 'react'

export default function Steps({steps}) {
  return (
    <div>{steps?.map((item)=><li>{item}</li>)}</div>
  )
  
}
