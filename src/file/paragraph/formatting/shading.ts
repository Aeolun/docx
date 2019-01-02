// http://officeopenxml.com/WPalignment.php
import { XmlAttributeComponent, XmlComponent } from "file/xml-components";

export enum ShadingOptions {
    CLEAR = "clear",
    SOLID = "solid",
}

export class ShadingAttributes extends XmlAttributeComponent<{ readonly val?: string; readonly color?: string; readonly fill?: string }> {
    protected readonly xmlKeys = { val: "w:val", color: "w:color", fill: "w:fill" };
}

export class Shading extends XmlComponent {
    constructor() {
        super("w:shd");
    }

    public setShading(val?: string, color?: string, fill?: string): void {
        this.root.push(
            new ShadingAttributes({
                val: val || ShadingOptions.CLEAR,
                color: color || "auto",
                fill: fill || "FFFF00",
            }),
        );
    }
}
