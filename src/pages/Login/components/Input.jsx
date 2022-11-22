// import React from 'react'

export const Input = ({id,name,type,placeholder,handleChange}) => {
  return (
    <input 
    id={id}
    name={name} 
    type={type} 
    placeholder={placeholder} 
    onChange={(e)=>handleChange(e.target.name, e.currentTarget.value)}
    className='' />
  )
}
