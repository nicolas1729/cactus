package com.legion.cactus.repository.search;

import com.legion.cactus.domain.Terrain;
import org.springframework.data.elasticsearch.repository.ElasticsearchRepository;

/**
 * Spring Data ElasticSearch repository for the Terrain entity.
 */
public interface TerrainSearchRepository extends ElasticsearchRepository<Terrain, Long> {
}
