class Observer {
  update = (message) => {
    console.log("Received Message", message);
  };
}

class Subject {
  constructor() {
    this.observers = [];
  }

  addObserver = (observer) => {
    this.observers.push(observer);
  };

  removerObserver = (observer) => {
    this.observers = this.observers.filter((obs) => obs !== observer);
  };

  notifyObservers = (message) => {
    this.observers.forEach((obs) => obs.update(message));
  };
}

const subject = new Subject();

const ob1 = new Observer();
const ob2 = new Observer();
subject.addObserver(ob1);
subject.addObserver(ob2);

subject.notifyObservers("Hello Observers");
subject.removerObserver(ob1);
subject.notifyObservers("Observers, are you still there?");
