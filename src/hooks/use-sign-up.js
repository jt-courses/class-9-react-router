import { useCallback } from "react";
import { useFetch } from "./use-fetch";

export function useSignUp() {
  const fetch = useFetch();

  const signUp = useCallback(
    (dto) => {
      return fetch("/api/sign-up", dto, {
        method: "post",
      });
    },
    [fetch]
  );

  return signUp;
}
