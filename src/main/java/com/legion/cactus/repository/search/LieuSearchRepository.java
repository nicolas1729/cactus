package com.legion.cactus.repository.search;

import com.legion.cactus.domain.Lieu;
import org.springframework.data.elasticsearch.repository.ElasticsearchRepository;

/**
 * Spring Data ElasticSearch repository for the Lieu entity.
 */
public interface LieuSearchRepository extends ElasticsearchRepository<Lieu, Long> {
}
