package com.legion.cactus.domain;

import org.hibernate.annotations.Cache;
import org.hibernate.annotations.CacheConcurrencyStrategy;
import org.springframework.data.elasticsearch.annotations.Document;

import javax.persistence.*;
import javax.validation.constraints.*;
import java.io.Serializable;
import java.util.Objects;

/**
 * A Terrain.
 */
@Entity
@Table(name = "terrain")
@Cache(usage = CacheConcurrencyStrategy.NONSTRICT_READ_WRITE)
@Document(indexName = "terrain")
public class Terrain implements Serializable {

    private static final long serialVersionUID = 1L;

    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private Long id;

    @NotNull
    @Column(name = "nom", nullable = false)
    private String nom;

    @Column(name = "description")
    private String description;

    @NotNull
    @Column(name = "prodeau", nullable = false)
    private Integer prodeau;

    @NotNull
    @Column(name = "prodnour", nullable = false)
    private Integer prodnour;

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getNom() {
        return nom;
    }

    public Terrain nom(String nom) {
        this.nom = nom;
        return this;
    }

    public void setNom(String nom) {
        this.nom = nom;
    }

    public String getDescription() {
        return description;
    }

    public Terrain description(String description) {
        this.description = description;
        return this;
    }

    public void setDescription(String description) {
        this.description = description;
    }

    public Integer getProdeau() {
        return prodeau;
    }

    public Terrain prodeau(Integer prodeau) {
        this.prodeau = prodeau;
        return this;
    }

    public void setProdeau(Integer prodeau) {
        this.prodeau = prodeau;
    }

    public Integer getProdnour() {
        return prodnour;
    }

    public Terrain prodnour(Integer prodnour) {
        this.prodnour = prodnour;
        return this;
    }

    public void setProdnour(Integer prodnour) {
        this.prodnour = prodnour;
    }

    @Override
    public boolean equals(Object o) {
        if (this == o) {
            return true;
        }
        if (o == null || getClass() != o.getClass()) {
            return false;
        }
        Terrain terrain = (Terrain) o;
        if(terrain.id == null || id == null) {
            return false;
        }
        return Objects.equals(id, terrain.id);
    }

    @Override
    public int hashCode() {
        return Objects.hashCode(id);
    }

    @Override
    public String toString() {
        return "Terrain{" +
            "id=" + id +
            ", nom='" + nom + "'" +
            ", description='" + description + "'" +
            ", prodeau='" + prodeau + "'" +
            ", prodnour='" + prodnour + "'" +
            '}';
    }
}
