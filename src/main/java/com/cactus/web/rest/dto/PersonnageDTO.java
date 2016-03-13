package com.cactus.web.rest.dto;

import java.time.LocalDate;
import javax.validation.constraints.*;
import java.io.Serializable;
import java.util.Objects;


/**
 * A DTO for the Personnage entity.
 */
public class PersonnageDTO implements Serializable {

    private String id;

    @Min(value = 0)
    @Max(value = 50)
    private Integer blessure;


    @NotNull
    private Integer compcombat;


    @NotNull
    private Integer compconstruire;


    private Integer compeau;


    @NotNull
    private Integer comfabriquer;


    @NotNull
    private Integer compnour;


    @NotNull
    private Integer compsoigner;


    @NotNull
    private LocalDate datecreation;


    private LocalDate datefin;


    public String getId() {
        return id;
    }

    public void setId(String id) {
        this.id = id;
    }
    public Integer getBlessure() {
        return blessure;
    }

    public void setBlessure(Integer blessure) {
        this.blessure = blessure;
    }
    public Integer getCompcombat() {
        return compcombat;
    }

    public void setCompcombat(Integer compcombat) {
        this.compcombat = compcombat;
    }
    public Integer getCompconstruire() {
        return compconstruire;
    }

    public void setCompconstruire(Integer compconstruire) {
        this.compconstruire = compconstruire;
    }
    public Integer getCompeau() {
        return compeau;
    }

    public void setCompeau(Integer compeau) {
        this.compeau = compeau;
    }
    public Integer getComfabriquer() {
        return comfabriquer;
    }

    public void setComfabriquer(Integer comfabriquer) {
        this.comfabriquer = comfabriquer;
    }
    public Integer getCompnour() {
        return compnour;
    }

    public void setCompnour(Integer compnour) {
        this.compnour = compnour;
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
            ", blessure='" + blessure + "'" +
            ", compcombat='" + compcombat + "'" +
            ", compconstruire='" + compconstruire + "'" +
            ", compeau='" + compeau + "'" +
            ", comfabriquer='" + comfabriquer + "'" +
            ", compnour='" + compnour + "'" +
            ", compsoigner='" + compsoigner + "'" +
            ", datecreation='" + datecreation + "'" +
            ", datefin='" + datefin + "'" +
            '}';
    }
}
