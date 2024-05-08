export interface Renderable {
    render(parent: HTMLElement): void;
}
export declare class Root implements Renderable {
    id: string;
    children: Renderable[];
    constructor(id?: string);
    render(_?: HTMLElement): void;
}
