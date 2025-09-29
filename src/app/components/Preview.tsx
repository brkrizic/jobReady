import { useRef } from "react";
import { saveToLocalStorage } from "../lib/storage";
import { cvType } from "../types/cvType";
import Minimalist from "./templatesData/Minimalist";
import { useReactToPrint } from "react-to-print";
import { Templates } from "./types";
import ModernProfessional from "./templatesData/MondernProfessional";
import CreativeHighlight from "./templatesData/CreativeHighlite";

type PreviewProps = {
    cv: cvType,
    template: Templates
}
export default function Preview({ cv, template }: PreviewProps) {
    const componentRef = useRef<HTMLDivElement>(null);

    const handlePrint = useReactToPrint({
        contentRef: componentRef,
        documentTitle: `${cv.header.fullname}-CV`,
    } as any);

    return (
        <section>
            {cv && (
                <>
                    <button className="mr-4 " onClick={() => saveToLocalStorage("user", cv)}>Save</button>
                    
                    <button onClick={handlePrint} className="mt-4">Download as PDF</button>

                    <div ref={componentRef}>
                        {template === "Minimalist" && <Minimalist cv={cv} />}
                        {template === "ModernProfessional" && <ModernProfessional cv={cv} />}
                        {template === "CreativeHighlight" && <CreativeHighlight cv={cv} />}
                    </div>
                </>
            )}
        </section>
    );
}