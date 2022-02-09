export default class Remedio {
  nome: string;
  tipo: string;
  unidade: string;
  quantidade: number;
  tarjaPreta: boolean;

  constructor (nome: string, tipo: string, unidade: string, quantidade: number, tarjaPreta: boolean) {
    this.nome = nome,
    this.tipo = tipo,
    this.unidade = unidade,
    this.quantidade = quantidade,
    this.tarjaPreta = tarjaPreta
  }

  escreveRemedio(): void {
    console.log(`
      Nome: ${this.nome}
      Tipo: ${this.tipo}
      Unidade: ${this.unidade}
      Quantidade: ${this.quantidade}
      Tarja Preta: ${this.tarjaPreta}
      -------------------------------`
    );
  }

  setTarjaPreta(): void {
    if(this.tarjaPreta == true) {
      console.log(`
      ${this.nome} já está com a tarja preta
      -------------------------------`);
    } else{
      this.tarjaPreta = true;
      console.log(`
      ${this.nome} agora está com a tarja preta
      -------------------------------`);
    }
  }

}