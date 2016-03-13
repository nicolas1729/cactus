package com.cactus.domain;

import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;
import org.springframework.data.mongodb.core.mapping.Field;

import javax.validation.constraints.*;
import java.io.Serializable;
import java.util.Objects;
import org.springframework.data.mongodb.core.mapping.DBRef;

/**
 * A Lieu.
 */

@Document(collection = "lieu")
public class Lieu implements Serializable {

    @Id
    private String id;

    @Field("description")
    private String description;
    
    @NotNull
    @Field("latitude")
    private Integer latitude;
    
    @NotNull
    @Field("longitude")
    private Integer longitude;
    
    @DBRef
    private Terrain terrain;
    
    public String getId() {
        return id;
    }

    public void setId(String id) {
        this.id = id;
    }

    public String getDescription() {
        return description;
    }
    
    public void setDescription(String description) {
        this.description = description;
    }

    public Integer getLatitude() {
        return latitude;
    }
    
    public void setLatitude(Integer latitude) {
        this.latitude = latitude;
    }

    public Integer getLongitude() {
        return longitude;
    }
    
    public void setLongitude(Integer longitude) {
        this.longitude = longitude;
    }

    public Terrain getTerrain() {
        return terrain;
    }

    public void setTerrain(Terrain terrain) {
        this.terrain = terrain;
    }

    @Override
    public boolean equals(Object o) {
        if (this == o) {
            return true;
        }
        if (o == null || getClass() != o.getClass()) {
            return false;
        }
        Lieu lieu = (Lieu) o;
        if(lieu.id == null || id == null) {
            return false;
        }
        return Objects.equals(id, lieu.id);
    }

    @Override
    public int hashCode() {
        return Objects.hashCode(id);
    }

    @Override
    public String toString() {
        return "Lieu{" +
            "id=" + id +
            ", description='" + description + "'" +
            ", latitude='" + latitude + "'" +
            ", longitude='" + longitude + "'" +
            '}';
    }
}
