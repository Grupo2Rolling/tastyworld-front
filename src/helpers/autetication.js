const url = "http://localhost:4005/api/auth/login" // LLAMAMOS AQUI TMB A NUESTRA URL 

export const postAuth = async (data) => {
  const resp = await fetch(`url`, {
    method: "POST",
    body: JSON.stringify(data),
    headers: {
      "Content-type": "application/json; charset=UTF-8",
    },
  });
  const datos = await resp.json();

  return datos;
};