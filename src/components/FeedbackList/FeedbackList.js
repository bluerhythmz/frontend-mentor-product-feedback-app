import { useFeedback } from '../../contexts/FeedbackContext'
import Feedback from '../Feedback/Feedback'
import { Outlet } from 'react-router-dom'
import FeedbackMenu from '../FeedbackMenu/FeedbackMenu'

const FeedbackList = () => {
  const { allFeedback } = useFeedback()
  console.log(allFeedback)
  return (
  <>
  <FeedbackMenu />
    <ul>
      {
        allFeedback.map(request => (
          <Feedback key={request.id} request={request}  />
        ))
      }
    </ul>
    <Outlet />
  </>
    
  )
}

export default FeedbackList
