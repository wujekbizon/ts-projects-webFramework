export class UserForm {
  parent: Element;

  template(): string {
    return `
    <div>
      <h1>User Form</h1>
      <label id="name">Name</label>
      <input type="text" id="name" />
    <div/>
  `;
  }

  render(): void {}
}
