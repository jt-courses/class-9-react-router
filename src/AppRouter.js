import { BrowserRouter as Router } from "react-router-dom";

/**
 * Very simple component that wraps `react-router-dom`'s `BrowserRouter`
 * component. Mainly to show use of `props.children`.
 */
export default function AppRouter(props) {
  return <Router>{props.children}</Router>;
}
