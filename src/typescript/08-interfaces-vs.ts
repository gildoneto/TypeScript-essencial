// Interfaces

//definição
interface GameZ {
  title: string;
}

interface DLCZ {
  extra: string;
}

// interseção / extend
interface GameCollectionZ extends GameZ, DLCZ {}

// implements
class CreateGameZ implements GameCollectionZ {
  title: string;
  extra: string;
  constructor(t: string, e: string){
    this.title = t,
    this.extra = e
  }
}

// declarar função
interface getSimilars {
  (title: string): void;
}

// ============== Diferenças ============= //
//interface ID extends number {}

// Não se consegue definir Tuplas na interface
interface TupleZ {
  0: number;
  1: number;
  2: number;
}

[1, 2, 3, 'sdf'] as TupleZ;

// Pode ter múltiplas declarações e ele une de mesmo nome
interface JQueryZ {
  a: string;
}

interface JQueryZ {
  b: string;
}

const $: JQueryZ = {
  a: 'bla',
  b: 'foo',
};

// vantagem: quando tiver criando libs, prefira interfaces, porque são mais extensíveis

// criando objetos/classes (POO)