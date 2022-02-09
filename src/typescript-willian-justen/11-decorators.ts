// @Component
// @Selector
// @useState('dasdas')

// Factory
function Logger(prefix: string) {
  return (target: any) => {
    console.log(`${prefix} - ${target}`);
  }
}

@Logger('awesome')
class Foo {}


// Class decorator --> roda em tempo de execução [runtime]
// Property decorator
// Method decorator --> roda toda vez que o método é chamado.
// Parameter decorator
// Acessor decorator
