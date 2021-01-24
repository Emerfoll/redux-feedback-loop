import { Breadcrumbs } from "@material-ui/core";
import { Link } from 'react-router-dom';

function NavBar(params) {
    
  // this is a navigation bar that allows the user to move around the app if they need to change info that was entered incorrectly.

    return(
      // nav bar that starts collapsed and can be expanded if the user needs to move around the app
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