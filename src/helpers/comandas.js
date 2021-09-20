const url = 'https://tasty-world-backend.herokuapp.com/api/comandas'
export const getComandasCocina = async (token) => {
  const resp = await fetch(`${url}/cocina`, {
    method: 'GET',

    headers: {
      'Content-type': 'application/json; charset=UTF-8',
      'x-token': token
      //'x-token': "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1aWQiOiI2MTNlODNhMWQxNWI5ZGY5OTRhYjM3ODMiLCJpYXQiOjE2MzE4NDY0ODUsImV4cCI6MTYzMTg1MzY4NX0._ui1P1jpw-hCD5cfsy0AN8yth0hKIyZq_oA7B1wg_JU"
      // en caso de no funcionar login, harcodear el token o agregar en el local storage del browser
    },
  })
  const datos = await resp.json()
  console.log(datos)
  return datos
}

export const getComandasBarra = async (token) => {
  const resp = await fetch(`${url}/barra`, {
    method: 'GET',

    headers: {
      'Content-type': 'application/json; charset=UTF-8',
      'x-token': token
      //'x-token': "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1aWQiOiI2MTNlODNhMWQxNWI5ZGY5OTRhYjM3ODMiLCJpYXQiOjE2MzE4NDY0ODUsImV4cCI6MTYzMTg1MzY4NX0._ui1P1jpw-hCD5cfsy0AN8yth0hKIyZq_oA7B1wg_JU"
      // en caso de no funcionar login, harcodear el token o agregar en el local storage del browser
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
      //'x-token': "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1aWQiOiI2MTNlODNhMWQxNWI5ZGY5OTRhYjM3ODMiLCJpYXQiOjE2MzE4NDY0ODUsImV4cCI6MTYzMTg1MzY4NX0._ui1P1jpw-hCD5cfsy0AN8yth0hKIyZq_oA7B1wg_JU"
      // en caso de no funcionar login, harcodear el token o agregar en el local storage del browser
    },
  })
  const datos = await resp.json()
  console.log(datos)
  return datos
}

export const postComanda = async (id, data) => {
  const resp = await fetch(`${url}/${id}`, {
    method: 'POST',
    body: JSON.stringify(data),
    headers: {
      'Content-type': 'application/json; charset=UTF-8',
      'x-token': JSON.parse(localStorage.getItem('auth')).token,
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