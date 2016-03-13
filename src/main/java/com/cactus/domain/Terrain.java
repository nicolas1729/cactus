package com.cactus.domain;

import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;
import org.springframework.data.mongodb.core.mapping.Field;

import javax.validation.constraints.*;
import java.io.Serializable;
import java.util.Objects;

/**
 * A Terrain.
 */

@Document(collection = "terrain")
public class Terrain implements Serializable {

    @Id
    private String id;

    @NotNull
    @Field("nom")
    private String nom;
    
    @Field("description")
    private String description;
    
    @NotNull
    @Field("prodeau")
    private Integer prodeau;
    
    @NotNull
    @Field("prodnour")
    private Integer prodnour;
    
    public String getId() {
        return id;
    }

    public void setId(String id) {
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

    public Integer getProdeau() {
        return prodeau;
    }
    
    public void setProdeau(Integer prodeau) {
        this.prodeau = prodeau;
    }

    public Integer getProdnour() {
        return prodnour;
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
