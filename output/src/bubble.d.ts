import { Renderable } from "./render";
export declare class Bubble implements Renderable {
    children: Renderable[];
    className: string;
    render(parent: HTMLElement): void;
}
