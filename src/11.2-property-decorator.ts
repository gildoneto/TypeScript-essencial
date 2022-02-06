// Property decorator

function minLength(length: number) {
  return (target: any, key: string) => {
    let val = target[key]

    const getter = () => val;

    const setter = (value: string) => {
      if(value.length < length){
        console.log(`Error: você não pode criar ${key} menor que ${length}.`);
      } else {
        val = value
      }
    }

    Object.defineProperty(target, key, {
      get: getter,
      set: setter,
    });

  }
}

class Movie {
  //validação - se for menor que 5 -> Erro
  @minLength(5)
  title: string;

  constructor(t: string){
    this.title = t;
  }
}

const movie = new Movie('Interstellar');
console.log(movie.title);