import React from 'react';
import "./styles.css"


export const Button = ({value,color}) => {
  return (
    <div>
        <button className={`btn-${color}`}>{value}</button>
    </div>
  )
}
