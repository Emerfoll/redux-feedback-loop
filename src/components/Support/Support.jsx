import { useHistory } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { useState } from 'react';
import { Button } from '@material-ui/core';
import TextField from '@material-ui/core/TextField';

function Support(params) {

    const history = useHistory()
    const dispatch = useDispatch()

    const [support, setSupport] = useState('')

    const nextSection = () => {
        console.log('Next clicked');

        dispatch({ type: 'SUPPORT_FEEDBACK_ENTRY', payload: support })
        history.push('/comments')
    }

    return (
        <>
            <h1>How well are you being support?</h1>
            <form onSubmit={nextSection}>
            <TextField
                    id="standard-number"
                    label="1 - 10"
                    type="number"
                    onChange={(event) => setSupport(event.target.value)}
                    value={support}
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

export default Support;