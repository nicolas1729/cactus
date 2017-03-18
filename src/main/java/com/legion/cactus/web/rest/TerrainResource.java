package com.legion.cactus.web.rest;

import com.codahale.metrics.annotation.Timed;
import com.legion.cactus.domain.Terrain;

import com.legion.cactus.repository.TerrainRepository;
import com.legion.cactus.repository.search.TerrainSearchRepository;
import com.legion.cactus.web.rest.util.HeaderUtil;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
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
import java.util.stream.Collectors;
import java.util.stream.StreamSupport;

import static org.elasticsearch.index.query.QueryBuilders.*;

/**
 * REST controller for managing Terrain.
 */
@RestController
@RequestMapping("/api")
public class TerrainResource {

    private final Logger log = LoggerFactory.getLogger(TerrainResource.class);
        
    @Inject
    private TerrainRepository terrainRepository;

    @Inject
    private TerrainSearchRepository terrainSearchRepository;

    /**
     * POST  /terrains : Create a new terrain.
     *
     * @param terrain the terrain to create
     * @return the ResponseEntity with status 201 (Created) and with body the new terrain, or with status 400 (Bad Request) if the terrain has already an ID
     * @throws URISyntaxException if the Location URI syntax is incorrect
     */
    @PostMapping("/terrains")
    @Timed
    public ResponseEntity<Terrain> createTerrain(@Valid @RequestBody Terrain terrain) throws URISyntaxException {
        log.debug("REST request to save Terrain : {}", terrain);
        if (terrain.getId() != null) {
            return ResponseEntity.badRequest().headers(HeaderUtil.createFailureAlert("terrain", "idexists", "A new terrain cannot already have an ID")).body(null);
        }
        Terrain result = terrainRepository.save(terrain);
        terrainSearchRepository.save(result);
        return ResponseEntity.created(new URI("/api/terrains/" + result.getId()))
            .headers(HeaderUtil.createEntityCreationAlert("terrain", result.getId().toString()))
            .body(result);
    }

    /**
     * PUT  /terrains : Updates an existing terrain.
     *
     * @param terrain the terrain to update
     * @return the ResponseEntity with status 200 (OK) and with body the updated terrain,
     * or with status 400 (Bad Request) if the terrain is not valid,
     * or with status 500 (Internal Server Error) if the terrain couldnt be updated
     * @throws URISyntaxException if the Location URI syntax is incorrect
     */
    @PutMapping("/terrains")
    @Timed
    public ResponseEntity<Terrain> updateTerrain(@Valid @RequestBody Terrain terrain) throws URISyntaxException {
        log.debug("REST request to update Terrain : {}", terrain);
        if (terrain.getId() == null) {
            return createTerrain(terrain);
        }
        Terrain result = terrainRepository.save(terrain);
        terrainSearchRepository.save(result);
        return ResponseEntity.ok()
            .headers(HeaderUtil.createEntityUpdateAlert("terrain", terrain.getId().toString()))
            .body(result);
    }

    /**
     * GET  /terrains : get all the terrains.
     *
     * @return the ResponseEntity with status 200 (OK) and the list of terrains in body
     */
    @GetMapping("/terrains")
    @Timed
    public List<Terrain> getAllTerrains() {
        log.debug("REST request to get all Terrains");
        List<Terrain> terrains = terrainRepository.findAll();
        return terrains;
    }

    /**
     * GET  /terrains/:id : get the "id" terrain.
     *
     * @param id the id of the terrain to retrieve
     * @return the ResponseEntity with status 200 (OK) and with body the terrain, or with status 404 (Not Found)
     */
    @GetMapping("/terrains/{id}")
    @Timed
    public ResponseEntity<Terrain> getTerrain(@PathVariable Long id) {
        log.debug("REST request to get Terrain : {}", id);
        Terrain terrain = terrainRepository.findOne(id);
        return Optional.ofNullable(terrain)
            .map(result -> new ResponseEntity<>(
                result,
                HttpStatus.OK))
            .orElse(new ResponseEntity<>(HttpStatus.NOT_FOUND));
    }

    /**
     * DELETE  /terrains/:id : delete the "id" terrain.
     *
     * @param id the id of the terrain to delete
     * @return the ResponseEntity with status 200 (OK)
     */
    @DeleteMapping("/terrains/{id}")
    @Timed
    public ResponseEntity<Void> deleteTerrain(@PathVariable Long id) {
        log.debug("REST request to delete Terrain : {}", id);
        terrainRepository.delete(id);
        terrainSearchRepository.delete(id);
        return ResponseEntity.ok().headers(HeaderUtil.createEntityDeletionAlert("terrain", id.toString())).build();
    }

    /**
     * SEARCH  /_search/terrains?query=:query : search for the terrain corresponding
     * to the query.
     *
     * @param query the query of the terrain search 
     * @return the result of the search
     */
    @GetMapping("/_search/terrains")
    @Timed
    public List<Terrain> searchTerrains(@RequestParam String query) {
        log.debug("REST request to search Terrains for query {}", query);
        return StreamSupport
            .stream(terrainSearchRepository.search(queryStringQuery(query)).spliterator(), false)
            .collect(Collectors.toList());
    }


}
