import Caneta from "./Caneta";

let c1: Caneta;
// console.log(typeof c1) // -> c1 já foi declarado e tipado, mas sem valor atribuído
c1 = new Caneta('bic', 'preta', 0.7, 100, true);
// console.log(typeof c1)
c1.cor = 'Verde';
c1.ponta = 0.9;

// c1.tampar();
c1.destampar();
c1.status();
c1.rabiscar();

const c2: Caneta = new Caneta('compactor', 'Vermelho', 1.0, 100, true);

c2.status();
c2.rabiscar();
