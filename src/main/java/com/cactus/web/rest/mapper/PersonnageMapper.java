package com.cactus.web.rest.mapper;

import com.cactus.domain.*;
import com.cactus.web.rest.dto.PersonnageDTO;

import org.mapstruct.*;

/**
 * Mapper for the entity Personnage and its DTO PersonnageDTO.
 */
@Mapper(componentModel = "spring", uses = {})
public interface PersonnageMapper {

    PersonnageDTO personnageToPersonnageDTO(Personnage personnage);

    Personnage personnageDTOToPersonnage(PersonnageDTO personnageDTO);
}
