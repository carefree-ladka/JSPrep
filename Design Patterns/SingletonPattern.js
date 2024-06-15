class Singleton {
  constructor() {
    if (Singleton.instance) return Singleton.instance;
    this.data = {
      name: "Pawan",
      age: 25,
    };
    Singleton.instance = this;
  }

  getData = () => this.data;
}

const instance1 = new Singleton();
const instance2 = new Singleton();

console.log(instance1 === instance2); //true
console.log(instance1.getData()); //{ name: 'Pawan', age: 25 }
console.log(instance1.getData()); //{ name: 'Pawan', age: 25 }
