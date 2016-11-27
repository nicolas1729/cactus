package com.legion.cactus.repository.search;

import com.legion.cactus.domain.Personnage;
import org.springframework.data.elasticsearch.repository.ElasticsearchRepository;

/**
 * Spring Data ElasticSearch repository for the Personnage entity.
 */
public interface PersonnageSearchRepository extends ElasticsearchRepository<Personnage, Long> {
}
