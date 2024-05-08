
import { Root } from "./render";
import { Bubble } from "./bubble";

const root = new Root();

root.children.push(new Bubble())

root.render();
