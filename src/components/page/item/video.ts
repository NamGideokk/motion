// <iframe
//   width="1246"
//   height="710"
//   src="https://www.youtube.com/embed/uv20S1lduU4"
//   title="Top CSS & Javascript Animation & Hover Effects | April 2022"
//   frameborder="0"
//   allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
//   allowfullscreen
// ></iframe>

import { BaseComponent } from "../../component.js";

export class VideoComponent extends BaseComponent<HTMLElement> {
  constructor(title: string, url: string) {
    super(`<section class="video">
            <div class="video__player">
                <iframe class="video__iframe"></iframe>
            </div>
            <h2 class="video__title"></h2>
        </section>`);

    const iframe = this.element.querySelector(
      ".video__iframe"
    )! as HTMLIFrameElement;
    iframe.src = "https://www.youtube.com/embed/uv20S1lduU4"; // url -> video ID extraction -> embed
    console.log(url);

    const titleElement = this.element.querySelector(
      ".video__title"
    )! as HTMLHeadingElement;
    titleElement.textContent = title;
  }
}
