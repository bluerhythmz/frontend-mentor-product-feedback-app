import { useRoutes } from "react-router-dom";
import FeedbackList from "../components/FeedbackList/FeedbackList";
import FeedbackDetails from "../components/FeedbackDetails/FeedbackDetails";
import EditFeedback from "../components/EditFeedback/EditFeedback";
import { useFeedback } from "../contexts/FeedbackContext";
import AddFeedback from "../components/AddFeedback/AddFeedback";
import Roadmap from "../components/Roadmap/Roadmap";

const AppRoutes = () => {
  const { currentFeedback } = useFeedback()
  const routes = [
    { path: "/", element: <FeedbackList /> },
    {
      path: "/feedback/:id",
      element: <FeedbackDetails />,
    },
    { path: "edit", element: <EditFeedback currentFeedback={currentFeedback} /> },
    { path: "add", element: <AddFeedback /> },
    { path: "roadmap", element: <Roadmap /> },
  ];
  return useRoutes(routes);
};

export default AppRoutes;
