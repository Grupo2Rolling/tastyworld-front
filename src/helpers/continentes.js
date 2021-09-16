const url = "https://tasty-world-backend.herokuapp.com/api/continentes" 

export const getContinentes = async () => {


    const resp = await fetch(`${url}`, {
      method: "GET",
  
      headers: {
        "Content-type": "application/json; charset=UTF-8",
        "x-token": JSON.parse(localStorage.getItem("auth")).token,
        
      },
    });
    const datos = await resp.json();
  
    return datos;
  };
  

  
//   export const postProducto = async (data) => {
//     const resp = await fetch(`${url}`, {
//       method: "POST",
//       body: JSON.stringify(data),
//       headers: {
//         "Content-type": "application/json; charset=UTF-8",
//         "x-token": JSON.parse(localStorage.getItem("auth")).token,
//       },
//     });
//     const datos = await resp.json();
  
//     return datos;
//   };
  
//   export const putProducto = async (id, data) => {
//     const resp = await fetch(`${url}/${id}`, {
//       method: "PUT",
//       body: JSON.stringify(data),
//       headers: {
//         "Content-type": "application/json; charset=UTF-8",
//         "x-token": JSON.parse(localStorage.getItem("auth")).token,
//       },
//     });
//     const datos = await resp.json();
  
//     return datos;
//   };
  
//   export const deleteProducto = async (id) => {
//     const resp = await fetch(`${url}/${id}`, {
//       method: "DELETE",
  
//       headers: {
//         "Content-type": "application/json; charset=UTF-8",
//         "x-token": JSON.parse(localStorage.getItem("auth")).token,
//       },
//     });
//     const datos = await resp.json();
  
//     return datos;
//   };