import { useHistory } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { useState } from 'react';
import { Button } from '@material-ui/core';
import TextField from '@material-ui/core/TextField';
import { makeStyles } from '@material-ui/core/styles';
import NavBar from '../NavBar/NavBar';

function Feeling(params) {

    const history = useHistory();
    const dispatch = useDispatch();

    const [feeling, setFeeling] = useState({})

    const nextSection = () => {
        console.log('Next clicked');

        dispatch({ type: 'FEELING_FEEDBACK_ENTRY', payload: feeling })
        history.push('/understanding')
    }

    return (
        <>
        <NavBar />
            <h1>How are you feeling today?</h1>
            <form onSubmit={nextSection}>
                <TextField
                    required
                    id="standard-number"
                    label="1 - 10"
                    type="number"
                    onChange={(event) => setFeeling(event.target.value)}
                    value={feeling}
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

export default Feeling;