class PubSub {
  constructor() {
    this.subscribers = {};
  }

  subscribe = (event, cb) => {
    if (!this.subscribers[event]) {
      this.subscribers[event] = [];
    }
    this.subscribers[event].push(cb);
  };

  publish = (event, data) => {
    if (this.subscribers[event]) {
      this.subscribers[event].forEach((cb) => cb(data));
    }
  };

  unSubscribe = (event, callback) => {
    if (this.subscribers[event]) {
      this.subscribers[event] = this.subscribers[event].filter(
        (cb) => cb !== callback
      );
    }
  };
}

const ps = new PubSub();

function subscriber1(data) {
  console.log("Subscriber1 recieved data", data);
}

function subscriber2(data) {
  console.log("Subscriber2 recieved data", data);
}

ps.subscribe("myEvent", subscriber1); //Subscriber1 recieved data Hello Love...
ps.subscribe("myEvent", subscriber2); //Subscriber2 recieved data Hello Love...
ps.publish("myEvent", "Hello Love...");

ps.unSubscribe("myEvent", subscriber1);

ps.publish("myEvent", "unsubscribed from s1"); //Subscriber2 recieved data unsubscribed from s1
