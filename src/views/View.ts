import { Model } from '../models/Model';

// generic constraints
export abstract class View<T extends Model<K>, K> {
  regions: { [key: string]: Element } = {};

  constructor(public parent: Element, public model: T) {
    this.bindModel();
  }

  abstract template(): string;

  regionsMap(): { [key: string]: string } {
    return {};
  }

  eventsMap(): { [key: string]: () => void } {
    return {};
  }

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

  mapRegions(fragment: DocumentFragment): void {
    const regionsMap = this.regionsMap();
    for (let key in regionsMap) {
      const selector = regionsMap[key];
      const element = fragment.querySelector(selector);

      if (element) {
        this.regions[key] = element;
      }
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
    this.mapRegions(templateElement.content);

    // append to parent element
    this.parent.append(templateElement.content);
  }
}
