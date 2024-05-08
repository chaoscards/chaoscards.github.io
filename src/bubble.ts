import { Renderable } from "./render";
import "./styles/bubble.scss";

export class Bubble implements Renderable {
    
    children:Renderable[];
    className:string = 'bubble';
    
    render(parent: HTMLElement): void {

        // create self element 
        const element = document.createElement("div");
        element.className = this.className;
        element.innerHTML = '<div class="bubble-sub">Hello</div>'
        
        // add self to parent
        parent.appendChild(element);
        
        // call children render
        this.children.forEach(child=>child.render(element));

    }

}
