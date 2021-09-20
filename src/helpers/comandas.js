const url = 'https://tasty-world-backend.herokuapp.com/api/comandas'


export const getComandas = async (token) => {
  const resp = await fetch(`${url}`, {
    method: 'GET',

    headers: {
      'Content-type': 'application/json; charset=UTF-8',
      'x-token': token
  
    },
  })
  const datos = await resp.json()
  console.log(datos)
  return datos
}
export const getComandasCocina = async () => {
  const resp = await fetch(`${url}/cocina`, {
    method: 'GET',
    headers: {
      'Content-type': 'application/json; charset=UTF-8',
      'x-token': JSON.parse(localStorage.getItem('auth')).token,

    },
  })
  const datos = await resp.json()
  return datos
}

export const getComandasBarra = async (token) => {
  const resp = await fetch(`${url}/barra`, {
    method: 'GET',

    headers: {
      'Content-type': 'application/json; charset=UTF-8',
      'x-token': token
      
    },
  })
  const datos = await resp.json()
  console.log(datos)
  return datos
}

export const getComandasEntregas = async (token) => {
  const resp = await fetch(`${url}/entregas`, {
    method: 'GET',

    headers: {
      'Content-type': 'application/json; charset=UTF-8',
      'x-token': token
     
    },
  })
  const datos = await resp.json()
  return datos
}

export const postComandaAdmin = async (data, token) => {
  const resp = await fetch(`${url}/admin`, {
    method: 'POST',
    body: JSON.stringify(data),
    headers: {
      'Content-type': 'application/json; charset=UTF-8',
      'x-token': token
    },
  })
  const datos = await resp.json()

  return datos
}

//Actualizar estado de comanda
export const putComanda = async (id, data, token) => {
  const resp = await fetch(`${url}/${id}`, {
    method: 'PUT',
    body: JSON.stringify(data),
    headers: {
      'Content-type': 'application/json; charset=UTF-8',
      'x-token': token,
    },
  })
  const datos = await resp.json()

  return datos
}

export const delComanda = async (id, data) => {
  const resp = await fetch(`${url}/${id}`, {
    method: 'DELETE',
    headers: {
      'Content-type': 'application/json; charset=UTF-8',
      'x-token': JSON.parse(localStorage.getItem('auth')).token,
    },
  })
  const datos = await resp.json()

  return datos
}