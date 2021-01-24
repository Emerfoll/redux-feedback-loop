import { useHistory } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { useState } from 'react';
import { Button } from '@material-ui/core';
import TextField from '@material-ui/core/TextField';
import NavBar from '../NavBar/NavBar';


function Comments(params) {

    // setting variables to be used later
    const history = useHistory()
    const dispatch = useDispatch()

    const [comments, setComments] = useState('')

    // function that runs when the 'Next' button is clicked
    const nextSection = () => {
        console.log('Next clicked');

        // Alerts redux which section to update and what to update it with.
        dispatch({ type: 'COMMENTS_FEEDBACK_ENTRY', payload: comments })
        // Sends the user to the review page to check the info that was entered.
        history.push('/reviewFeedback')
    }

    return (
        <>
        <NavBar />
            <h1>Would you like to leave us a comments</h1>
            <form onSubmit={nextSection}>
                {/* Where the user inputs their feedback */}
                <TextField
                    type="text"
                    placeholder="Optional"
                    onChange={(event) => setComments(event.target.value)}
                    value={comments}
                />
                {/* Button that sends the user to the next section. */}
                <button
                    type="submit"
                    variant="contained"
                    className="nextBtn"
                >Next</button>
            </form>
        </>
    )
}

export default Comments;