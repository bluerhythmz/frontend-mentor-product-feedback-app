import React, { useState } from "react";
import { useFeedback } from "../../contexts/FeedbackContext";
import Feedback from "../Feedback/Feedback";
import GoBackButton from "../GoBackButton/GoBackButton";

const Roadmap = () => {
  const [activeStatus, setActiveStatus] = useState('in-progress')
  const { allFeedback } = useFeedback()
  const statusNames = ["Planned", "In-Progress", "Live"]
  const filteredByStatus = allFeedback.filter(feedback => feedback.status.toLowerCase() === activeStatus.toLowerCase())
  
  const getLength = (status) => {
   return allFeedback.filter(feedback => feedback.status.toLowerCase() === status.toLowerCase()).length
  }
  const handleClick = (name) => {
    setActiveStatus(name)
  }
  return (
  <section>
    <div>
    <GoBackButton />
      {
        statusNames.map(name => (
          <div key={name} onClick={() => handleClick(name)} >{name} ({getLength(name)})</div>
        ))
      }
      {
        filteredByStatus.map(feedback => (
          <Feedback key={feedback.id} request={feedback} />
        ))
      }
    </div>
  </section>
  )
};

export default Roadmap;
