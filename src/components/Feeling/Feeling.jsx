import { useHistory } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { useState } from 'react';
import { Button } from '@material-ui/core';
import TextField from '@material-ui/core/TextField';
import { makeStyles } from '@material-ui/core/styles';
import NavBar from '../NavBar/NavBar';

function Feeling(params) {

    // setting variables to be used later
    const history = useHistory();
    const dispatch = useDispatch();

    const [feeling, setFeeling] = useState({})

    // function that runs when the 'Next' button is clicked
    const nextSection = () => {
        console.log('Next clicked');

        // Alerts redux which section to update and what to update it with.
        dispatch({ type: 'FEELING_FEEDBACK_ENTRY', payload: feeling })
        // Sends the user to the next section
        history.push('/understanding')
    }

    return (
        <>
        <NavBar />
            <h1>How are you feeling today?</h1>
            <form onSubmit={nextSection}>
                {/* Where the user inputs their feedback */}
                <TextField
                    required
                    id="standard-number"
                    label="1 - 10"
                    type="number"
                    onChange={(event) => setFeeling(event.target.value)}
                    value={feeling}
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

export default Feeling;