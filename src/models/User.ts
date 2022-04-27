import { Model } from './Model';

export interface UserProps {
  // mark properties as optional
  name?: string;
  age?: number;
  id?: number;
}

export class User extends Model<UserProps> {}
