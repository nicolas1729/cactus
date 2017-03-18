package com.legion.cactus.web.rest;

import com.codahale.metrics.annotation.Timed;
import com.legion.cactus.domain.Lieu;

import com.legion.cactus.repository.LieuRepository;
import com.legion.cactus.repository.search.LieuSearchRepository;
import com.legion.cactus.web.rest.util.HeaderUtil;
import com.legion.cactus.web.rest.util.PaginationUtil;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.http.HttpHeaders;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import javax.inject.Inject;
import javax.validation.Valid;
import java.net.URI;
import java.net.URISyntaxException;
import java.util.List;
import java.util.Optional;

import static org.elasticsearch.index.query.QueryBuilders.*;

/**
 * REST controller for managing Lieu.
 */
@RestController
@RequestMapping("/api")
public class LieuResource {

    private final Logger log = LoggerFactory.getLogger(LieuResource.class);
        
    @Inject
    private LieuRepository lieuRepository;

    @Inject
    private LieuSearchRepository lieuSearchRepository;

    /**
     * POST  /lieus : Create a new lieu.
     *
     * @param lieu the lieu to create
     * @return the ResponseEntity with status 201 (Created) and with body the new lieu, or with status 400 (Bad Request) if the lieu has already an ID
     * @throws URISyntaxException if the Location URI syntax is incorrect
     */
    @PostMapping("/lieus")
    @Timed
    public ResponseEntity<Lieu> createLieu(@Valid @RequestBody Lieu lieu) throws URISyntaxException {
        log.debug("REST request to save Lieu : {}", lieu);
        if (lieu.getId() != null) {
            return ResponseEntity.badRequest().headers(HeaderUtil.createFailureAlert("lieu", "idexists", "A new lieu cannot already have an ID")).body(null);
        }
        lieu = lieuRepository.save(lieu);
        lieuSearchRepository.save(lieu);
        return ResponseEntity.created(new URI("/api/lieus/" + lieu.getId()))
            .headers(HeaderUtil.createEntityCreationAlert("lieu", lieu.getId().toString()))
            .body(lieu);
    }

    /**
     * PUT  /lieus : Updates an existing lieu.
     *
     * @param lieu the lieu to update
     * @return the ResponseEntity with status 200 (OK) and with body the updated lieu,
     * or with status 400 (Bad Request) if the lieu is not valid,
     * or with status 500 (Internal Server Error) if the lieu couldnt be updated
     * @throws URISyntaxException if the Location URI syntax is incorrect
     */
    @PutMapping("/lieus")
    @Timed
    public ResponseEntity<Lieu> updateLieu(@Valid @RequestBody Lieu lieu) throws URISyntaxException {
        log.debug("REST request to update Lieu : {}", lieu);
        if (lieu.getId() == null) {
            return createLieu(lieu);
        }
        lieu = lieuRepository.save(lieu);
        lieuSearchRepository.save(lieu);
        return ResponseEntity.ok()
            .headers(HeaderUtil.createEntityUpdateAlert("lieu", lieu.getId().toString()))
            .body(lieu);
    }

    /**
     * GET  /lieus : get all the lieus.
     *
     * @param pageable the pagination information
     * @return the ResponseEntity with status 200 (OK) and the list of lieus in body
     * @throws URISyntaxException if there is an error to generate the pagination HTTP headers
     */
    @GetMapping("/lieus")
    @Timed
    public ResponseEntity<List<Lieu>> getAllLieus(Pageable pageable)
        throws URISyntaxException {
        log.debug("REST request to get a page of Lieus");
        Page<Lieu> page = lieuRepository.findAll(pageable);
        HttpHeaders headers = PaginationUtil.generatePaginationHttpHeaders(page, "/api/lieus");
        return new ResponseEntity<>(page.getContent(), headers, HttpStatus.OK);
    }

    /**
     * GET  /lieus/:id : get the "id" lieu.
     *
     * @param id the id of the lieu to retrieve
     * @return the ResponseEntity with status 200 (OK) and with body the lieu, or with status 404 (Not Found)
     */
    @GetMapping("/lieus/{id}")
    @Timed
    public ResponseEntity<Lieu> getLieu(@PathVariable Long id) {
        log.debug("REST request to get Lieu : {}", id);
        Lieu lieu = lieuRepository.findOne(id);
        return Optional.ofNullable(lieu)
            .map(result -> new ResponseEntity<>(
                result,
                HttpStatus.OK))
            .orElse(new ResponseEntity<>(HttpStatus.NOT_FOUND));
    }

    /**
     * DELETE  /lieus/:id : delete the "id" lieu.
     *
     * @param id the id of the lieu to delete
     * @return the ResponseEntity with status 200 (OK)
     */
    @DeleteMapping("/lieus/{id}")
    @Timed
    public ResponseEntity<Void> deleteLieu(@PathVariable Long id) {
        log.debug("REST request to delete Lieu : {}", id);
        lieuRepository.delete(id);
        lieuSearchRepository.delete(id);
        return ResponseEntity.ok().headers(HeaderUtil.createEntityDeletionAlert("lieu", id.toString())).build();
    }

    /**
     * SEARCH  /_search/lieus?query=:query : search for the lieu corresponding
     * to the query.
     *
     * @param query the query of the lieu search 
     * @param pageable the pagination information
     * @return the result of the search
     * @throws URISyntaxException if there is an error to generate the pagination HTTP headers
     */
    @GetMapping("/_search/lieus")
    @Timed
    public ResponseEntity<List<Lieu>> searchLieus(@RequestParam String query, Pageable pageable)
        throws URISyntaxException {
        log.debug("REST request to search for a page of Lieus for query {}", query);
        Page<Lieu> page = lieuSearchRepository.search(queryStringQuery(query), pageable);
        HttpHeaders headers = PaginationUtil.generateSearchPaginationHttpHeaders(query, page, "/api/_search/lieus");
        return new ResponseEntity<>(page.getContent(), headers, HttpStatus.OK);
    }


}
