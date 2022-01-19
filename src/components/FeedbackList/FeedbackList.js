import { useFeedback } from '../../contexts/FeedbackContext'
import Feedback from '../Feedback/Feedback'
import { Outlet } from 'react-router-dom'
import FeedbackMenu from '../FeedbackMenu/FeedbackMenu'
import Header from './Header/Header'
import { useFilterByProperty } from '../../utils/useFilterByProperty'
import { useState } from 'react'

const FeedbackList = () => {
  const { allFeedback } = useFeedback()
  const [activeCategory, setActiveCategory] = useState("All")
  const categories = ["All", "UI", "UX", "Enhancement", "Bug", "Feature"]
  console.log(allFeedback)
  const handleClick = (name) => {
    setActiveCategory(name)
  }
  return (
  <>
  <Header categories={categories} handleClick={handleClick} />
  <FeedbackMenu />
    <ul>
      {
        useFilterByProperty("category", activeCategory).map(request => (
          <Feedback key={request.id} request={request}  />
        ))
      }
    </ul>
    <Outlet />
  </>
    
  )
}

export default FeedbackList
