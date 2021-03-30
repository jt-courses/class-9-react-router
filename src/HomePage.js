import { Link } from "react-router-dom";
import { LoginForm } from "./LoginForm";
import Page from "./Page";

/**
 * Home page for our application.
 */
export default function HomePage() {
  return (
    <Page>
      <p>
        I am the home page!&nbsp;
        <Link to="/about">Go to the about page.</Link>
      </p>
      <LoginForm />
    </Page>
  );
}
