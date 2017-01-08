package com.legion.cactus.repository.search;

import com.legion.cactus.domain.Personnage;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.elasticsearch.annotations.Query;
import org.springframework.data.elasticsearch.repository.ElasticsearchRepository;

/**
 * Spring Data ElasticSearch repository for the Personnage entity.
 */
public interface PersonnageSearchRepository extends ElasticsearchRepository<Personnage, Long> {
    //@Query("{"bool" : {"must" : {"field" : {"nom" : "?"}}}}")
    //Page<Personnage> findByName(String nom,Pageable pageable);
}
