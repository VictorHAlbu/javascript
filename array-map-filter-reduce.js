const precos = [
    "Crédito",
    "R$ 200",
    "R$ 400",
    "Contas Pagar",
    "R$ 300",
    "R$ 400",
    "Meus dados"
];

const precosFiltro = precos.filter(preco =>  preco.includes("R$"));

const precosNumero = precosFiltro.map(preco => 
     Number(preco.replace("R$ ", ""))
);

const total = precosNumero.reduce(function(acc, atual) {
    return acc + atual;
});

console.log(total);