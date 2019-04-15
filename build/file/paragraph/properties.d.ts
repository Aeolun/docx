import { XmlComponent } from "../../file/xml-components";
import { Border } from "./formatting/border";
import { Shading } from "./formatting/shading";
export declare class ParagraphProperties extends XmlComponent {
    readonly paragraphBorder: Border;
    readonly paragraphShading: Shading;
    constructor();
    createBorder(): void;
    createShading(): void;
    push(item: XmlComponent): void;
}
