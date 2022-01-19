import { useFeedback } from "../contexts/FeedbackContext"

export const useFilterByProperty = (property, name) => {
  const { allFeedback } = useFeedback()
  if (name === "All") return allFeedback
  const arr = allFeedback.filter(feedback => feedback[property].toLowerCase() === name.toLowerCase())
  return arr
}
