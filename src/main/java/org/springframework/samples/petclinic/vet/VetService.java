package org.springframework.samples.petclinic.vet;

import com.vaadin.flow.server.auth.AnonymousAllowed;

import dev.hilla.BrowserCallable;
import dev.hilla.crud.ListRepositoryService;

@BrowserCallable
@AnonymousAllowed
public class VetService extends ListRepositoryService<Vet, Integer, VetRepository> {

}
