package com.legion.cactus.service;

import com.legion.cactus.service.dto.PersonnageDTO;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;

import java.util.LinkedList;
import java.util.List;

/**
 * Service Interface for managing Personnage.
 */
public interface PersonnageService {

    /**
     * Save a personnage.
     *
     * @param personnageDTO the entity to save
     * @return the persisted entity
     */
    PersonnageDTO save(PersonnageDTO personnageDTO);

    /**
     *  Get all the personnages.
     *  
     *  @param pageable the pagination information
     *  @return the list of entities
     */
    Page<PersonnageDTO> findAll(Pageable pageable);

    /**
     *  Get the "id" personnage.
     *
     *  @param id the id of the entity
     *  @return the entity
     */
    PersonnageDTO findOne(Long id);

    /**
     *  Delete the "id" personnage.
     *
     *  @param id the id of the entity
     */
    void delete(Long id);

    /**
     * Search for the personnage corresponding to the query.
     *
     *  @param query the query of the search
     *  
     *  @param pageable the pagination information
     *  @return the list of entities
     */
    Page<PersonnageDTO> search(String query, Pageable pageable);
    
    void removeNotActivatedPersonnages();
}
