package org.springframework.samples.petclinic.vet;

import com.vaadin.flow.server.auth.AnonymousAllowed;

import dev.hilla.BrowserCallable;
import dev.hilla.crud.CrudRepositoryService;

@BrowserCallable
@AnonymousAllowed
public class VetService extends CrudRepositoryService<Vet, Integer, VetRepository> {

}
