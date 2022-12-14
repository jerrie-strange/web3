import React from 'react'
import './styles.css'
export const Input = ({type, name,id,placeholder}) => {
  return (
    <div>
    <input className='input' type={type} name={name} id={id} placeholder={placeholder}/>    
    </div>
  )
}
