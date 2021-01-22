import { useHistory } from 'react-router-dom'


function Feeling(params) {

    const history = useHistory()

    const nextSection = () => {
        console.log('Next clicked');

        history.push('/understanding')
    }

    return (
        <>
            <h1>Feeling</h1>
            <form onSubmit={nextSection}>
                <input 
                type="text"
                placeholder="Feedback"
                onChange={(event) => setSomething(event.target.value)}
                />
            <button type="submit">Next</button>
            </form>
        </>
    )
}

export default Feeling;