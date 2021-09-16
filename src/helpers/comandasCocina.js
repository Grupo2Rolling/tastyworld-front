const url = 'https://tasty-world-backend.herokuapp.com/api/comandas'
//const url = 'https://localhost:4005/api/comandas'

export const getComandas = async () => {
  const resp = await fetch(`${url}`, {
    method: 'GET',

    headers: {
      'Content-type': 'application/json; charset=UTF-8',
      //'x-token': JSON.parse(localStorage.getItem('auth')).token
      'x-token': "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1aWQiOiI2MTNlODNhMWQxNWI5ZGY5OTRhYjM3ODMiLCJpYXQiOjE2MzE4MjM1NjQsImV4cCI6MTYzMTgzMDc2NH0.YR05OI_w3Y_EwiME60RSsCEDiBgW89jS2nMhrUpLQEw"
    },
  })
  const datos = await resp.json()
  console.log(datos)
  return datos
}

//Actualizar estado de comanda
export const putComanda = async (id, data) => {
  const resp = await fetch(`${url}/${id}`, {
    method: 'PUT',
    body: JSON.stringify(data),
    headers: {
      'Content-type': 'application/json; charset=UTF-8',
      'x-token': JSON.parse(localStorage.getItem('auth')).token,
    },
  })
  const datos = await resp.json()

  return datos
}
