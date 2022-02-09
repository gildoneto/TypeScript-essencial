import Caneta from "./Caneta";

let c1: Caneta;
c1 = new Caneta();

//c1.modelo2; // -> Chama o get da classe
c1.modelo2 = 'BIC'; // -> Chama o set da classe
c1.ponta = 2.1;

c1.status() // -> chama o método status
