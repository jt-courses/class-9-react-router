import { Link } from "react-router-dom";
import Page from "./Page";

/**
 * Home page for our application.
 */
export default function HomePage() {
  return (
    <Page>
      I am the home page!&nbsp;
      <Link to="/about">Go to the about page.</Link>
    </Page>
  );
}
