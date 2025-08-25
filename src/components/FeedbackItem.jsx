import Card from '../shared/Card'
import { FaTimesCircle,FaEdit } from 'react-icons/fa'
import { useContext } from 'react'
import FeedbackContext from '../context/FeedbackContext'


function Feedbackitem({item}) {
    const {deleteFeedback, editFeedback} = useContext(FeedbackContext);
  return (
    <Card reverse={false}>
      <div className='num-display'>{item.rating}</div>
      <button className='close' onClick={()=>deleteFeedback(item.id)}> 
        <FaTimesCircle color='purple'  />
      </button>
        <button className="edit">
            <FaEdit onClick={()=>editFeedback(item)} color='purple'></FaEdit>
        </button>
      <div className='text-display' 
      >{item.text}</div>
    </Card>
  )
}


export default Feedbackitem
