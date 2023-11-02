import { AutoGrid } from '@hilla/react-crud';
import { VetService } from 'Frontend/generated/endpoints.js';
import VetModel from 'Frontend/generated/org/springframework/samples/petclinic/vet/VetModel.js';

export default function VetView() {
  return (
    <section className="flex flex-col p-m gap-m">
      <AutoGrid service={VetService} model={VetModel} />
    </section>
  );
}
