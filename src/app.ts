import { ImageComponent } from "./components/page/item/image.js";
import { NoteComponent } from "./components/page/item/note.js";
import { TodoComponent } from "./components/page/item/todo.js";
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

    const note = new NoteComponent("note title", "note body");
    note.attachTo(appRoot, "beforeend");

    const todo = new TodoComponent("todo title", "todo item");
    todo.attachTo(appRoot, "beforeend");
  }
}

// null이 아니고 HTML요소라고 선언
new App(document.querySelector(".document")! as HTMLElement);
