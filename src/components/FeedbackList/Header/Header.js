import { useState } from 'react'
import { Link } from 'react-router-dom'

const Header = ({ categories, handleClick }) => {
  
  return (
    <header>
      <article>
        <p>Roadmap</p>
        <Link to={'/roadmap'}>View</Link>
      </article>
      <article>
        {
          categories.map(category => (
            <button key={category} onClick={() => handleClick(category)} >{category}</button>
          ))
        }
      </article>
    </header>
  )
}

export default Header
