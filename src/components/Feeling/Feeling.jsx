import { useHistory } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { useState } from 'react';


function Feeling(params) {

    const history = useHistory();
    const dispatch = useDispatch();

    const [feeling, setFeeling] = useState('')

    const nextSection = () => {
        console.log('Next clicked');

        dispatch({ type: 'FEEDBACK_ENTRY', payload: feeling })
        history.push('/understanding')
    }

    return (
        <>
            <h1>Feeling</h1>
            <form onSubmit={nextSection}>
                <input
                    type="text"
                    placeholder="Feedback"
                    onChange={(event) => setFeeling(event.target.value)}
                    value={feeling}
                />
                <button type="submit">Next</button>
            </form>
        </>
    )
}

export default Feeling;