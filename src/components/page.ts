export class PageComponent {
  private element: HTMLUListElement;

  constructor() {
    this.element = document.createElement("ul");
    this.element.setAttribute("class", "page");
    this.element.textContent = "PageComponent";
  }

  // parameter(요소를 부착할 부모 요소, 부착 위치)
  attachTo(parent: HTMLElement, position: InsertPosition = "afterbegin") {
    parent.insertAdjacentElement(position, this.element);
  }
}
