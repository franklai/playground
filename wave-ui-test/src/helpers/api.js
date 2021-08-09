const sendRequest = (api, method, version, params) => {
  const data = {
    api,
    method,
    version,
    ...params,
  };
  return fetch("/webapi/entry.cgi", {
    method: "POST",
    body: new URLSearchParams(data),
  });
};

export { sendRequest };
