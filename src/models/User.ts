interface UserProps {
  // mark properties as optional
  name?: string;
  age?: number;
}

// create type alias
type Callback = () => void;

export class User {
  events: { [key: string]: Callback[] } = {};

  constructor(private data: UserProps) {}

  get(propName: string): string | number {
    return this.data[propName];
  }

  set(update: UserProps): void {
    Object.assign(this.data, update);
  }

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
