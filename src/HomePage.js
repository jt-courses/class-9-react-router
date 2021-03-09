import { Link } from "react-router-dom";

/**
 * Home page for our application.
 */
export default function HomePage() {
  return (
    <main>
      I am the home page!&nbsp;
      <Link to="/about">Go to the about page.</Link>
    </main>
  );
}
