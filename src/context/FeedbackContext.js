import {createContext,useState } from "react";
import {v4 as uuidv4} from "uuid"
import FeedbackData from "../data/FeedbackData";

const FeedbackContext = createContext();

export const FeedbackProvider = ({children})=>{
    const [feedback,setFeedback] = useState(FeedbackData);
    const [editFeedbackItem,setEditFeedbackItem]=useState({
        item:{},edit:false
    })

    // delete feedback
    const deleteFeedback = (id)=>{
        console.log("app",id);
        if(window.confirm('Are you sure you want to delete ?')){
            setFeedback(feedback.filter((item)=>item.id !== id))
        }
    }

    // add feedback
    const addFeedback = (newFeedBack)=>{
     newFeedBack.id = uuidv4();
     setFeedback([newFeedBack,...feedback]);
    }
    //edit feedback
    const editFeedback = (item)=>{
        setEditFeedbackItem({
            item:item,edit:true
        })
    }
    // update feedback
    const updateFeedback = (id,upItem)=>{
     setFeedback(feedback.map((item)=>
        item.id === id?{...item,...upItem}:item
     ))
    }

    return <FeedbackContext.Provider value={{
    feedback,
    editFeedbackItem,
    deleteFeedback,
    editFeedback,
    addFeedback,
    updateFeedback
    }}>
        {children}
    </FeedbackContext.Provider>

}

export default FeedbackContext;