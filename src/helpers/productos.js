const url = "https://tasty-world-backend.herokuapp.com/api/productos";

export const getProductos = async (token) => {
  const resp = await fetch(`${url}/all`, {
    method: "GET",

    headers: {
      "Content-type": "application/json; charset=UTF-8",
      "x-token": token,
    },
  });
  const datos = await resp.json();

  return datos;
};

export const getProducto = async (id, token) => {
  const resp = await fetch(`${url}/${id}`, {
    method: "GET",

    headers: {
      "Content-type": "application/json; charset=UTF-8",
    },
  });
  const datos = await resp.json();

  return datos;
};

export const postProducto = async (data, token) => {
  const resp = await fetch(`${url}`, {
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

export const putProducto = async (id, data, token) => {
  const resp = await fetch(`${url}/${id}`, {
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

export const deleteProducto = async (id, token) => {
  const resp = await fetch(`${url}/${id}`, {
    method: "DELETE",

    headers: {
      "Content-type": "application/json; charset=UTF-8",
      "x-token": token,
    },
  });
  const datos = await resp.json();

  return datos;
};
