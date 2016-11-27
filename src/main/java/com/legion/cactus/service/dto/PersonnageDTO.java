package com.legion.cactus.service.dto;

import java.time.LocalDate;
import javax.validation.constraints.*;
import java.io.Serializable;
import java.util.HashSet;
import java.util.Set;
import java.util.Objects;


/**
 * A DTO for the Personnage entity.
 */
public class PersonnageDTO implements Serializable {

    private Long id;

    @NotNull
    private String nom;

    private String description;

    @NotNull
    private Boolean mort;

    @NotNull
    @Min(value = 0)
    @Max(value = 50)
    private Integer blessure;

    @NotNull
    @Min(value = 0)
    @Max(value = 50)
    private Integer fatigue;

    @NotNull
    @Min(value = 0)
    private Integer compeau;

    @NotNull
    @Min(value = 0)
    private Integer compnour;

    @NotNull
    @Min(value = 0)
    private Integer compfabriquer;

    @NotNull
    @Min(value = 0)
    private Integer compconstruire;

    @NotNull
    @Min(value = 0)
    private Integer compcombat;

    @NotNull
    @Min(value = 0)
    private Integer compsoigner;

    private LocalDate datecreation;

    private LocalDate datefin;


    private Long userId;
    
    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }
    public String getNom() {
        return nom;
    }

    public void setNom(String nom) {
        this.nom = nom;
    }
    public String getDescription() {
        return description;
    }

    public void setDescription(String description) {
        this.description = description;
    }
    public Boolean getMort() {
        return mort;
    }

    public void setMort(Boolean mort) {
        this.mort = mort;
    }
    public Integer getBlessure() {
        return blessure;
    }

    public void setBlessure(Integer blessure) {
        this.blessure = blessure;
    }
    public Integer getFatigue() {
        return fatigue;
    }

    public void setFatigue(Integer fatigue) {
        this.fatigue = fatigue;
    }
    public Integer getCompeau() {
        return compeau;
    }

    public void setCompeau(Integer compeau) {
        this.compeau = compeau;
    }
    public Integer getCompnour() {
        return compnour;
    }

    public void setCompnour(Integer compnour) {
        this.compnour = compnour;
    }
    public Integer getCompfabriquer() {
        return compfabriquer;
    }

    public void setCompfabriquer(Integer compfabriquer) {
        this.compfabriquer = compfabriquer;
    }
    public Integer getCompconstruire() {
        return compconstruire;
    }

    public void setCompconstruire(Integer compconstruire) {
        this.compconstruire = compconstruire;
    }
    public Integer getCompcombat() {
        return compcombat;
    }

    public void setCompcombat(Integer compcombat) {
        this.compcombat = compcombat;
    }
    public Integer getCompsoigner() {
        return compsoigner;
    }

    public void setCompsoigner(Integer compsoigner) {
        this.compsoigner = compsoigner;
    }
    public LocalDate getDatecreation() {
        return datecreation;
    }

    public void setDatecreation(LocalDate datecreation) {
        this.datecreation = datecreation;
    }
    public LocalDate getDatefin() {
        return datefin;
    }

    public void setDatefin(LocalDate datefin) {
        this.datefin = datefin;
    }

    public Long getUserId() {
        return userId;
    }

    public void setUserId(Long userId) {
        this.userId = userId;
    }

    @Override
    public boolean equals(Object o) {
        if (this == o) {
            return true;
        }
        if (o == null || getClass() != o.getClass()) {
            return false;
        }

        PersonnageDTO personnageDTO = (PersonnageDTO) o;

        if ( ! Objects.equals(id, personnageDTO.id)) return false;

        return true;
    }

    @Override
    public int hashCode() {
        return Objects.hashCode(id);
    }

    @Override
    public String toString() {
        return "PersonnageDTO{" +
            "id=" + id +
            ", nom='" + nom + "'" +
            ", description='" + description + "'" +
            ", mort='" + mort + "'" +
            ", blessure='" + blessure + "'" +
            ", fatigue='" + fatigue + "'" +
            ", compeau='" + compeau + "'" +
            ", compnour='" + compnour + "'" +
            ", compfabriquer='" + compfabriquer + "'" +
            ", compconstruire='" + compconstruire + "'" +
            ", compcombat='" + compcombat + "'" +
            ", compsoigner='" + compsoigner + "'" +
            ", datecreation='" + datecreation + "'" +
            ", datefin='" + datefin + "'" +
            '}';
    }
}
