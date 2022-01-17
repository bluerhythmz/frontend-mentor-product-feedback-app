import { Outlet } from 'react-router-dom'
import { useParams } from 'react-router-dom'
import Form from '../Form/Form'
import GoBackButton from '../GoBackButton/GoBackButton'

const EditFeedback = ({ currentFeedback }) => {
  const params = useParams()
  console.log(currentFeedback)
  return (
    <>
    <h1>EDIT</h1>
    <GoBackButton />
    <Form feedbackTitle={currentFeedback.title} feedbackDescription={currentFeedback.description} />
    
    </>
  )
}

export default EditFeedback
