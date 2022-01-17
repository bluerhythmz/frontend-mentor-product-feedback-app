import { useState } from 'react'
import { useFeedback } from '../../contexts/FeedbackContext'
import { useNavigate } from 'react-router-dom'
import Button from '../Button/Button'

const Form = ({ feedbackTitle, feedbackDescription }) => {
  const [title, setTitle] = useState(feedbackTitle)
  const [category, setCategory] = useState('')
  const [description, setDescription] = useState(feedbackDescription)

  const { currentFeedback, setCurrentFeedback, allFeedback, setAllFeedback } = useFeedback()
  const navigate = useNavigate()

  const handleSubmit = (e) => {
    e.preventDefault()
    /* setCurrentFeedback(prev => {
      return {...prev, title, description}
    }) */
  }
  const handleCancel = () => {
    setTitle(feedbackTitle)
    setDescription(feedbackDescription)
  }
  const handleDelete = () => {
    const newData = allFeedback.filter(feedback => feedback.id !== currentFeedback.id)
    setAllFeedback(newData)
    navigate('/')
  }
  return (
    <form onSubmit={(e) => handleSubmit(e)}>
      <input type="text" value={title} onChange={(e) => setTitle(e.target.value)} />
      <input type="text" value={description} onChange={(e) => setDescription(e.target.value)} />
      <Button type="submit" label="Save Changes" />
      <Button type="" label="Cancel" handleClick={handleCancel} />
      <Button type="" label="Delete" handleClick={handleDelete} />
    </form>
  )
}

export default Form
