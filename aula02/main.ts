import Caneta from "./Caneta";

let c1: Caneta;
console.log(typeof c1)
c1 = new Caneta(/*'bic', 'preta', 0.7, 100, true*/);
console.log(typeof c1)
c1.cor = 'Azul';
c1.ponta = 0.5;



// c1.tampar();
// c1.rabiscar();
// c1.status();