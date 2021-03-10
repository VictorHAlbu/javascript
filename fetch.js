
fetch("https://ranekapi.origamid.dev/wp-json/api/produto"
).then(r =>  r.json())
    .then(jsonBody =>{
        document.querySelector("#app").innerHTML = jsonBody[0].nome;
    });

    const data ={
        id: "andrerafa",
        nome: "Andre",
        email: "email@email.com.br",
        senha: "123456",
        cep: "1234567",
        rua: "Bem rali",
        numero: "230"
    }

fetch("https://ranekapi.origamid.dev/wp-json/api//usuario", {
    method: "POST",
    headers:{
       "Content-Type": "application/jason" 
    },
    body: JSON.stringify(data)
});