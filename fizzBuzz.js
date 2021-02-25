//valores que sã divisivel por 3
//valores que são divisivel por 5
//VALORES QUE SÃO DIVISIVEIS TANTO POR 5 COMO POR 3

const resultado = fizzBuzz(15);
console.log(resultado);


function fizzBuzz(entrada) {
    
    if (typeof entrada !== 'number') {
        return 'Não é um numero';
    }
    if ((entrada % 3 === 0) && (entrada % 5 === 0)) 
        return 'FizzBuzz'
    if (entrada % 3 === 0 ) {
        return 'Fizz';
    }
    if (entrada % 5 === 0) {
     return 'Buzz';   
    }

    return entrada;

}