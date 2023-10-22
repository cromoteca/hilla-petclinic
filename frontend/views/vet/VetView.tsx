import { AutoGrid } from '@hilla/react-crud';
import { VetService } from 'Frontend/generated/endpoints';
import VetModel from 'Frontend/generated/org/springframework/samples/petclinic/vet/VetModel';

export default function VetView() {
  return (
    <>
      <section className="flex p-m gap-m items-end">
        <AutoGrid service={VetService} model={VetModel} />
      </section>
    </>
  );
}
