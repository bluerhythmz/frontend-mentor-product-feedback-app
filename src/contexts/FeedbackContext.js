import React, { useContext, useState, useEffect } from 'react'
import data from '../data.json'
import { useNavigate } from 'react-router-dom'

const FeedbackContext = React.createContext()

export function useFeedback() {
  return useContext(FeedbackContext)
}

export function FeedbackProvider({ children }) {
  const [currentFeedback, setCurrentFeedback] = useState({})
  const [allFeedback, setAllFeedback] = useState(data.productRequests)
  const navigate = useNavigate()

  const getCurrentFeedback = (id) => {
    const { productRequests } = data
    const selectedFeedback = productRequests.find(request => request.id == id)
    return selectedFeedback
  }

  const handleClick = (id) => {
    const { productRequests } = data
    const selectedFeedback = productRequests.find(request => request.id == id)
    setCurrentFeedback(selectedFeedback)
    navigate(`/feedback/${id}`)
  }
 

  const value = {
    data,
    allFeedback,
    setAllFeedback,
    currentFeedback,
    setCurrentFeedback,
    getCurrentFeedback,
    handleClick
  }

  return (
    <FeedbackContext.Provider value={value} >
      {children}
    </FeedbackContext.Provider>
  )
}

export default FeedbackProvider
