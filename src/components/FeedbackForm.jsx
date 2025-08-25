import React, { useState,useContext,useEffect } from 'react'
import Card from '../shared/Card'
import Button from '../shared/Button';
import RatingSelect from './RatingSelect';
import FeedbackContext from '../context/FeedbackContext';

function FeedbackForm({handleAdd}) {
    const {addFeedback,editFeedbackItem,updateFeedback} = useContext(FeedbackContext);
    const [text,setText] = useState('');
    const [btnDisabled,setBtnDisabled] = useState(true);
    const [msg,setMsg] = useState('');
    const [rating,setRating] = useState(10)
    const handleTextChange = (e)=>{
        const inputTxt = e.target.value;
        if(text === ""){
            setMsg("")
            setBtnDisabled(true)
        }
        else if(text !== "" && text.trim().length <= 10) {
            setMsg('Text should be more than 10 characters');
            setBtnDisabled(true)
        }
        else{
            setMsg('');
            setBtnDisabled(false)
        }
        setText(inputTxt);
    }
    const handleSubmit = (e)=>{
     e.preventDefault();
      const newFeedBack = {
        text:text,
        rating:rating
      }
      if(editFeedbackItem.edit === true){
        updateFeedback(editFeedbackItem.item.id,newFeedBack);
      }else{
      addFeedback(newFeedBack,);
      }
      setText("");
      setBtnDisabled(true)
    }
    useEffect(()=>{
    if(editFeedbackItem.edit === true){
    setBtnDisabled(false);
    setRating(editFeedbackItem.item.rating)
    setText(editFeedbackItem.item.text)     
    }
   
    },[editFeedbackItem])
  return (
    <Card>
        <form onSubmit={handleSubmit}>
            <h2>How would you rate your service with us ?</h2>
            <RatingSelect select={(rating)=>setRating(rating)} />
            <div className='input-group'>
             <input type='text' onChange={handleTextChange} placeholder='Write a review'  value={text} />
             <Button type='submit' isDisabled={btnDisabled} >Send</Button>
            </div>
            <div className='message'>
                <h4>{msg}</h4>
            </div>
        </form>
    </Card>
  )
}



export default FeedbackForm

