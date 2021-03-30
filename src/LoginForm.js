import "./SignUpForm.css";

import React, { useCallback } from "react";
import { useSignUp } from "./hooks/use-sign-up";

export function LoginForm() {
  const signup = useSignUp();

  const handleSubmit = useCallback(
    (e) => {
      e.preventDefault();

      signup(new FormData(e.target))
        .then((response) => response.json())
        .then((result) => {
          console.log(result);
        })
        .catch((error) => {
          console.error(error);
        });
    },
    [signup]
  );

  return (
    <form onSubmit={handleSubmit} className="SignUpForm">
      <label>
        Email Address
        <input type="email" name="email" />
      </label>
      <label>
        Password
        <input type="password" name="password" />
      </label>
      <input type="submit" value="Log In" />
    </form>
  );
}
