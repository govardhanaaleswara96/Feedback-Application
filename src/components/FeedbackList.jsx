
import Feedbackitem from "./FeedbackItem";
import { useContext } from "react";
import FeedbackContext from "../context/FeedbackContext";

const FeedbackList = () => {
const {feedback} = useContext(FeedbackContext);
    if(!feedback || feedback.length === 0){
        return <p>No Feedback Yet</p>
    }
//       return (

//     <div className="feedback-list">
//         <AnimatePresence>
//             {feedback.map((item)=>(
//             <motion.div 
//             key={item.id} 
//             initial={{opacity:0}}
//             animate={{opacity:1}}
//             exit={{opacity:0}}
//             >
//             <Feedbackitem key={item.id} item={item} 
//             handleDelete={(id)=>handleDelete(id)} />
//             </motion.div>
//          ))}
//         </AnimatePresence>
//     </div>
//   )

  return (
    <div className="feedback-list">
        {feedback.map((item)=>(
            <Feedbackitem key={item.id} item={item} 
             />
         ))}
    </div>
  )

}

export default FeedbackList
