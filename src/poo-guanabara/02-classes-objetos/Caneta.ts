export default class Caneta {
  modelo: string ;
  cor: string ;
  ponta: number ;
  carga: number ;
  tampada: boolean ;

  constructor (modelo: string, cor: string, ponta: number, carga: number, tampada: boolean){
    this.modelo = modelo,
    this.cor = cor,
    this.ponta = ponta,
    this.carga = carga,
    this.tampada = tampada
  }

  public status(): void {
    console.log(
    `MODELO: ${this.modelo}
    COR: ${this.cor}
    PONTA: ${this.ponta}
    CARGA: ${this.carga}
    ESTÁ TAMPADA? ${this.tampada}`
    )
  }

  public rabiscar(): void {
    if (this.tampada == true) {
      console.log('ERRO! Não posso rabiscar')
    } else {
      console.log('Estou rabiscando')
    }
  }

  public tampar(): void {
    this.tampada = true;
  }

  public destampar(): void {
    this.tampada = false;
  }

}
