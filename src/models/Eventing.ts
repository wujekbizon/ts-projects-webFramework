// create type alias
type Callback = () => void;

export class Eventing {
  events: { [key: string]: Callback[] } = {};

  on(eventName: string, callback: Callback): void {
    const handlers = this.events[eventName] || [];
    handlers.push(callback);
    this.events[eventName] = handlers;
  }

  trigger(eventName: string): void {
    const handlers = this.events[eventName];
    // check if handlers is define and if it is an array
    if (!handlers || handlers.length === 0) {
      return;
    }

    // if we got handlers with callbacks
    handlers.forEach((callback) => {
      callback();
    });
  }
}
