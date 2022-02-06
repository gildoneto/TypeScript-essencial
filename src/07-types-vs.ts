// Type Alias

// definição
type GameT = {
  title: string;
};

type DLCT = {
  extra: string;
};

// intersection
type GameCollectionT = GameT & DLCT;

// implements
class CreateGameT implements GameCollectionT {
  title: string;
  extra: string;
  constructor(t: string, e: string){
    this.title = t,
    this.extra = e
  }
}

// declarar função
type getSimilarT = (title: string) => void;

// ============== Diferenças ============= //

// permite declarar tipos primitivos
type IDT = string | number;

// pode declarar tuplas normalmente
type TupleT = [number, number, number];
[1, 2, 3] as TupleT;

// Apenas uma declaração por escopo
type JQueryT = { a: string };
//type JQueryT = { b: string };

// mais recomendado:
// na maioria das vezes
// React - Props

// Mais importante -> Consistência