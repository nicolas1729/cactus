package com.cactus.web.rest;

import com.codahale.metrics.annotation.Timed;
import com.cactus.domain.Personnage;
import com.cactus.repository.PersonnageRepository;
import com.cactus.web.rest.util.HeaderUtil;
import com.cactus.web.rest.util.PaginationUtil;
import com.cactus.web.rest.dto.PersonnageDTO;
import com.cactus.web.rest.mapper.PersonnageMapper;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.http.HttpHeaders;
import org.springframework.http.HttpStatus;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.transaction.annotation.Transactional;
import org.springframework.web.bind.annotation.*;

import javax.inject.Inject;
import javax.validation.Valid;
import java.net.URI;
import java.net.URISyntaxException;
import java.util.LinkedList;
import java.util.List;
import java.util.Optional;
import java.util.stream.Collectors;

/**
 * REST controller for managing Personnage.
 */
@RestController
@RequestMapping("/api")
public class PersonnageResource {

    private final Logger log = LoggerFactory.getLogger(PersonnageResource.class);
        
    @Inject
    private PersonnageRepository personnageRepository;
    
    //@Inject
    //private PersonnageMapper personnageMapper;
    
    /**
     * POST  /personnages -> Create a new personnage.
     */
    @RequestMapping(value = "/personnages",
        method = RequestMethod.POST,
        produces = MediaType.APPLICATION_JSON_VALUE)
    @Timed
    public ResponseEntity<Personnage> createPersonnage(@Valid @RequestBody Personnage personnage) throws URISyntaxException {
        log.debug("REST request to save Personnage : {}", personnage);
        if (personnage.getId() != null) {
            return ResponseEntity.badRequest().headers(HeaderUtil.createFailureAlert("personnage", "idexists", "A new personnage cannot already have an ID")).body(null);
        }
        //Personnage personnage = personnageMapper.personnageToPersonnage(personnage);
        Personnage result = personnageRepository.save(personnage);
        //PersonnageDTO result = personnageMapper.personnageToPersonnageDTO(personnage);
        return ResponseEntity.created(new URI("/api/personnages/" + result.getId()))
            .headers(HeaderUtil.createEntityCreationAlert("personnage", result.getId().toString()))
            .body(result);
    }

    /**
     * PUT  /personnages -> Updates an existing personnage.
     */
    @RequestMapping(value = "/personnages",
        method = RequestMethod.PUT,
        produces = MediaType.APPLICATION_JSON_VALUE)
    @Timed
    public ResponseEntity<Personnage> updatePersonnage(@Valid @RequestBody Personnage personnage) throws URISyntaxException {
        log.debug("REST request to update Personnage : {}", personnage);
        if (personnage.getId() == null) {
            return createPersonnage(personnage);
        }
        //Personnage personnage = personnageMapper.personnageToPersonnage(personnage);
        Personnage result = personnageRepository.save(personnage);
        //Personnage result = personnageMapper.personnageToPersonnageDTO(personnage);
        return ResponseEntity.ok()
            .headers(HeaderUtil.createEntityUpdateAlert("personnage", personnage.getId().toString()))
            .body(result);
    }

    /**
     * GET  /personnages -> get all the personnages.
     */
    @RequestMapping(value = "/personnages",
        method = RequestMethod.GET,
        produces = MediaType.APPLICATION_JSON_VALUE)
    @Timed
    @Transactional(readOnly = true)
    public ResponseEntity<List<Personnage>> getAllPersonnages(Pageable pageable)
        throws URISyntaxException {
        log.debug("REST request to get a page of Personnages");
        Page<Personnage> page = personnageRepository.findAll(pageable); 
        HttpHeaders headers = PaginationUtil.generatePaginationHttpHeaders(page, "/api/personnages");
        return new ResponseEntity<>(page.getContent().stream()
            //.map(personnageMapper::personnageToPersonnageDTO)
            .collect(Collectors.toCollection(LinkedList::new)), headers, HttpStatus.OK);
    }

    /**
     * GET  /personnages/:id -> get the "id" personnage.
     */
    @RequestMapping(value = "/personnages/{id}",
        method = RequestMethod.GET,
        produces = MediaType.APPLICATION_JSON_VALUE)
    @Timed
    public ResponseEntity<Personnage> getPersonnage(@PathVariable String id) {
        log.debug("REST request to get Personnage : {}", id);
        Personnage personnage = personnageRepository.findOne(id);
        //PersonnageDTO personnage = personnageMapper.personnageToPersonnageDTO(personnage);
        return Optional.ofNullable(personnage)
            .map(result -> new ResponseEntity<>(
                result,
                HttpStatus.OK))
            .orElse(new ResponseEntity<>(HttpStatus.NOT_FOUND));
    }

    /**
     * DELETE  /personnages/:id -> delete the "id" personnage.
     */
    @RequestMapping(value = "/personnages/{id}",
        method = RequestMethod.DELETE,
        produces = MediaType.APPLICATION_JSON_VALUE)
    @Timed
    public ResponseEntity<Void> deletePersonnage(@PathVariable String id) {
        log.debug("REST request to delete Personnage : {}", id);
        personnageRepository.delete(id);
        return ResponseEntity.ok().headers(HeaderUtil.createEntityDeletionAlert("personnage", id.toString())).build();
    }
}
