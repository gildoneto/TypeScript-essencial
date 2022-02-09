import Caneta from "./Caneta";

let c1: Caneta;
c1 = new Caneta();
c1.modelo = "BIC Cristal";
c1.cor = "Azul";
//c1.ponta = 0.5;
//c1.carga = 50; // compila, mas está errado
c1.status();
