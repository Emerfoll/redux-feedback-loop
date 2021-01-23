import { useHistory } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { useState } from 'react';


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
            <h1>Comments</h1>
            <form onSubmit={nextSection}>
                <input
                    type="text"
                    placeholder="Feedback"
                    onChange={(event) => setComments(event.target.value)}
                    value={comments}
                />
                <button type="submit">Next</button>
            </form>
        </>
    )
}

export default Comments;