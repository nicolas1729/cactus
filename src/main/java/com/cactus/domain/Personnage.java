package com.cactus.domain;

import java.time.LocalDate;
import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;
import org.springframework.data.mongodb.core.mapping.Field;
import org.springframework.data.mongodb.core.mapping.DBRef;

import javax.validation.constraints.*;
import java.io.Serializable;
import java.util.Objects;

/**
 * A Personnage.
 */

@Document(collection = "personnage")
public class Personnage implements Serializable {

    @Id
    private String id;

    @NotNull
    @Field("nom")
    private String nom;
    
    @Field("description")
    private String description;
    
    @Field("mort")
    private Boolean mort;
    
    @Min(value = 0)
    @Max(value = 50)
    @Field("fatigue")
    private Integer fatigue;
    
    @Min(value = 0)
    @Max(value = 50)
    @Field("blessure")
    private Integer blessure;
    
    @NotNull
    @Field("compcombat")
    private Integer compcombat;
    
    @NotNull
    @Field("compconstruire")
    private Integer compconstruire;
    
    @NotNull
    @Field("compeau")
    private Integer compeau;
    
    @NotNull
    @Field("comfabriquer")
    private Integer comfabriquer;
    
    @NotNull
    @Field("compnour")
    private Integer compnour;
    
    @NotNull
    @Field("compsoigner")
    private Integer compsoigner;
    
    @NotNull
    @Field("datecreation")
    private LocalDate datecreation;
    
    @Field("datefin")
    private LocalDate datefin;
    
    @DBRef
    private User user;
    
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

    public String getNom() {
        return nom;
    }

    public void setNom(String nom) {
        this.nom = nom;
    }

    public Integer getFatigue() {
        return fatigue;
    }

    public void setFatigue(Integer fatigue) {
        this.fatigue = fatigue;
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

    public User getUser() {
        return user;
    }

    public void setUser(User user) {
        this.user = user;
    }

    @Override
    public boolean equals(Object o) {
        if (this == o) {
            return true;
        }
        if (o == null || getClass() != o.getClass()) {
            return false;
        }
        Personnage personnage = (Personnage) o;
        if(personnage.id == null || id == null) {
            return false;
        }
        return Objects.equals(id, personnage.id);
    }

    @Override
    public int hashCode() {
        return Objects.hashCode(id);
    }

    @Override
    public String toString() {
        return "Personnage{" +
            "id=" + id +
            ", nom='" + nom + "'" +
            ", description='" + description + "'" +
            ", mort='" + mort + "'" +
            ", blessure='" + blessure + "'" +
            ", fatigue='" + fatigue + "'" +
            ", compcombat='" + compcombat + "'" +
            ", compconstruire='" + compconstruire + "'" +
            ", compeau='" + compeau + "'" +
            ", comfabriquer='" + comfabriquer + "'" +
            ", compnour='" + compnour + "'" +
            ", compsoigner='" + compsoigner + "'" +
            ", datecreation='" + datecreation + "'" +
            ", datefin='" + datefin + "'" +
            "}";
    }
}
