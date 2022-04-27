export class Attributes<T> {
  constructor(private data: T) {}

  // advanced generic constraint
  get = <K extends keyof T>(key: K): T[K] => {
    return this.data[key];
  };

  set(update: T): void {
    Object.assign(this.data, update);
  }
  // method to return all data all once
  getAll(): T {
    return this.data;
  }
}
