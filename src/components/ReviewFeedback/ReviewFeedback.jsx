import { axios } from "axios";
import { useSelector } from 'react-redux';


function ReviewFeedback(params) {

    const review = useSelector(store => store.feedbackReducer)


    const submitFeedback = () => {
        console.log('Feedback Submitted!');
    }



    return (
        <>
            <h1>ReviewFeedback</h1>

            {review.map((entry, i) =>
                <p key={i}>{entry}</p>)}



            <button onClick={submitFeedback}>Submit Feedback</button>
        </>
    )
}

export default ReviewFeedback;