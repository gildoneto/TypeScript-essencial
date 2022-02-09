export default class Artista {
  nome: string;
  ano: number;
  estilo: string;
  jaBombou: boolean;

  constructor(nome: string, ano: number, estilo: string, jaBombou: boolean) {
    this.nome = nome,
    this.ano = ano,
    this.estilo = estilo,
    this.jaBombou = jaBombou
  }

  mostraArtista(): void {
    console.log(`
      Artista: ${this.nome}
      Inicio Carreira: ${this.ano}
      Estilo Musical: ${this.estilo}
      Já bombou?: ${this.jaBombou}
      ---------------------------------`
    );
  }

  bombaArtista(): void {
    if(this.jaBombou == true) {
      console.log(`
      ${this.nome} já bombou
      ---------------------------------`);
    } else {
      console.log(`
      ${this.nome} bombou
      ---------------------------------`);
      this.jaBombou = true;
    }
  }

}