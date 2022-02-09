// nome, energia, vida, ataque, defesa
//classe
var Personagem = /** @class */ (function () {
    function Personagem() {
        this.nome = '';
        this.energia = 0;
        this.vida = 0;
        this.ataque = 0;
        this.defesa = 0;
    }
    return Personagem;
}());
//atributos
//métodos (funções)
var nome = 'Jon';
var sansa;
sansa = new Personagem();
sansa.nome = 'Sansa Stark';
sansa.ataque = 10;
sansa.defesa = 20;
sansa.energia = 20;
sansa.vida = 100;
console.log('SANSA: ', sansa);
var jon = new Personagem();
jon.nome = 'Jon Snow';
jon.ataque = 80;
jon.defesa = 70;
jon.energia = 90;
jon.vida = 40;
console.log('JON: ', jon);
