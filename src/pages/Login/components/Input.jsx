// import React from 'react'

export const Input = (attribute,handleChange) => {
console.log(attribute)
  return (
    <input 
    id={attribute.id}
    name={attribute.name} 
    type={attribute.type} 
    placeholder={attribute.placeholder} 
    onChange={(e)=>handleChange(e.target.name, e.currentTarget.value)}
    className='' />
  )
}
