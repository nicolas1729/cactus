package com.cactus.service;

import com.cactus.domain.Lieu;
import com.cactus.repository.LieuRepository;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.stereotype.Service;

import javax.inject.Inject;
import java.util.List;
import java.util.Optional;

/**
 * Service Implementation for managing Lieu.
 */
@Service
public class LieuService {

    private final Logger log = LoggerFactory.getLogger(LieuService.class);
    
    @Inject
    private LieuRepository lieuRepository;
    
    /**
     * Save a lieu.
     * @return the persisted entity
     */
    public Lieu save(Lieu lieu) {
        log.debug("Request to save Lieu : {}", lieu);
        Lieu result = lieuRepository.save(lieu);
        return result;
    }

    /**
     *  get all the lieus.
     *  @return the list of entities
     */
    public List<Lieu> findAll() {
        log.debug("Request to get all Lieus");
        List<Lieu> result = lieuRepository.findAll();
        return result;
    }

    /**
     *  get one lieu by id.
     *  @return the entity
     */
    public Lieu findOne(String id) {
        log.debug("Request to get Lieu : {}", id);
        Lieu lieu = lieuRepository.findOne(id);
        return lieu;
    }

    /**
     *  delete the  lieu by id.
     */
    public void delete(String id) {
        log.debug("Request to delete Lieu : {}", id);
        lieuRepository.delete(id);
    }
}
