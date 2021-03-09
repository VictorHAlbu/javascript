//function handleMouseMove(event) {
//    const clientX = event.clientX;
  //  const clientY = event.clientY;
 //   console.log(clientY, clientX);
//}

//DESTRUCTURING-  Desestruturando 
/*
function handleMouseMove(event) {
    const {clientX, clientY} = event;
    console.log(clientY, clientX);
}
*/
//DESESTRUTURANDO 2 POR PARÃMETRO DIRETO
function handleMouseMove({clientX, clientY}) {
    console.log(clientY, clientX);
}

//document.documentElement.addEventListener("mousemove", handleMouseMove);

//DESUSTRUTURANDO ARRAY

const frutas = ['Banana', 'Uva'];

const [fruta1, fruta2] = frutas;

//console.log(fruta1,fruta2);
//console.log(frutas);

const useState = [
    'blue',
    function(color) {
        useState[0] = color;
    }
];

const [color, setColor] = useState;

setColor("red");