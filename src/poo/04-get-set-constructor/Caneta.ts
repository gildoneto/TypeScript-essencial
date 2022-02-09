export default class Caneta {
  public modelo: string;
  private _ponta: number;

  constructor (modelo: string = 'indefinido', ponta: number = 0.0) {
    this.modelo = modelo,
    this._ponta = ponta
  }

  public status(): void {
    console.log(`
    MODELO: ${this.modelo}
    PONTA: ${this._ponta}`
    )
  }

  public get modelo2(): string {
    return this.modelo;
  }

  public set modelo2(modelo: string) {
    this.modelo = modelo;
  }

  public get ponta(): number {
    return this._ponta;
  }

  public set ponta(ponta: number) {
    this._ponta = ponta;
  }
}
