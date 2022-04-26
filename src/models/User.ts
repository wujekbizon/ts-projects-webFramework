import axios, { AxiosResponse } from 'axios';

interface UserProps {
  // mark properties as optional
  name?: string;
  age?: number;
  id?: number;
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
  fetch(): void {
    axios
      .get(`http://localhost:3000/users/${this.get('id')}`)
      .then((response: AxiosResponse): void => {
        this.set(response.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }
  save(): void {
    const id = this.get('id');

    if (id) {
      axios.put(`http://localhost:3000/users/${id}`, this.data);
    } else {
      axios.post('http://localhost:3000/users', this.data);
    }
  }
}
