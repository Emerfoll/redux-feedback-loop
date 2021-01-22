import { useHistory } from 'react-router-dom'


function Support(params) {
    
    const history = useHistory()

    const nextSection = () => {
        console.log('Next clicked');

        history.push('/comments')
    }

    return(
        <>
            <h1>Support</h1>
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

export default Support;