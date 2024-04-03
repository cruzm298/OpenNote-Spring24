
const uri = `https://gelding-deciding-rationally.ngrok-free.app`
export const getUserFromApi = (userId) => {
    return fetch(`${uri}/user?userId=${userId}`)
      .then(response => response.json())
      .then(json => {
        // console.log(json);
        return json;
      })
      .catch(error => {
        console.error(error);
      });
  };

  export const getAllNotes = ()=>{
    return fetch(`${uri}/notes`)
    .then(response => response.json())
    .then(json => {
      return json;
    })
    .catch(err => {
      console.error(err);
    })
  }
export const postNewNote = (note) => {
  return fetch(`${uri}/notes`, {
    method: 'POST',
    headers:{
      Accept: 'application/json',
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(note)
  }).then(response => response.json())
  .then(json => {
    console.log(json)
  })
  .catch(err => {
    console.error(err);
  })
}