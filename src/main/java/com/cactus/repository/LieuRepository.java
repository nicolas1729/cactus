package com.cactus.repository;

import com.cactus.domain.Lieu;

import org.springframework.data.mongodb.repository.MongoRepository;

/**
 * Spring Data MongoDB repository for the Lieu entity.
 */
public interface LieuRepository extends MongoRepository<Lieu,String> {

}
