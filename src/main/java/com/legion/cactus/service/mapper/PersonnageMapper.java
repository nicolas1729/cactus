package com.legion.cactus.service.mapper;

import com.legion.cactus.domain.*;
import com.legion.cactus.service.dto.PersonnageDTO;

import org.mapstruct.*;
import java.util.List;

/**
 * Mapper for the entity Personnage and its DTO PersonnageDTO.
 */
@Mapper(componentModel = "spring", uses = {UserMapper.class, })
public interface PersonnageMapper {

    @Mapping(source = "user.id", target = "userId")
    PersonnageDTO personnageToPersonnageDTO(Personnage personnage);

    List<PersonnageDTO> personnagesToPersonnageDTOs(List<Personnage> personnages);

    @Mapping(source = "userId", target = "user")
    Personnage personnageDTOToPersonnage(PersonnageDTO personnageDTO);

    List<Personnage> personnageDTOsToPersonnages(List<PersonnageDTO> personnageDTOs);
}
