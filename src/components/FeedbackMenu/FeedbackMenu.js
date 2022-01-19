import React from 'react'
import Button from '../Button/Button'
import { useNavigate } from 'react-router-dom'

const FeedbackMenu = () => {
  const navigate = useNavigate()
  const handleClick = () => {
    navigate('/add')
  } 
  return (
    <section>
      <Button label="Add Feedback" handleClick={handleClick}/>
    </section>
  )
}

export default FeedbackMenu
