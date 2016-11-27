package com.legion.cactus.service.impl;

import com.legion.cactus.service.PersonnageService;
import com.legion.cactus.domain.Personnage;
import com.legion.cactus.repository.PersonnageRepository;
import com.legion.cactus.repository.search.PersonnageSearchRepository;
import com.legion.cactus.service.dto.PersonnageDTO;
import com.legion.cactus.service.mapper.PersonnageMapper;
import java.time.LocalDate;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.transaction.annotation.Transactional;
import org.springframework.stereotype.Service;

import javax.inject.Inject;
import java.util.LinkedList;
import java.util.List;
import java.util.stream.Collectors;
import java.util.stream.StreamSupport;

import static org.elasticsearch.index.query.QueryBuilders.*;

/**
 * Service Implementation for managing Personnage.
 */
@Service
@Transactional
public class PersonnageServiceImpl implements PersonnageService{

    private final Logger log = LoggerFactory.getLogger(PersonnageServiceImpl.class);
    
    @Inject
    private PersonnageRepository personnageRepository;

    @Inject
    private PersonnageMapper personnageMapper;

    @Inject
    private PersonnageSearchRepository personnageSearchRepository;

    /**
     * Save a personnage.
     *
     * @param personnageDTO the entity to save
     * @return the persisted entity
     */
    public PersonnageDTO save(PersonnageDTO personnageDTO) {
        log.debug("Request to save Personnage : {}", personnageDTO);
        if(personnageDTO.getDatecreation() == null){
            personnageDTO.setDatecreation(LocalDate.now());
        }
        Personnage personnage = personnageMapper.personnageDTOToPersonnage(personnageDTO);
        personnage = personnageRepository.save(personnage);
        PersonnageDTO result = personnageMapper.personnageToPersonnageDTO(personnage);
        personnageSearchRepository.save(personnage);
        return result;
    }

    /**
     *  Get all the personnages.
     *  
     *  @param pageable the pagination information
     *  @return the list of entities
     */
    @Transactional(readOnly = true) 
    public Page<PersonnageDTO> findAll(Pageable pageable) {
        log.debug("Request to get all Personnages");
        Page<Personnage> result = personnageRepository.findAll(pageable);
        return result.map(personnage -> personnageMapper.personnageToPersonnageDTO(personnage));
    }

    /**
     *  Get one personnage by id.
     *
     *  @param id the id of the entity
     *  @return the entity
     */
    @Transactional(readOnly = true) 
    public PersonnageDTO findOne(Long id) {
        log.debug("Request to get Personnage : {}", id);
        Personnage personnage = personnageRepository.findOne(id);
        PersonnageDTO personnageDTO = personnageMapper.personnageToPersonnageDTO(personnage);
        return personnageDTO;
    }

    /**
     *  Delete the  personnage by id.
     *
     *  @param id the id of the entity
     */
    public void delete(Long id) {
        log.debug("Request to delete Personnage : {}", id);
        personnageRepository.delete(id);
        personnageSearchRepository.delete(id);
    }

    /**
     * Search for the personnage corresponding to the query.
     *
     *  @param query the query of the search
     *  @return the list of entities
     */
    @Transactional(readOnly = true)
    public Page<PersonnageDTO> search(String query, Pageable pageable) {
        log.debug("Request to search for a page of Personnages for query {}", query);
        Page<Personnage> result = personnageSearchRepository.search(queryStringQuery(query), pageable);
        return result.map(personnage -> personnageMapper.personnageToPersonnageDTO(personnage));
    }
}
