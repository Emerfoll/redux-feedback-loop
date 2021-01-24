import axios from "axios";
import { useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom'
import { Button } from '@material-ui/core';
import NavBar from '../NavBar/NavBar';



function ReviewFeedback(params) {

    // Variables to be used later
    const Swal = require('sweetalert2')
    const history = useHistory();

    const review = useSelector(store => store.feedbackReducer)
    console.log(review);

    // This is the function that runs when the submit feedback button is clicked.
    const submitFeedback = () => {
        console.log('Feedback Submitted!');

        // request to submit the data entered to the database
        axios.post('/feedback', review).then((response) => {
            console.log(response);
        }).catch((err) => {
            console.log(err);
        });
        // Sweet alert that lets the user know their info was submitted. Then sends them to the starting page.
        let timerInterval
        Swal.fire({
            title: 'Thank you, your feedback has been submitted!',
            html: 'Returning to start.',
            // How long the pop up stays till the user is redirected to the start page.
            timer: 2500,
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
            <NavBar />
            <h1>ReviewFeedback</h1>

            {/* displays the info that the user has entered so it can be reviewed before submitting. */}
            <p>Feelings: {review.feeling}</p>
            <p>Understanding: {review.understanding}</p>
            <p>Support: {review.support}</p>
            <p>Comments: {review.comments}</p>

            {/* clicking this button submits the info to the database */}
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