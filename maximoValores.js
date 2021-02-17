//FUNÇÃO QUE RECEBE DOIS NÚMEROS E RETORNA O MAIOR ENTRE ELES

console.log(Math.max(10,20));



let valorMax = max(10,20);
console.log(valorMax);

function max(numero1,numero2) {
   /* if (numero1 > numero2)
    return numero1;
    return numero2; */    

    // usando operador ternario
    return numero1>numero2 ? numero1 : numero2;
}

// 4 forma de encontrar valor maximo 

let maximoVal = max2(10,20);
console.log(maximoVal);

function max2(num1,num2) {
    return Math.max(num1,num2);
}
