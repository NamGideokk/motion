import { PageComponent } from "./components/page.js";

class App {
  private readonly page: PageComponent;

  constructor(appRoot: HTMLElement) {
    this.page = new PageComponent();
    this.page.attachTo(appRoot);
  }
}

// null이 아니고 HTML요소라고 선언
new App(document.querySelector(".document")! as HTMLElement);
