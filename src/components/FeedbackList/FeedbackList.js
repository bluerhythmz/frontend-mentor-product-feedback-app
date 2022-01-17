import { useFeedback } from '../../contexts/FeedbackContext'
import Feedback from '../Feedback/Feedback'
import { Outlet } from 'react-router-dom'

const FeedbackList = () => {
  const { allFeedback } = useFeedback()
  /* const { productRequests } = data
  console.log(productRequests) */
  return (
  <>
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
