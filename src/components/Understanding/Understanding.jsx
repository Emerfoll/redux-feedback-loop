import { useHistory } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { useState } from 'react';
import { Button } from '@material-ui/core';
import TextField from '@material-ui/core/TextField';
import NavBar from '../NavBar/NavBar';


function Understanding(params) {


    const history = useHistory();
    const dispatch = useDispatch();

    const [understanding, setUnderstanding] = useState('')

    const nextSection = () => {
        console.log('Next clicked');

        dispatch({ type: 'UNDERSTANDING_FEEDBACK_ENTRY', payload: understanding })
        history.push('/support')
    }

    return (
        <>
        <NavBar />
            <h1>How well are you understanding the content?</h1>
            <form onSubmit={nextSection}>
                <TextField
                    required
                    id="standard-number"
                    label="1 - 10"
                    type="number"
                    onChange={(event) => setUnderstanding(event.target.value)}
                    value={understanding}
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

export default Understanding;