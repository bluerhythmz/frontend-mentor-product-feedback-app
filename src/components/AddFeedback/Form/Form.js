import { useState } from "react";
import { useFeedback } from "../../../contexts/FeedbackContext";
import { useNavigate } from "react-router-dom";
import Button from "../../Button/Button";
import GoBackButton from "../../GoBackButton/GoBackButton";

const Form = () => {
  const [title, setTitle] = useState("");
  const [category, setCategory] = useState("");
  const [description, setDescription] = useState("");

  const { allFeedback, setAllFeedback } =
    useFeedback();
  const navigate = useNavigate();
  const getLastId = allFeedback[allFeedback.length - 1].id
  console.log(getLastId)

  const handleSubmit = (e) => {
    e.preventDefault();
    setAllFeedback(prev => {
      return [...prev, {id: getLastId + 1, title, description, upvotes: 0, comments: []}]
    })
  };
  const handleCancel = () => {
    setTitle("");
    setDescription("");
  };
  return (
    <section>
    <GoBackButton />
      <h1>Create New Feedback</h1>
      <form onSubmit={(e) => handleSubmit(e)}>
        <input
          type="text"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
        <input
          type="text"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
        />
        <Button type="submit" label="Add Feedback" />
        <Button type="" label="Cancel" handleClick={handleCancel} />
      </form>
    </section>
  );
};

export default Form;
