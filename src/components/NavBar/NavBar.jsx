import { Breadcrumbs } from "@material-ui/core";
import { Link } from 'react-router-dom';

function NavBar(params) {
    

    return(
        <Breadcrumbs maxItems={2} aria-label="breadcrumb" className="navBar">
          <Link className="navBar" to="/">Start</Link>
          <Link className="navBar" to="/feeling">Feeling</Link>
          <Link className="navBar" to="/understanding">Understanding</Link>
          <Link className="navBar" to="/support">Support</Link>
          <Link className="navBar" to="/comments">Comments</Link>
          <Link className="navBar" to='/reviewFeedback'>ReviewFeedback</Link>

          
        </Breadcrumbs>
    )
}

export default NavBar;