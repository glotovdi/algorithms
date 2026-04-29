class Observerable {
  public observers: any[];
  constructor() {
    this.observers = [];
  }

  subscribe(fn) {
    this.observers.push(fn);

    return () => {
      this.unsubscribe(fn);
    };
  }

  unsubscribe(fn) {
    this.observers = this.observers.filter((obs) => obs !== fn);
  }

  next(data) {
    this.observers.forEach((fn) => {
      fn(data);
    });
  }
}

const obs = new Observerable();

const subscription1 = obs.subscribe((data) => console.log("Observer 1:", data));
const subscription2 = obs.subscribe((data) => console.log("Observer 2:", data));

obs.next("Hello World!");
