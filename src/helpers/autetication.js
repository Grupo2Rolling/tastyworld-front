//fer cambio esto para asegurarme que funciona la seguridad por autenticacion de rol en pag mozo
const url = "http://localhost:4005/api/auth/login";

export const postAuth = async (data) => {
  const resp = await fetch(url, {
    method: "POST",
    body: JSON.stringify(data),
    headers: {
      "Content-type": "application/json; charset=UTF-8",
    },
  });
  const datos = await resp.json();

  return datos;
};
