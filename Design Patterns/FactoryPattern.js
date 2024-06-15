class Person {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }
  sayGreeting = () => {
    console.log(`Hello , this is ${this.name} and I am ${this.age} years old`);
  };
}

class PersonFactory {
  static createPerson(name, age) {
    return new Person(name, age);
  }
}

const p1 = PersonFactory.createPerson("Pawan", 25);
const p2 = PersonFactory.createPerson("Ayush", 26);

p1.sayGreeting(); //Hello , this is Pawan and I am 25 years old
p2.sayGreeting(); //Hello , this is Ayush and I am 26 years old



