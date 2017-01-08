package com.legion.cactus.web.rest;

import com.codahale.metrics.annotation.Timed;
import com.legion.cactus.domain.Personnage;
import com.legion.cactus.domain.User;
import com.legion.cactus.repository.PersonnageRepository;
import com.legion.cactus.repository.UserRepository;
import com.legion.cactus.security.SecurityUtils;
import com.legion.cactus.service.PersonnageService;
import com.legion.cactus.web.rest.util.HeaderUtil;
import com.legion.cactus.web.rest.util.PaginationUtil;
import com.legion.cactus.service.dto.PersonnageDTO;
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
import java.time.LocalDate;
import java.util.LinkedList;
import java.util.List;
import java.util.Optional;
import java.util.stream.Collectors;
import java.util.stream.StreamSupport;

import static org.elasticsearch.index.query.QueryBuilders.*;

/**
 * REST controller for managing Personnage.
 */
@RestController
@RequestMapping("/api")
public class PersonnageResource {

    private final Logger log = LoggerFactory.getLogger(PersonnageResource.class);
        
    @Inject
    private PersonnageService personnageService;
    
    @Inject
    private PersonnageRepository personnageRepository;

    @Inject
    private UserRepository userRepository;
    
    //@Inject
    //private LieuRepository lieuRepository;
    
    /**
     * POST  /personnages : Create a new personnage.
     *
     * @param personnageDTO the personnageDTO to create
     * @return the ResponseEntity with status 201 (Created) and with body the new personnageDTO, or with status 400 (Bad Request) if the personnage has already an ID
     * @throws URISyntaxException if the Location URI syntax is incorrect
     */
    @PostMapping("/personnages")
    @Timed
    public ResponseEntity<PersonnageDTO> createPersonnage(@Valid @RequestBody PersonnageDTO personnageDTO) throws URISyntaxException {
        log.debug("REST request to save Personnage : {}", personnageDTO);
        if (personnageDTO.getId() != null) {
            return ResponseEntity.badRequest().headers(HeaderUtil.createFailureAlert("personnage", "idexists", "A new personnage cannot already have an ID")).body(null);
        }
        Optional<Personnage> existingNomPersonnage = personnageRepository.findOneByNom(personnageDTO.getNom());
        if (existingNomPersonnage.isPresent() ) {
            return ResponseEntity.badRequest().headers(HeaderUtil.createFailureAlert("personnage-management", "personnageexists", "Nom déjà utilisé")).body(null);
        }
        String login = SecurityUtils.getCurrentUserLogin();
        Optional<User> user = userRepository.findOneByLogin(login);
        personnageDTO.setUserId(user.get().getId());
        //Optional<Lieu> lieu = lieuRepository.findOneByLongitudeAndLatitude(1,1);
        //personnage.setLieu(lieu.get());
        personnageDTO.setCompfabriquer(personnageDTO.getCompfabriquer());
        personnageDTO.setCompcombat(personnageDTO.getCompcombat());
        personnageDTO.setCompconstruire(personnageDTO.getCompconstruire());
        personnageDTO.setCompeau(personnageDTO.getCompeau());
        personnageDTO.setCompnour(personnageDTO.getCompnour());
        personnageDTO.setCompsoigner(personnageDTO.getCompsoigner());
        
        personnageDTO.setDatecreation(LocalDate.now());
        PersonnageDTO result = personnageService.save(personnageDTO);
        return ResponseEntity.created(new URI("/api/personnages/" + result.getId()))
            .headers(HeaderUtil.createEntityCreationAlert("personnage", result.getId().toString()))
            .body(result);
    }

    /**
     * PUT  /personnages : Updates an existing personnage.
     *
     * @param personnageDTO the personnageDTO to update
     * @return the ResponseEntity with status 200 (OK) and with body the updated personnageDTO,
     * or with status 400 (Bad Request) if the personnageDTO is not valid,
     * or with status 500 (Internal Server Error) if the personnageDTO couldnt be updated
     * @throws URISyntaxException if the Location URI syntax is incorrect
     */
    @PutMapping("/personnages")
    @Timed
    public ResponseEntity<PersonnageDTO> updatePersonnage(@Valid @RequestBody PersonnageDTO personnageDTO) throws URISyntaxException {
        log.debug("REST request to update Personnage : {}", personnageDTO);
        if (personnageDTO.getId() == null) {
            return createPersonnage(personnageDTO);
        }
        PersonnageDTO result = personnageService.save(personnageDTO);
        return ResponseEntity.ok()
            .headers(HeaderUtil.createEntityUpdateAlert("personnage", personnageDTO.getId().toString()))
            .body(result);
    }

    /**
     * GET  /personnages : get all the personnages.
     *
     * @param pageable the pagination information
     * @return the ResponseEntity with status 200 (OK) and the list of personnages in body
     * @throws URISyntaxException if there is an error to generate the pagination HTTP headers
     */
    @GetMapping("/personnages")
    @Timed
    public ResponseEntity<List<PersonnageDTO>> getAllPersonnages(Pageable pageable)
        throws URISyntaxException {
        log.debug("REST request to get a page of Personnages");
        Page<PersonnageDTO> page = personnageService.findAll(pageable);
        HttpHeaders headers = PaginationUtil.generatePaginationHttpHeaders(page, "/api/personnages");
        return new ResponseEntity<>(page.getContent(), headers, HttpStatus.OK);
    }

    /**
     * GET  /personnages/:id : get the "id" personnage.
     *
     * @param id the id of the personnageDTO to retrieve
     * @return the ResponseEntity with status 200 (OK) and with body the personnageDTO, or with status 404 (Not Found)
     */
    @GetMapping("/personnages/{id}")
    @Timed
    public ResponseEntity<PersonnageDTO> getPersonnage(@PathVariable Long id) {
        log.debug("REST request to get Personnage : {}", id);
        PersonnageDTO personnageDTO = personnageService.findOne(id);
        return Optional.ofNullable(personnageDTO)
            .map(result -> new ResponseEntity<>(
                result,
                HttpStatus.OK))
            .orElse(new ResponseEntity<>(HttpStatus.NOT_FOUND));
    }

    /**
     * DELETE  /personnages/:id : delete the "id" personnage.
     *
     * @param id the id of the personnageDTO to delete
     * @return the ResponseEntity with status 200 (OK)
     */
    @DeleteMapping("/personnages/{id}")
    @Timed
    public ResponseEntity<Void> deletePersonnage(@PathVariable Long id) {
        log.debug("REST request to delete Personnage : {}", id);
        personnageService.delete(id);
        return ResponseEntity.ok().headers(HeaderUtil.createEntityDeletionAlert("personnage", id.toString())).build();
    }

    /**
     * SEARCH  /_search/personnages?query=:query : search for the personnage corresponding
     * to the query.
     *
     * @param query the query of the personnage search 
     * @param pageable the pagination information
     * @return the result of the search
     * @throws URISyntaxException if there is an error to generate the pagination HTTP headers
     */
    @GetMapping("/_search/personnages")
    @Timed
    public ResponseEntity<List<PersonnageDTO>> searchPersonnages(@RequestParam String query, Pageable pageable)
        throws URISyntaxException {
        log.debug("REST request to search for a page of Personnages for query {}", query);
        Page<PersonnageDTO> page = personnageService.search(query, pageable);
        HttpHeaders headers = PaginationUtil.generateSearchPaginationHttpHeaders(query, page, "/api/_search/personnages");
        return new ResponseEntity<>(page.getContent(), headers, HttpStatus.OK);
    }


}
