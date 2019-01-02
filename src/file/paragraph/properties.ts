// http://officeopenxml.com/WPparagraphProperties.php
import { XmlComponent } from "file/xml-components";
import { Border } from "./formatting/border";
import { Shading } from "./formatting/shading";

export class ParagraphProperties extends XmlComponent {
    public readonly paragraphBorder: Border;
    public readonly paragraphShading: Shading;

    constructor() {
        super("w:pPr");
        this.paragraphBorder = new Border();
        this.paragraphShading = new Shading();
    }

    public createBorder(): void {
        this.push(this.paragraphBorder);
    }

    public createShading(): void {
        this.push(this.paragraphShading);
    }

    public push(item: XmlComponent): void {
        this.root.push(item);
    }
}
