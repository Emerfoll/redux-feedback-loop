import { useHistory } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import NavBar from '../NavBar/NavBar';


function Start(params) {

    const dispatch = useDispatch();
    const history = useHistory();


    const startClick = () => {
        console.log('Start clicked');

        dispatch({ type: 'NEW_FEEDBACK', payload: [] })
        history.push('/feeling')
    }

    return (
        <div>
            <NavBar />
            <h1>Start Feedback</h1>
            <button className="nextBtn" onClick={startClick}>Start Feedback</button>
        </div>
    )
}

export default Start;