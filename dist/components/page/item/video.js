import { BaseComponent } from "../../component.js";
export class VideoComponent extends BaseComponent {
    constructor(title, url) {
        super(`<section class="video">
            <div class="video__player">
                <iframe class="video__iframe"></iframe>
            </div>
            <h2 class="video__title"></h2>
        </section>`);
        const iframe = this.element.querySelector(".video__iframe");
        iframe.src = "https://www.youtube.com/embed/uv20S1lduU4";
        console.log(url);
        const titleElement = this.element.querySelector(".video__title");
        titleElement.textContent = title;
    }
}
