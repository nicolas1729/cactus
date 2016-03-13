package com.cactus.repository;

import com.cactus.domain.Personnage;

import org.springframework.data.mongodb.repository.MongoRepository;

/**
 * Spring Data MongoDB repository for the Personnage entity.
 */
public interface PersonnageRepository extends MongoRepository<Personnage,String> {

}
