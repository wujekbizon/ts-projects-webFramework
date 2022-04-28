import { Model } from '../models/Model';

// generic constraints
export abstract class View<T extends Model<K>, K> {
  constructor(public parent: Element, public model: T) {
    this.bindModel();
  }

  abstract template(): string;
  abstract eventsMap(): { [key: string]: () => void };

  bindModel(): void {
    this.model.on('change', () => {
      this.render();
    });
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
