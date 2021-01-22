import { useHistory } from 'react-router-dom'


function Comments(params) {
    
    const history = useHistory()

    const nextSection = () => {
        console.log('Next clicked');

        history.push('/')
    }

    return(
        <>
            <h1>Comments</h1>
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

export default Comments;