//FOR - IN

const pessoa ={
    nome: 'Victor',
    idade: 28
};

//acessando priedades do objeto
for (const key in pessoa) {
    //console.log(key, pessoa.nome);
    console.log(key, pessoa['nome']);
}

const cores = ['Vermelho','Azul','Amarelo'];

for (const indice in cores) {
    console.log(indice,cores[indice]);
    
}

// FOR OF

//FAZENDO ITERAÇÃO SOBRE O ARRAY CORES
for (const cor of cores) {
    console.log(cor);
}