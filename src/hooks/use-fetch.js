const BASE_URL = "http://localhost:9000";

function formDataToJSON(data) {
  const object = {};
  data.forEach((value, key) => (object[key] = value));
  return object;
}

export function useFetch() {
  return function (url, body, args) {
    body = body instanceof FormData ? formDataToJSON(body) : body;
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
