import {createContext,useState,useEffect } from "react";

const FeedbackContext = createContext();

export const FeedbackProvider = ({children})=>{
    const [feedback,setFeedback] = useState([]);
    const [isLoading,setIsLoading] = useState(true);
    const [editFeedbackItem,setEditFeedbackItem]=useState({
        item:{},edit:false
    })

    // delete feedback
    const deleteFeedback = async (id)=>{
        console.log("app",id);
        if(window.confirm('Are you sure you want to delete ?')){
            await fetch(`/feedback/${id}`,{
                method:'DELETE'
            })
            setFeedback(feedback.filter((item)=>item.id !== id))
        }
    }
    // add feedback
    const addFeedback = async (newFeedBack)=>{
    const response = await fetch(`/feedback`,{
        method:'POST',
        headers:{
            'Content-Type':'application/json',
        },
        body:JSON.stringify(newFeedBack)
    })
    const data = await response.json();
     setFeedback([data,...feedback]);
    }
    //edit feedback
    const editFeedback = (item)=>{
        setEditFeedbackItem({
            item:item,edit:true
        })
    }
    // update feedback
    const updateFeedback = async (id,upItem)=>{
    const response = await fetch(`/feedback/${id}`,{
        method:'PUT',
        headers:{
            'Content-Type':'application/json',
        },
        body:JSON.stringify(upItem)
    })
    const data = await response.json();
     setFeedback(feedback.map((item)=>
        item.id === id?{...item,...data}:item
     ))
    }

    useEffect(()=>{
    console.log("123")
    fetchFeedback();
    },[],1000)

    const fetchFeedback = async ()=>{
    const response = await fetch(`/feedback?_sort=id&_order=desc`)
        const data = await response.json();
        console.log("data",data);
        setFeedback(data);
        setIsLoading(false);
    }
 
    return <FeedbackContext.Provider value={{
    feedback,
    editFeedbackItem,
    isLoading,
    deleteFeedback,
    editFeedback,
    addFeedback,
    updateFeedback
    }}>
        {children}
    </FeedbackContext.Provider>

}

export default FeedbackContext;