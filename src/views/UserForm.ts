import { View } from './View';

export class UserForm extends View {
  eventsMap(): { [key: string]: () => void } {
    return {
      'click:.set-age': this.onSetAgeClick,
      'click:.set-name': this.onSetNameClick,
    };
  }

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
      <h1>User Form</h1>
      <div>User name:${this.model.get('name')} </div>
      <div>User age:${this.model.get('age')} </div>
        <label for="name">Name</label>
        <input type="text" id="name" />
        <button class="set-name">Update Name</button>
        <br>
      <button class="set-age">Set Random Age</button>
    </div>
  `;
  }
}
