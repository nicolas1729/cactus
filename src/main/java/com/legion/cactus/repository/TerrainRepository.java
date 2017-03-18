package com.legion.cactus.repository;

import com.legion.cactus.domain.Terrain;

import org.springframework.data.jpa.repository.*;

import java.util.List;

/**
 * Spring Data JPA repository for the Terrain entity.
 */
@SuppressWarnings("unused")
public interface TerrainRepository extends JpaRepository<Terrain,Long> {

}
