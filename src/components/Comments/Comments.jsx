import { useHistory } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { useState } from 'react';
import { Button } from '@material-ui/core';
import TextField from '@material-ui/core/TextField';


function Comments(params) {

    const history = useHistory()
    const dispatch = useDispatch()

    const [comments, setComments] = useState('')

    const nextSection = () => {
        console.log('Next clicked');

        dispatch({ type: 'FEEDBACK_ENTRY', payload: comments })
        history.push('/reviewFeedback')
    }

    return (
        <>
            <h1>Would you like to leave us a comments</h1>
            <form onSubmit={nextSection}>
                <TextField
                    type="text"
                    placeholder="Optional"
                    onChange={(event) => setComments(event.target.value)}
                    value={comments}
                />
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