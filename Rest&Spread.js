// function showList(empresa, ...clientes) {// usando REST
//     console.log(empresa);
//     console.log(clientes);
// }

// showList("Origamid", "João", "Maria")


// const numeros = [1, 10, 20, 33, 23];

 // no método Math.max ele só aceita passar número e não array
 //solução usando spread
// console.log(Math.max(...numeros))//usando spread

// const items = document.querySelectorAll("li");

//node list com forEach é disponivel
//com map para listar os intems do array usa SPREAD
// [...items].map(item =>{
//     console.log(item)
// });


// console.log(items);

//CLONANDO OBJETOS

// const carro = {cor:"Azul", portas: 4, ano: 2020};

// const cloneCarro2 = carro;//faz uma referência ao objeto não esta clonando

// const cloneCarro = { ...carro, turbo: true };


class Transporte{
    constructor(){
        this.terrestre = true;
    }

    andar(){
        console.log("Andou");
    }
}

class Carro extends Transporte{
    constructor(cor, portas){
        super()
        this.cor = cor;
        this.portas = portas;
    }
}

const carro = new Carro("Vermelho", 4);

const cloneCarro = {...carro};

console.log(carro);

//cloneCarro não herda o protótipo de Transporte ele é o object
console.log(cloneCarro);




