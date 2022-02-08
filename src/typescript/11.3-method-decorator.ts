// Method decorator --> roda toda vez que o método é chamado.

function delay(ms: number) {
  return (target: any, key: string, descriptor: PropertyDescriptor) => {
    const originalMethod = descriptor.value;

    descriptor.value = function (...args: any[]) {
      console.log(`Esperando ${ms}...`);
      setTimeout(() => {
        originalMethod.apply(this, args)
      }, ms);

      return descriptor;
    };
  };
}

class Greeter {
  greeting: string;

  constructor(g: string){
    this.greeting = g
  }

  // esperar um tempo e aí vai rodar o método (ms)
  @delay(1000)
  greet() {
    console.log(`Hello! ${this.greeting}`)
  }
}

const pessoa = new Greeter('Alice')
pessoa.greet()