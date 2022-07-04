import { BaseComponent } from "../../component.js";

export class ImageComponent extends BaseComponent<HTMLElement> {
  // 사용자에게 전달받은 데이터(string)을 innerHTML에 그대로 넣는건 위험하다.
  constructor(title: string, url: string) {
    super(`<section class="image">
            <div class="image__holder">
                <img class="image__thumbnail" />
            </div>
            <h2 class="page-item__title image__title"></h2>
        </section>`);

    const imageElement = this.element.querySelector(
      ".image__thumbnail"
    )! as HTMLImageElement;
    imageElement.src = url;
    imageElement.alt = title;

    const titleElement = this.element.querySelector(
      ".image__title"
    )! as HTMLHeadingElement;
    titleElement.textContent = title;
  }
}
