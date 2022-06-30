export interface Component {
  attachTo(parent: HTMLElement, position?: InsertPosition): void;
}

/**
 * Encapsulate the HTML element creation (HTML 요소를 만드는걸 캡슐화)
 */
export class BaseComponent<T extends HTMLElement> implements Component {
  // protected 요소안의 상태 변경은 가능하지만 요소 자체의 변경은 막기 위해 설정
  protected readonly element: T;

  constructor(htmlString: string) {
    const template = document.createElement("template");
    template.innerHTML = htmlString;
    this.element = template.content.firstElementChild! as T;
  }

  // parameter(자신을 부착할 부모 요소, 부착 위치)
  attachTo(parent: HTMLElement, position: InsertPosition = "afterbegin") {
    parent.insertAdjacentElement(position, this.element);
  }
}
