import { User } from '../models/User';

export class UserForm {
  constructor(public parent: Element, public model: User) {
    this.bindModel();
  }

  bindModel(): void {
    this.model.on('change', () => {
      this.render();
    });
  }

  eventsMap(): { [key: string]: () => void } {
    return {
      'click:.set-age': this.onSetAgeClick,
    };
  }

  onSetAgeClick = (): void => {
    this.model.setRandomAge();
  };

  template(): string {
    return `
    <div>
      <h1>User Form</h1>
      <div>User name:${this.model.get('name')} </div>
      <div>User age:${this.model.get('age')} </div>
      <br>
      <form>
        <label for="name">Name</label>
        <input type="text" id="name" />
        <button>Submit</button>
      </form>
      <button class="set-age">Set Random Age</button>
    </div>
  `;
  }

  bindEvents(fragment: DocumentFragment): void {
    const eventsMap = this.eventsMap();
    for (let eventKey in eventsMap) {
      const [eventName, selector] = eventKey.split(':');
      // look for a fragment that is a reference to HTML and
      // find all elements inside that match selector, recive array
      // then iterate over for every element that match , attach whatever event has referenced
      fragment.querySelectorAll(selector).forEach((element) => {
        element.addEventListener(eventName, eventsMap[eventKey]);
      });
    }
  }

  render(): void {
    // empty out parent element
    this.parent.innerHTML = '';
    // render element
    const templateElement = document.createElement('template');
    templateElement.innerHTML = this.template();
    // bind event
    this.bindEvents(templateElement.content);
    // append to parent element
    this.parent.append(templateElement.content);
  }
}
