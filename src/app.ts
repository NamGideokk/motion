import { ImageComponent } from "./components/page/item/image.js";
import { PageComponent } from "./components/page/page.js";

class App {
  private readonly page: PageComponent;

  constructor(appRoot: HTMLElement) {
    this.page = new PageComponent();
    this.page.attachTo(appRoot);

    const image = new ImageComponent(
      "Image Title",
      "https://picsum.photos/600/300"
    );
    image.attachTo(appRoot, "beforeend");
  }
}

// null이 아니고 HTML요소라고 선언
new App(document.querySelector(".document")! as HTMLElement);
