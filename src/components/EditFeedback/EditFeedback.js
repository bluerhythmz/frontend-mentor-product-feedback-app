import { useParams } from 'react-router-dom'
import Form from './Form/Form'
import GoBackButton from '../GoBackButton/GoBackButton'

const EditFeedback = ({ currentFeedback }) => {
  const params = useParams()
  
  return (
    <>
    <h1>Editing '{currentFeedback.title}'</h1>
    <GoBackButton />
    <Form feedbackTitle={currentFeedback.title} feedbackDescription={currentFeedback.description} />
    
    </>
  )
}

export default EditFeedback
