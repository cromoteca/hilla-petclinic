import { ExperimentalAutoCrud } from "@hilla/react-crud";
import { VetService } from "Frontend/generated/endpoints";
import VetModel from "Frontend/generated/org/springframework/samples/petclinic/vet/VetModel.js";

export default function VetEdit() {
    return (
        <section className="flex flex-col p-m gap-m">
            <ExperimentalAutoCrud service={VetService} model={VetModel} />
        </section>
    );
}
