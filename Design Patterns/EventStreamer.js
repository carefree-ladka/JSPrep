class EventSteamer {
  constructor() {
    this.listeners = {};
  }

  on = (event, listener) => {
    if (!this.listeners[event]) {
      this.listeners[event] = [];
    }
    this.listeners[event].push(listener);
  };

  off = (event, listener) => {
    if (this.listeners[event]) {
      this.listeners[event] = this.listeners[event].filter(
        (fn) => fn !== listener
      );
    }
  };

  emit = (event, data) => {
    if (this.listeners[event]) {
      this.listeners[event].forEach((listener) => listener(data));
    }
  };
}

const es = new EventSteamer();

function handleData(data) {
  console.log("Receiver data", data);
}

es.on("data", handleData);
es.emit("data", "Sample Data"); //Receiver data Sample Data
es.off("data", handleData);
es.emit("data", "Another Data"); //No data as the handler has been removed
