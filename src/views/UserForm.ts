import { View } from './View';
import { User, UserProps } from '../models/User';

export class UserForm extends View<User, UserProps> {
  eventsMap(): { [key: string]: () => void } {
    return {
      'click:.set-age': this.onSetAgeClick,
      'click:.set-name': this.onSetNameClick,
      'click:.save-user': this.onSaveClick,
    };
  }

  onSaveClick = (): void => {
    this.model.save();
  };

  onSetAgeClick = (): void => {
    this.model.setRandomAge();
  };

  onSetNameClick = (): void => {
    const input = this.parent.querySelector('input');

    if (input) {
      const name = input.value;
      this.model.set({ name });
    }
  };

  template(): string {
    return `
    <div>
        <label for="name">Name</label>
        <input type="text" id="name" placeholder="${this.model.get('name')}" />
        <button class="set-name">Update Name</button>
        <br>
        <button class="set-age">Set Random Age</button>
        <button class="save-user">Save User</button>
    </div>
  `;
  }
}
