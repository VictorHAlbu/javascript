/*let nome = 'Victor';
let idadde = 28;
let estaAprovado = true;
let sobrenome = undefined;
let corSelecionado = null;
*/
/*
const menu = {
    calss: ".principal",
    ativar() {
        const menuElement = document.querySelector(this.calss);
        console.log(menuElement);
    }
};

menu.ativar()
*/
//Arrow function
//const upperName = name => name.toUpperCase();

//const upperName = name => name.toUpperCase();
//const countLetters = word => word.length;

class Menu{

    constructor(menu){
        this.menuEllement = document.querySelector(menu);
        this.activeClass = "active";
    }
    addActiveEvent(){
        this.menuEllement.addEventListener("click", (event) => {
                event.target.classList.add(this.activeClass);
            });
    }

}

const menu = new Menu(".principal");
menu.addActiveEvent();

console.log(menu);
