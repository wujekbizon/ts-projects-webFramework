export class UserForm {
  constructor(public parent: Element) {}

  eventsMap(): { [key: string]: () => void } {
    return {
      'click:button': this.onButtonClick,
      'mouseenter:h1': this.onHeaderHover,
    };
  }

  onButtonClick(): void {
    console.log('Hi there');
  }

  onHeaderHover(): void {
    console.log('Hover over h1');
  }

  template(): string {
    return `
    <div>
      <h1>User Form</h1>
      <form>
        <label for="name">Name</label>
        <input type="text" id="name" />
        <button>Submit</button>
      </form>
      <button>Click me</button>
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
    const templateElement = document.createElement('template');
    templateElement.innerHTML = this.template();
    this.bindEvents(templateElement.content);
    this.parent.append(templateElement.content);
  }
}
