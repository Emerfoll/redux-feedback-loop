import { useHistory } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { useState } from 'react';
import { Button } from '@material-ui/core';
import TextField from '@material-ui/core/TextField';
import NavBar from '../NavBar/NavBar';

function Support(params) {

    // setting variables to be used later
    const history = useHistory()
    const dispatch = useDispatch()

    const [support, setSupport] = useState('')

    // function that runs when the 'Next' button is clicked
    const nextSection = () => {
        console.log('Next clicked');

        // Alerts redux which section to update and what to update it with.
        dispatch({ type: 'SUPPORT_FEEDBACK_ENTRY', payload: support })
        // Sends the user to the next section
        history.push('/comments')
    }

    return (
        <>
        <NavBar />
            <h1>How well are you being support?</h1>
            <form onSubmit={nextSection}>
                {/* Where the user inputs their feedback */}
                <TextField
                    required
                    id="standard-number"
                    label="1 - 10"
                    type="number"
                    onChange={(event) => setSupport(event.target.value)}
                    value={support}
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

export default Support;