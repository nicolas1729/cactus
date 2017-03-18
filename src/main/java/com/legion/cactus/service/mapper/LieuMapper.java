package com.legion.cactus.service.mapper;

import com.legion.cactus.domain.*;
import com.legion.cactus.service.dto.LieuDTO;

import org.mapstruct.*;
import java.util.List;

/**
 * Mapper for the entity Lieu and its DTO LieuDTO.
 */
@Mapper(componentModel = "spring", uses = {})
public interface LieuMapper {

    @Mapping(source = "terrain.id", target = "terrainId")
    LieuDTO lieuToLieuDTO(Lieu lieu);

    List<LieuDTO> lieusToLieuDTOs(List<Lieu> lieus);

    @Mapping(source = "terrainId", target = "terrain")
    Lieu lieuDTOToLieu(LieuDTO lieuDTO);

    List<Lieu> lieuDTOsToLieus(List<LieuDTO> lieuDTOs);

    default Terrain terrainFromId(Long id) {
        if (id == null) {
            return null;
        }
        Terrain terrain = new Terrain();
        terrain.setId(id);
        return terrain;
    }
}
