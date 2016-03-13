package com.cactus.web.rest;

import com.codahale.metrics.annotation.Timed;
import com.cactus.domain.Lieu;
import com.cactus.service.LieuService;
import com.cactus.web.rest.util.HeaderUtil;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.http.HttpHeaders;
import org.springframework.http.HttpStatus;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import javax.inject.Inject;
import javax.validation.Valid;
import java.net.URI;
import java.net.URISyntaxException;
import java.util.List;
import java.util.Optional;

/**
 * REST controller for managing Lieu.
 */
@RestController
@RequestMapping("/api")
public class LieuResource {

    private final Logger log = LoggerFactory.getLogger(LieuResource.class);
        
    @Inject
    private LieuService lieuService;
    
    /**
     * POST  /lieus -> Create a new lieu.
     */
    @RequestMapping(value = "/lieus",
        method = RequestMethod.POST,
        produces = MediaType.APPLICATION_JSON_VALUE)
    @Timed
    public ResponseEntity<Lieu> createLieu(@Valid @RequestBody Lieu lieu) throws URISyntaxException {
        log.debug("REST request to save Lieu : {}", lieu);
        if (lieu.getId() != null) {
            return ResponseEntity.badRequest().headers(HeaderUtil.createFailureAlert("lieu", "idexists", "A new lieu cannot already have an ID")).body(null);
        }
        Lieu result = lieuService.save(lieu);
        return ResponseEntity.created(new URI("/api/lieus/" + result.getId()))
            .headers(HeaderUtil.createEntityCreationAlert("lieu", result.getId().toString()))
            .body(result);
    }

    /**
     * PUT  /lieus -> Updates an existing lieu.
     */
    @RequestMapping(value = "/lieus",
        method = RequestMethod.PUT,
        produces = MediaType.APPLICATION_JSON_VALUE)
    @Timed
    public ResponseEntity<Lieu> updateLieu(@Valid @RequestBody Lieu lieu) throws URISyntaxException {
        log.debug("REST request to update Lieu : {}", lieu);
        if (lieu.getId() == null) {
            return createLieu(lieu);
        }
        Lieu result = lieuService.save(lieu);
        return ResponseEntity.ok()
            .headers(HeaderUtil.createEntityUpdateAlert("lieu", lieu.getId().toString()))
            .body(result);
    }

    /**
     * GET  /lieus -> get all the lieus.
     */
    @RequestMapping(value = "/lieus",
        method = RequestMethod.GET,
        produces = MediaType.APPLICATION_JSON_VALUE)
    @Timed
    public List<Lieu> getAllLieus() {
        log.debug("REST request to get all Lieus");
        return lieuService.findAll();
            }

    /**
     * GET  /lieus/:id -> get the "id" lieu.
     */
    @RequestMapping(value = "/lieus/{id}",
        method = RequestMethod.GET,
        produces = MediaType.APPLICATION_JSON_VALUE)
    @Timed
    public ResponseEntity<Lieu> getLieu(@PathVariable String id) {
        log.debug("REST request to get Lieu : {}", id);
        Lieu lieu = lieuService.findOne(id);
        return Optional.ofNullable(lieu)
            .map(result -> new ResponseEntity<>(
                result,
                HttpStatus.OK))
            .orElse(new ResponseEntity<>(HttpStatus.NOT_FOUND));
    }

    /**
     * DELETE  /lieus/:id -> delete the "id" lieu.
     */
    @RequestMapping(value = "/lieus/{id}",
        method = RequestMethod.DELETE,
        produces = MediaType.APPLICATION_JSON_VALUE)
    @Timed
    public ResponseEntity<Void> deleteLieu(@PathVariable String id) {
        log.debug("REST request to delete Lieu : {}", id);
        lieuService.delete(id);
        return ResponseEntity.ok().headers(HeaderUtil.createEntityDeletionAlert("lieu", id.toString())).build();
    }
}
