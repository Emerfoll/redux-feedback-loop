


function Start(params) {

    const startClick = () => {
        console.log('Start clicked');
    }

    return (
        <div>
            <button onClick={startClick}>Start Feedback</button>
        </div>
    )
}

export default Start;