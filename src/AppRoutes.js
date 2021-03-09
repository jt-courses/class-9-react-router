import { Route, Switch } from "react-router-dom";
import AboutPage from "./AboutPage";
import HomePage from "./HomePage";
import SignUpPage from "./SignUpPage";
import NotFoundPage from "./NotFoundPage";

/**
 * This component declares all of the "routes" available to our application,
 * and which component renders that route.
 */
export default function AppRoutes() {
  return (
    <Switch>
      <Route path="/about">
        <AboutPage />
      </Route>
      <Route path="/sign-up">
        <SignUpPage />
      </Route>
      <Route exact path="/">
        <HomePage />
      </Route>
      <Route>
        <NotFoundPage />
      </Route>
    </Switch>
  );
}
