import { useCallback } from "react";
import { useFetch } from "./use-fetch";

export function useLogIn() {
  const fetch = useFetch();

  const logIn = useCallback(
    (dto) => {
      return fetch("/api/auth/log-in", dto, {
        method: "post",
      });
    },
    [fetch]
  );

  return logIn;
}
