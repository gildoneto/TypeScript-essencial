abstract class UserAccount {
  public name: string;
  protected age: number;

  constructor(name: string, age: number){
    this.name = name;
    this.age = age;
  }

  logDetails(): void {
    console.log(`The player ${this.name} is ${this.age} years old.`)
  }
}

class CharAccount extends UserAccount {
  private nickname: string;
  level: number;

  constructor(name: string, age: number, nickname: string, level: number) {
    super(name, age);

    this.nickname = nickname;
    this.level = level;
  }

  get getLevel() {
    return this.level;
  }

  set setLevel(level: number) {
    this.level = level;
  }

  logCharDetails(): void {
    console.log(`The player ${this.name} is ${this.age} and has the char ${this.nickname} at level ${this.level}`);
  }
}


const jonh = new CharAccount('Jonh', 45, 'johnmaster', 80);
// console.log(jonh);
// jonh.logDetails();
//jonh.logCharDetails();

jonh.setLevel = 499;

console.log(jonh.getLevel);