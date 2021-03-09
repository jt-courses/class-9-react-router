import "./AppNavigation.css";
import { NavLink } from "react-router-dom";

function AppNavigationLink(props) {
  return (
    <NavLink
      {...props}
      className="AppNavigation__Link"
      activeClassName="AppNavigation__Link--Active"
    />
  );
}

export default function AppNavigation() {
  return (
    <nav className="AppNavigation">
      <ul>
        <li>
          <AppNavigationLink exact to="/">
            Home
          </AppNavigationLink>
        </li>
        <li>
          <AppNavigationLink to="/about">About</AppNavigationLink>
        </li>
        <li>
          <AppNavigationLink to="/sign-up">Sign Up</AppNavigationLink>
        </li>
      </ul>
    </nav>
  );
}
