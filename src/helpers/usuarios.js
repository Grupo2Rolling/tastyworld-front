//VER COMO NOMRARON VARIABLES LOS CHICOS Y MODIFICAR
const url = "https://tasty-world-backend.herokuapp.com";
const token =
  JSON.parse(localStorage.getItem("auth")) &&
  JSON.parse(localStorage.getItem("auth")).token;

export const usuariosGet = async () => {
  const resp = await fetch(`${url}/api/usuarios`, {
    method: "GET",

    headers: {
      "Content-type": "application/json; charset=UTF-8",
      "x-token": token,
    },
  });
  const datos = await resp.json();

  return datos;
};

export const getUsuarioId = async (id) => {
  const resp = await fetch(`${url}/api/usuarios/${id}`, {
    method: "GET",

    headers: {
      "Content-type": "application/json; charset=UTF-8",
    },
  });
  const datos = await resp.json();

  return datos;
};

//Para crear:
export const usuarioPost = async (data) => {
  const resp = await fetch(`${url}/api/usuarios`, {
    method: "POST",
    body: JSON.stringify(data),
    headers: {
      "Content-type": "application/json; charset=UTF-8",
      "x-token": token,
    },
  });
  const datos = await resp.json();

  return datos;
};

// Para actulizar:
export const usuarioPut = async (id, data) => {
  const resp = await fetch(`${url}/api/usuarios/${id}`, {
    method: "PUT",
    body: JSON.stringify(data),
    headers: {
      "Content-type": "application/json; charset=UTF-8",
      "x-token": token,
    },
  });
  const datos = await resp.json();
  return datos;
};

//Para desailitar o eliminar
export const usuarioDelete = async (id) => {
  const resp = await fetch(`${url}/api/usuarios/${id}`, {
    method: "DELETE",

    headers: {
      "Content-type": "application/json; charset=UTF-8",
      "x-token": token,
    },
  });
  const datos = await resp.json();

  return datos;
};
