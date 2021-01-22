import { useHistory } from 'react-router-dom'


function Understanding(params) {
    

    const history = useHistory()

    const nextSection = () => {
        console.log('Next clicked');

        history.push('/support')
    }

    return(
        <>
            <h1>Understanding</h1>
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

export default Understanding;