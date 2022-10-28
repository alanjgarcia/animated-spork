import { Link } from "react-router-dom";
import { LogoutLink } from "./LogoutLink";

export function Header() {
  return (
    <header>
      <nav>
        <div className="container-fluid">
          <Link className="navbar-brand" to="/">
            Mini Capstone
          </Link>
        </div>
        <Link to="/"> Home </Link> | <Link to="/about"> About </Link> | <Link to="/signup"> Signup </Link> |{" "}
        <Link to="/login"> Login </Link> | <Link to="/logout"> Logout </Link> |
      </nav>
    </header>
  );
}
