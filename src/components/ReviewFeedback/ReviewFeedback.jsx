import axios from "axios";
import { useSelector } from 'react-redux';


function ReviewFeedback(params) {

    const review = useSelector(store => store.feedbackReducer)


    const submitFeedback = () => {
        console.log('Feedback Submitted!');
        console.log(review);

        axios.post('/feedback', review).then((response) => {
            console.log(response);
        }).catch((err) => {
            console.log(err);
        })
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