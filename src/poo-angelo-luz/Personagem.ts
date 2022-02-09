// nome, energia, vida, ataque, defesa

//classe
class Personagem {
  nome: string = '';
  energia: number = 0;
  vida: number = 0;
  ataque: number = 0;
  defesa: number = 0;
}

//atributos


//métodos (funções)
let nome = 'Jon';

let sansa: Personagem;
sansa = new Personagem();
sansa.nome = 'Sansa Stark';
sansa.ataque = 10;
sansa.defesa = 20;
sansa.energia = 20;
sansa.vida = 100;
console.log('SANSA: ', sansa);

let jon: Personagem = new Personagem();
jon.nome = 'Jon Snow';
jon.ataque = 80;
jon.defesa = 70;
jon.energia = 90;
jon.vida = 40;
console.log('JON: ', jon);