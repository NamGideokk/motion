export interface Component {
  attachTo(parent: HTMLElement, position?: InsertPosition): void;
  removeFrom(parent: HTMLElement): void;
  attach(coponent: Component, position?: InsertPosition): void;
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

  removeFrom(parent: HTMLElement) {
    // 부모요소 인자값이 현재 요소의 부모가 맞는지 확인
    if (parent !== this.element.parentElement) {
      throw new Error("Parent mismatch.");
    }
    parent.removeChild(this.element);
  }

  attach(coponent: Component, position?: InsertPosition) {
    coponent.attachTo(this.element, position);
  }
}
