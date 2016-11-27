package com.legion.cactus.domain;

import org.hibernate.annotations.Cache;
import org.hibernate.annotations.CacheConcurrencyStrategy;
import org.springframework.data.elasticsearch.annotations.Document;

import javax.persistence.*;
import javax.validation.constraints.*;
import java.io.Serializable;
import java.time.LocalDate;
import java.util.Objects;

/**
 * A Personnage.
 */
@Entity
@Table(name = "personnage")
@Cache(usage = CacheConcurrencyStrategy.NONSTRICT_READ_WRITE)
@Document(indexName = "personnage")
public class Personnage implements Serializable {

    private static final long serialVersionUID = 1L;

    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private Long id;

    @Column(name = "nom")
    private String nom;

    @Column(name = "description")
    private String description;

    @NotNull
    @Column(name = "mort", nullable = false)
    private Boolean mort;

    @NotNull
    @Min(value = 0)
    @Max(value = 50)
    @Column(name = "blessure", nullable = false)
    private Integer blessure;

    @NotNull
    @Min(value = 0)
    @Max(value = 50)
    @Column(name = "fatigue", nullable = false)
    private Integer fatigue;

    @NotNull
    @Min(value = 0)
    @Column(name = "compeau", nullable = false)
    private Integer compeau;

    @NotNull
    @Min(value = 0)
    @Column(name = "compnour", nullable = false)
    private Integer compnour;

    @NotNull
    @Min(value = 0)
    @Column(name = "compfabriquer", nullable = false)
    private Integer compfabriquer;

    @NotNull
    @Min(value = 0)
    @Column(name = "compconstruire", nullable = false)
    private Integer compconstruire;

    @NotNull
    @Min(value = 0)
    @Column(name = "compcombat", nullable = false)
    private Integer compcombat;

    @NotNull
    @Min(value = 0)
    @Column(name = "compsoigner", nullable = false)
    private Integer compsoigner;

    @Column(name = "datecreation")
    private LocalDate datecreation;

    @Column(name = "datefin")
    private LocalDate datefin;

    @ManyToOne
    private User user;

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getNom() {
        return nom;
    }

    public Personnage nom(String nom) {
        this.nom = nom;
        return this;
    }

    public void setNom(String nom) {
        this.nom = nom;
    }

    public String getDescription() {
        return description;
    }

    public Personnage description(String description) {
        this.description = description;
        return this;
    }

    public void setDescription(String description) {
        this.description = description;
    }

    public Boolean isMort() {
        return mort;
    }

    public Personnage mort(Boolean mort) {
        this.mort = mort;
        return this;
    }

    public void setMort(Boolean mort) {
        this.mort = mort;
    }

    public Integer getBlessure() {
        return blessure;
    }

    public Personnage blessure(Integer blessure) {
        this.blessure = blessure;
        return this;
    }

    public void setBlessure(Integer blessure) {
        this.blessure = blessure;
    }

    public Integer getFatigue() {
        return fatigue;
    }

    public Personnage fatigue(Integer fatigue) {
        this.fatigue = fatigue;
        return this;
    }

    public void setFatigue(Integer fatigue) {
        this.fatigue = fatigue;
    }

    public Integer getCompeau() {
        return compeau;
    }

    public Personnage compeau(Integer compeau) {
        this.compeau = compeau;
        return this;
    }

    public void setCompeau(Integer compeau) {
        this.compeau = compeau;
    }

    public Integer getCompnour() {
        return compnour;
    }

    public Personnage compnour(Integer compnour) {
        this.compnour = compnour;
        return this;
    }

    public void setCompnour(Integer compnour) {
        this.compnour = compnour;
    }

    public Integer getCompfabriquer() {
        return compfabriquer;
    }

    public Personnage compfabriquer(Integer compfabriquer) {
        this.compfabriquer = compfabriquer;
        return this;
    }

    public void setCompfabriquer(Integer compfabriquer) {
        this.compfabriquer = compfabriquer;
    }

    public Integer getCompconstruire() {
        return compconstruire;
    }

    public Personnage compconstruire(Integer compconstruire) {
        this.compconstruire = compconstruire;
        return this;
    }

    public void setCompconstruire(Integer compconstruire) {
        this.compconstruire = compconstruire;
    }

    public Integer getCompcombat() {
        return compcombat;
    }

    public Personnage compcombat(Integer compcombat) {
        this.compcombat = compcombat;
        return this;
    }

    public void setCompcombat(Integer compcombat) {
        this.compcombat = compcombat;
    }

    public Integer getCompsoigner() {
        return compsoigner;
    }

    public Personnage compsoigner(Integer compsoigner) {
        this.compsoigner = compsoigner;
        return this;
    }

    public void setCompsoigner(Integer compsoigner) {
        this.compsoigner = compsoigner;
    }

    public LocalDate getDatecreation() {
        return datecreation;
    }

    public Personnage datecreation(LocalDate datecreation) {
        this.datecreation = datecreation;
        return this;
    }

    public void setDatecreation(LocalDate datecreation) {
        this.datecreation = datecreation;
    }

    public LocalDate getDatefin() {
        return datefin;
    }

    public Personnage datefin(LocalDate datefin) {
        this.datefin = datefin;
        return this;
    }

    public void setDatefin(LocalDate datefin) {
        this.datefin = datefin;
    }

    public User getUser() {
        return user;
    }

    public Personnage user(User user) {
        this.user = user;
        return this;
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
