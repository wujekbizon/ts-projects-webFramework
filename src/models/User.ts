import { Eventing } from './Eventing';
import { Sync } from './Sync';

export interface UserProps {
  // mark properties as optional
  name?: string;
  age?: number;
  id?: number;
}

export class User {
  public events: Eventing = new Eventing();
  public sync: Sync;

  constructor(private data: UserProps) {}

  get(propName: string): string | number {
    return this.data[propName];
  }

  set(update: UserProps): void {
    Object.assign(this.data, update);
  }
}
