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
    iframe.src = this.convertToEmbeddedURL(url);

    const titleElement = this.element.querySelector(
      ".video__title"
    )! as HTMLHeadingElement;
    titleElement.textContent = title;
  }

  private convertToEmbeddedURL(url: string): string {
    // 정규표현식 Regex 사용
    const regExp =
      /^(?:https?:\/\/)?(?:www\.)?(?:(?:youtube.com\/(?:(?:watch\?v=)|(?:embed\/))([a-zA-Z0-9-|_]{11}))|(?:youtu.be\/([a-zA-Z0-9-|_]{11})))/;
    const match = url.match(regExp);

    const videoId = match ? match[1] || match[2] : undefined;
    if (videoId) {
      return `https://www.youtube.com/embed/${videoId}`;
    }
    return url;
  }
}

// 사용자의 주소 input
// https://www.youtube.com/watch?v=uv20S1lduU4
// https://youtu.be/uv20S1lduU4

// output
// https://www.youtube.com/embed/uv20S1lduU4
