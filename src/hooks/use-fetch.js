const BASE_URL = "http://localhost:9000";

function formDataToJSON(data) {
  const object = {};
  data.forEach((value, key) => (object[key] = value));
  return object;
}

/**
 * React hook function that returns a "fetch"-like
 * function we can use to communicate with our API.
 */
export function useFetch() {
  // We return this function that we can call to
  // communicate with our API.
  return function (url, body, args) {
    body = body instanceof FormData ? formDataToJSON(body) : body;

    // Here, we actually call the browser's "fetch"
    // function, pre-pending the BASE_URL string, so
    // the browser knows the full address.
    return fetch(`${BASE_URL}${url}`, {
      body: JSON.stringify(body),
      ...args,
      headers: {
        "content-type": "application/json",
        ...args.headers,
      },
    });
  };
}
