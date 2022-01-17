import { useParams, useNavigate, useLocation } from "react-router-dom";
import Feedback from "../Feedback/Feedback";
import CommentsList from "../Comments/CommentsList/CommentsList";
import GoBackButton from "../GoBackButton/GoBackButton";
import Button from "../Button/Button";
import { useFeedback } from "../../contexts/FeedbackContext";

const FeedbackDetails = () => {
  const { currentFeedback } = useFeedback();
  const params = useParams();
  const location = useLocation();
  console.log(location);
  const navigate = useNavigate();
  const handleClick = () => navigate(`/edit`);
  return (
    <section>
      <GoBackButton />
      <Button label="Edit Feedback" handleClick={handleClick} />
      <Feedback request={currentFeedback} />
      <CommentsList comments={currentFeedback.comments} />
      
    </section>
  );
};

export default FeedbackDetails;
