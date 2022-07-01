import { ImageComponent } from "./components/page/item/image.js";
import { NoteComponent } from "./components/page/item/note.js";
import { TodoComponent } from "./components/page/item/todo.js";
import { VideoComponent } from "./components/page/item/video.js";
import { PageComponent } from "./components/page/page.js";
class App {
    constructor(appRoot) {
        this.page = new PageComponent();
        this.page.attachTo(appRoot);
        const image = new ImageComponent("Random generater IMAGE", "https://picsum.photos/600/300");
        this.page.addChild(image);
        const video = new VideoComponent("new video title", "https://youtu.be/uv20S1lduU4");
        this.page.addChild(video);
        const note = new NoteComponent("note title", "note body");
        this.page.addChild(note);
        const todo = new TodoComponent("todo title", "todo item");
        this.page.addChild(todo);
    }
}
new App(document.querySelector(".document"));
