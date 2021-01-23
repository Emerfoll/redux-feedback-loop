import { useHistory } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { useState } from 'react';

function Understanding(params) {


    const history = useHistory();
    const dispatch = useDispatch();

    const [understanding, setUnderstanding] = useState('')

    const nextSection = () => {
        console.log('Next clicked');

        dispatch({ type: 'FEEDBACK_ENTRY', payload: understanding })
        history.push('/support')
    }

    return (
        <>
            <h1>Understanding</h1>
            <form onSubmit={nextSection}>
                <input
                    type="text"
                    placeholder="Feedback"
                    onChange={(event) => setUnderstanding(event.target.value)}
                    value={understanding}
                />
                <button type="submit">Next</button>
            </form>
        </>
    )
}

export default Understanding;