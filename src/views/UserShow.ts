import { User, UserProps } from '../models/User';
import { View } from './View';

export class UserShow extends View<User, UserProps> {
  template(): string {
    return `
    <div>
      <h1>User Detail</h1>
      <h2>User Name: ${this.model.get('name')}</h2>
      <p>$User Age: {this.model.get('age')}</p>
    </div>
    `;
  }
}
