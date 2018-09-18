import { BaseFile } from "./base-file";
import { IPropertiesOptions } from "./core-properties";
import { Document } from "./document";
import { SectionPropertiesOptions } from "./document/body/section-properties";

export class File extends BaseFile {
    constructor(
        options: IPropertiesOptions = {
            creator: "Un-named",
            revision: "1",
            lastModifiedBy: "Un-named",
        },
        sectionPropertiesOptions: SectionPropertiesOptions = {},
    ) {
        super(options);

        this.addDefaultRelationships();
        this.createHeader();
        this.createFooter();

        sectionPropertiesOptions = {
            ...sectionPropertiesOptions,
            headers: this.headers.map((header) => ({
                headerId: header.header.Header.ReferenceId,
                headerType: header.type,
            })),
            footers: this.footers.map((footer) => ({
                footerId: footer.footer.Footer.ReferenceId,
                footerType: footer.type,
            })),
        };

        this.document = new Document(sectionPropertiesOptions);
    }
}
