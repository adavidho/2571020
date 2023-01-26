import { Link } from "react-router-dom";
import "./Navbar.css";

const Navbar = () => {
  return (
    <div className="navbar">
      <h1>To Do List Project</h1>
      <div className="nav-button-container">
        <Link className="nav-button" to="/">
          Month
        </Link>
        <Link className="nav-button" to={`todo/${new Date().getDate()}`}>
          Today
        </Link>
      </div>
    </div>
  );
};
export default Navbar;
