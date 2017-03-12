package com.legion.cactus.repository;

import com.legion.cactus.domain.Lieu;

import org.springframework.data.jpa.repository.*;

import java.util.List;

/**
 * Spring Data JPA repository for the Lieu entity.
 */
@SuppressWarnings("unused")
public interface LieuRepository extends JpaRepository<Lieu,Long> {

}
