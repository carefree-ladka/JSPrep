const STATE = Object.freeze({
  PENDING: "pending",
  SUCCESS: "fulfilled",
  REJECTED: "rejected",
});

class MyPromise {
  #value = null;
  #state = STATE.PENDING;
  #successcbs = [];
  #rejectedcbs = [];
  constructor(executor) {
    try {
      executor(
        (val) => this.#resolve(val),
        (val) => this.#reject(val)
      );
    } catch (e) {
      this.#reject(e);
    }
  }

  #resolve(val) {
    this.#value = val;
    this.#state = STATE.SUCCESS;
    this.#successcbs.forEach((cb) => cb());
  }

  #reject(val) {
    this.#value = val;
    this.#state = STATE.REJECTED;
    this.#rejectedcbs.forEach((cb) => cb());
  }

  then(onFulfilled, onRejected) {
    return new MyPromise((resolve, reject) => {
      const successCb = () => {
        if (!onFulfilled) return resolve(this.#value);
        queueMicrotask(() => {
          try {
            resolve(onFulfilled(this.#value));
          } catch (e) {
            reject(e);
          }
        });
      };

      const rejectCb = () => {
        if (!onRejected) return reject(this.#value);
        queueMicrotask(() => {
          try {
            resolve(onRejected(this.#value));
          } catch (e) {
            reject(e);
          }
        });
      };

      switch (this.#state) {
        case STATE.PENDING:
          this.#successcbs.push(successCb);
          this.#rejectedcbs.push(rejectCb);
          break;
        case STATE.SUCCESS:
          successCb();
          break;
        case STATE.REJECTED:
          rejectCb();
          break;
        default:
          throw new Error("unknown state...");
      }
    });
  }

  catch(onRejected) {
    return this.then(null, onRejected);
  }

  finally(onFinally) {
    return this.then(
      (value) => {
        return MyPromise.resolve(onFinally()).then(() => value);
      },
      (reason) => {
        return MyPromise.resolve(onFinally()).then(() => {
          throw reason;
        });
      }
    );
  }

  static resolve(value) {
    return new MyPromise((resolve) => resolve(value));
  }

  static reject(reason) {
    return new MyPromise((_, reject) => reject(reason));
  }
}

const getUser = () => {
  return new MyPromise((resolve, reject) => {
    if (Math.random() * 5 > 6) {
      resolve("Hiii");
    } else {
      reject("Byeee");
    }
  });
};

getUser()
  .then((x) => console.log(x))
  .catch((e) => console.log(e))
  .finally(() => console.log("next..."))
  .finally(() => console.log('lol'))
