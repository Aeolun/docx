import { XmlComponent } from "../../../file/xml-components";
import { WidthType } from "../table-cell";
import { TableCellMargin } from "./table-cell-margin";
import { ITableFloatOptions } from "./table-float-properties";
export declare class TableProperties extends XmlComponent {
    private readonly cellMargin;
    constructor();
    setWidth(width: number | string, type?: WidthType): TableProperties;
    setFixedWidthLayout(): TableProperties;
    setBorder(): TableProperties;
    readonly CellMargin: TableCellMargin;
    setTableFloatProperties(tableFloatOptions: ITableFloatOptions): TableProperties;
}
