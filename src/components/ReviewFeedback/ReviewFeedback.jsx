import axios from "axios";
import { useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom'
import { Button } from '@material-ui/core';



function ReviewFeedback(params) {

    const Swal = require('sweetalert2')
    const history = useHistory();

    const review = useSelector(store => store.feedbackReducer)


    const submitFeedback = () => {
        console.log('Feedback Submitted!');
        console.log(review);

        axios.post('/feedback', review).then((response) => {
            console.log(response);
        }).catch((err) => {
            console.log(err);
        });
        let timerInterval
        Swal.fire({
            title: 'Thank you, your feedback has been submitted!',
            html: 'Returning to start.',
            timer: 3500,
            timerProgressBar: true,
            didOpen: () => {
                Swal.showLoading()
                timerInterval = setInterval(() => {
                    const content = Swal.getContent()
                    if (content) {
                        const b = content.querySelector('b')
                        if (b) {
                            b.textContent = Swal.getTimerLeft()
                        }
                    }
                }, 100)
            },
            willClose: () => {
                clearInterval(timerInterval)
            }
        }).then((result) => {
            /* Read more about handling dismissals below */
            if (result.dismiss === Swal.DismissReason.timer) {
                history.push('/');
            }
        })
    }



    return (
        <>
            <h1>ReviewFeedback</h1>

            <p>Feelings: {review[0]}</p>
            <p>Understanding: {review[1]}</p>
            <p>Support: {review[2]}</p>
            <p>Comments: {review[3]}</p>

            <button 
                type="submit" 
                variant="contained" 
                className="nextBtn"
                onClick={submitFeedback}
                >Submit Feedback</button>
        </>
    )
}

export default ReviewFeedback;