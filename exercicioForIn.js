//iterando objeto dentro da propiedade 

const filme = {
    titulo : 'Vingadores',
    ano : 2018,
    diretor : 'Robin',
    personagem : 'Thor'
}

exibirPropiedades(filme);

function exibirPropiedades(obj) {
    for (pro in obj)
        if(typeof obj[pro] === 'string')
            console.log(pro,obj[pro])
}