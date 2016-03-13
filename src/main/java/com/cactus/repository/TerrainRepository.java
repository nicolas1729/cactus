package com.cactus.repository;

import com.cactus.domain.Terrain;

import org.springframework.data.mongodb.repository.MongoRepository;

/**
 * Spring Data MongoDB repository for the Terrain entity.
 */
public interface TerrainRepository extends MongoRepository<Terrain,String> {

}
