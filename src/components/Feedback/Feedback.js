import { useNavigate } from "react-router-dom"
import { useFeedback } from "../../contexts/FeedbackContext"

const Feedback = ({ request }) => {
  const { category, comments, description, id, status, title, upvotes } = request 
  const navigate = useNavigate()
  const { handleClick } = useFeedback()
  return (
    <li onClick={() =>handleClick(id)}>
      <h2>{title}</h2>
      <p>{description}</p>
      <p>{category}</p>
      <p>{upvotes}</p>
      <p>{comments && comments.length}</p>
    </li>
  )
}

export default Feedback
