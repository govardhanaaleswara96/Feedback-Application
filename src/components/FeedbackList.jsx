
import Feedbackitem from "./FeedbackItem";
import { useContext } from "react";
import FeedbackContext from "../context/FeedbackContext";
import Spinner from "./Spinner";

const FeedbackList = () => {
const {feedback,isLoading} = useContext(FeedbackContext);
    if( !isLoading && !feedback || feedback.length === 0){
        return <p>No Feedback Yet</p>
    }
    return isLoading ? <Spinner/> : (
    <div className="feedback-list">
        {feedback.map((item)=>(
            <Feedbackitem key={item.id} item={item} 
             />
         ))}
    </div>
  )

}

export default FeedbackList
