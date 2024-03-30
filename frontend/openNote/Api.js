
export const test = "hi";
export const getUserFromApi = (userId) => {
    return fetch(`https://gelding-deciding-rationally.ngrok-free.app/user?userId=${userId}`)
      .then(response => response.json())
      .then(json => {
        // console.log(json);
        return json;
      })
      .catch(error => {
        console.error(error);
      });
  };