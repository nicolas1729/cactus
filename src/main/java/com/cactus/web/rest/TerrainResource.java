package com.cactus.web.rest;

import com.codahale.metrics.annotation.Timed;
import com.cactus.domain.Terrain;
import com.cactus.repository.TerrainRepository;
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
 * REST controller for managing Terrain.
 */
@RestController
@RequestMapping("/api")
public class TerrainResource {

    private final Logger log = LoggerFactory.getLogger(TerrainResource.class);
        
    @Inject
    private TerrainRepository terrainRepository;
    
    /**
     * POST  /terrains -> Create a new terrain.
     */
    @RequestMapping(value = "/terrains",
        method = RequestMethod.POST,
        produces = MediaType.APPLICATION_JSON_VALUE)
    @Timed
    public ResponseEntity<Terrain> createTerrain(@Valid @RequestBody Terrain terrain) throws URISyntaxException {
        log.debug("REST request to save Terrain : {}", terrain);
        if (terrain.getId() != null) {
            return ResponseEntity.badRequest().headers(HeaderUtil.createFailureAlert("terrain", "idexists", "A new terrain cannot already have an ID")).body(null);
        }
        Terrain result = terrainRepository.save(terrain);
        return ResponseEntity.created(new URI("/api/terrains/" + result.getId()))
            .headers(HeaderUtil.createEntityCreationAlert("terrain", result.getId().toString()))
            .body(result);
    }

    /**
     * PUT  /terrains -> Updates an existing terrain.
     */
    @RequestMapping(value = "/terrains",
        method = RequestMethod.PUT,
        produces = MediaType.APPLICATION_JSON_VALUE)
    @Timed
    public ResponseEntity<Terrain> updateTerrain(@Valid @RequestBody Terrain terrain) throws URISyntaxException {
        log.debug("REST request to update Terrain : {}", terrain);
        if (terrain.getId() == null) {
            return createTerrain(terrain);
        }
        Terrain result = terrainRepository.save(terrain);
        return ResponseEntity.ok()
            .headers(HeaderUtil.createEntityUpdateAlert("terrain", terrain.getId().toString()))
            .body(result);
    }

    /**
     * GET  /terrains -> get all the terrains.
     */
    @RequestMapping(value = "/terrains",
        method = RequestMethod.GET,
        produces = MediaType.APPLICATION_JSON_VALUE)
    @Timed
    public List<Terrain> getAllTerrains() {
        log.debug("REST request to get all Terrains");
        return terrainRepository.findAll();
            }

    /**
     * GET  /terrains/:id -> get the "id" terrain.
     */
    @RequestMapping(value = "/terrains/{id}",
        method = RequestMethod.GET,
        produces = MediaType.APPLICATION_JSON_VALUE)
    @Timed
    public ResponseEntity<Terrain> getTerrain(@PathVariable String id) {
        log.debug("REST request to get Terrain : {}", id);
        Terrain terrain = terrainRepository.findOne(id);
        return Optional.ofNullable(terrain)
            .map(result -> new ResponseEntity<>(
                result,
                HttpStatus.OK))
            .orElse(new ResponseEntity<>(HttpStatus.NOT_FOUND));
    }

    /**
     * DELETE  /terrains/:id -> delete the "id" terrain.
     */
    @RequestMapping(value = "/terrains/{id}",
        method = RequestMethod.DELETE,
        produces = MediaType.APPLICATION_JSON_VALUE)
    @Timed
    public ResponseEntity<Void> deleteTerrain(@PathVariable String id) {
        log.debug("REST request to delete Terrain : {}", id);
        terrainRepository.delete(id);
        return ResponseEntity.ok().headers(HeaderUtil.createEntityDeletionAlert("terrain", id.toString())).build();
    }
}
