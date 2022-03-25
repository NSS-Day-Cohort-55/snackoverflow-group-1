const apiURL = "http://localhost:8088";

export const getFoods = () => {
  return fetch(`${apiURL}/foods?_expand=menu`).then((response) =>
    response.json()
  );
};
