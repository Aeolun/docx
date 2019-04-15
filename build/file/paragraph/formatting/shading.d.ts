import { XmlAttributeComponent, XmlComponent } from "../../../file/xml-components";
export declare enum ShadingOptions {
    CLEAR = "clear",
    SOLID = "solid"
}
export declare class ShadingAttributes extends XmlAttributeComponent<{
    readonly val?: string;
    readonly color?: string;
    readonly fill?: string;
}> {
    protected readonly xmlKeys: {
        val: string;
        color: string;
        fill: string;
    };
}
export declare class Shading extends XmlComponent {
    constructor();
    setShading(val?: string, color?: string, fill?: string): void;
}
