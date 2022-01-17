import React from 'react'

const Button = ({ label, handleClick, type }) => {
  return (
    <button type={type} onClick={handleClick}>
      {label}
    </button>
  )
}

export default Button
