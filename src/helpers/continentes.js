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
  
