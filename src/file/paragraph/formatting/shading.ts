// http://officeopenxml.com/WPalignment.php
import {XmlAttributeComponent, XmlComponent} from "file/xml-components";

export enum ShadingOptions {
    CLEAR = "clear",
    SOLID = "solid",
}

export class ShadingAttributes extends XmlAttributeComponent<{ readonly val: ShadingOptions }> {
    protected readonly xmlKeys = {val: "w:val", color: "w:color", fill: "w:fill"};
}

export class Shading extends XmlComponent {
    constructor(val?: string, color?: string, fill?: string) {
        super("w:shd");

        this.root.push(new ShadingAttributes({
            val: val || ShadingOptions.CLEAR,
            color: color || 'auto',
            fill: fill || 'FFFF00'
        }));
    }
}
