import "../App.css";
import { Link } from "react-router-dom";
function PageNotFound() {
  return (
    <div className="page-not-found">
      <h1>Sorry, the page you were looking for was not found.</h1>
      <Link to="/">Return to home</Link>
    </div>
  );
}

export default PageNotFound;
