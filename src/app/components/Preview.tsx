import { cvType } from "../types/cvType";
import Minimalist from "./templates/Minimalist";

type PreviewProps = {
    cv: cvType
}
export default function Preview({ cv }: PreviewProps) {
    return (
        <section>
            {cv && (
                <Minimalist cv={cv}/>
            )}
        </section>
    );
}