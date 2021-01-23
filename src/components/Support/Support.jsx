import { useHistory } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { useState } from 'react';

function Support(params) {

    const history = useHistory()
    const dispatch = useDispatch()

    const [support, setSupport] = useState('')

    const nextSection = () => {
        console.log('Next clicked');

        dispatch({ type: 'FEEDBACK_ENTRY', payload: support })
        history.push('/comments')
    }

    return (
        <>
            <h1>Support</h1>
            <form onSubmit={nextSection}>
                <input
                    type="text"
                    placeholder="Feedback"
                    onChange={(event) => setSupport(event.target.value)}
                    value={support}
                />
                <button type="submit">Next</button>
            </form>
        </>
    )
}

export default Support;