export default class Caneta {
    modelo: string ;
    // public get modelo(): string {
    //     return this._modelo;
    // }
    // public set modelo(value: string) {
    //     this._modelo = value;
    // }
    cor: string ;
    // public get cor(): string {
    //     return this._cor;
    // }
    // public set cor(value: string) {
    //     this._cor = value;
    // }
    ponta: number ;
    // public get ponta(): number {
    //     return this._ponta;
    // }
    // public set ponta(value: number) {
    //     this._ponta = value;
    // }
    carga: number ;
    // public get carga(): number {
    //     return this._carga;
    // }
    // public set carga(value: number) {
    //     this._carga = value;
    // }
    tampada: boolean ;
    // public get tampada(): boolean {
    //     return this._tampada;
    // }
    // public set tampada(value: boolean) {
    //     this._tampada = value;
    // }

    // constructor (modelo: string, cor: string, ponta: number, carga: number, tampada: boolean){
    //     this._modelo = modelo,
    //     this._cor = cor,
    //     this._ponta = ponta,
    //     this._carga = carga,
    //     this._tampada = tampada
    // }

    public status(): void {
    console.log(
        `MODELO: ${this.modelo}
        COR: ${this.cor}
        PONTA: ${this.ponta}
        CARGA: ${this.carga}
        ESTÁ TAMPADA? ${this.tampada}`)
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