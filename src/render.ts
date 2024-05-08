
export interface Renderable {

    render(parent:HTMLElement): void;

}

export class Root implements Renderable{

    id:string = "root";
    children:Renderable[] = [];

    constructor() {
    }

    render(_:HTMLElement=null): void {
        const element = document.getElementById(this.id);
        this.children.forEach(child=>child.render(element));
    }

}
