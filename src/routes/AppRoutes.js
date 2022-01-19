import { useRoutes } from "react-router-dom";
import FeedbackList from "../components/FeedbackList/FeedbackList";
import FeedbackDetails from "../components/FeedbackDetails/FeedbackDetails";
import EditFeedback from "../components/EditFeedback/EditFeedback";
import { useFeedback } from "../contexts/FeedbackContext";
import AddFeedback from "../components/AddFeedback/AddFeedback";

const AppRoutes = () => {
  const { currentFeedback } = useFeedback()
  const routes = [
    { path: "/", element: <FeedbackList /> },
    {
      path: "/feedback/:id",
      element: <FeedbackDetails />,
    },
    { path: "edit", element: <EditFeedback currentFeedback={currentFeedback} /> },
    { path: "add", element: <AddFeedback /> }
  ];
  return useRoutes(routes);
};

export default AppRoutes;
