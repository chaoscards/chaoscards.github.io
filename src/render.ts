
export interface Renderable {

    render(parent:HTMLElement): void;

}

export class Root implements Renderable{

    id:string;
    children:Renderable[];

    constructor(id:string="root") {
        this.id = id
    }

    render(_:HTMLElement=null): void {
        const element = document.getElementById(this.id);
        this.children.forEach(child=>child.render(element));
    }

}
