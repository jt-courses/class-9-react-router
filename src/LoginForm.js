import "./SignUpForm.css";

import React, { useCallback } from "react";
import { useLogIn } from "./hooks/use-log-in";

export function LoginForm() {
  const login = useLogIn();

  const handleSubmit = useCallback(
    (e) => {
      e.preventDefault();

      login(new FormData(e.target))
        .then((response) => response.json())
        .then((result) => {
          if (result.error) {
            alert(result.message);
          } else {
            alert("You are logged-in successfully.");
          }
        });
    },
    [login]
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
