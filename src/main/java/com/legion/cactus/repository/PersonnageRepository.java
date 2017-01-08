package com.legion.cactus.repository;

import com.legion.cactus.domain.Personnage;

import org.springframework.data.jpa.repository.*;

import java.util.List;
import java.util.Optional;

/**
 * Spring Data JPA repository for the Personnage entity.
 */
@SuppressWarnings("unused")
public interface PersonnageRepository extends JpaRepository<Personnage,Long> {

    @Query("select personnage from Personnage personnage where personnage.user.login = ?#{principal.username}")
    List<Personnage> findByUserIsCurrentUser();
    
    Optional<Personnage> findOneByNom(String nom);

}
