import React from 'react'
import { Link } from 'react-router-dom'

const Header = () => {
  return (
    <header>
      <article>
        <p>Roadmap</p>
        <Link to={'/roadmap'}>View</Link>
      </article>
    </header>
  )
}

export default Header
