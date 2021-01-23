import { useHistory } from 'react-router-dom';
import { useDispatch } from 'react-redux';



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
            <h1>Start Feedback</h1>
            <button onClick={startClick}>Start Feedback</button>
        </div>
    )
}

export default Start;