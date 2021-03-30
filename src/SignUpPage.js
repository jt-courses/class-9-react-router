import Page from "./Page";
import { SignUpForm } from "./SignUpForm";

/**
 * Sign up page for our application.
 */
export default function SignUpPage() {
  return (
    <Page>
      <h1>I am the sign up page!</h1>
      <p>Please use the form below to sign up and receive the awesomeness.</p>
      <SignUpForm />
    </Page>
  );
}
