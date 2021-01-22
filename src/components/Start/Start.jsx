import { useHistory } from 'react-router-dom'



function Start(params) {

    const history = useHistory()

    const startClick = () => {
        console.log('Start clicked');

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