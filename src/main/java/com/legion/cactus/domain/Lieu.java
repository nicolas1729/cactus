package com.legion.cactus.domain;

import org.hibernate.annotations.Cache;
import org.hibernate.annotations.CacheConcurrencyStrategy;
import org.springframework.data.elasticsearch.annotations.Document;

import javax.persistence.*;
import javax.validation.constraints.*;
import java.io.Serializable;
import java.util.Objects;

/**
 * A Lieu.
 */
@Entity
@Table(name = "lieu")
@Cache(usage = CacheConcurrencyStrategy.NONSTRICT_READ_WRITE)
@Document(indexName = "lieu")
public class Lieu implements Serializable {

    private static final long serialVersionUID = 1L;

    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private Long id;

    @Column(name = "description")
    private String description;

    @NotNull
    @Min(value = 0)
    @Column(name = "latitude", nullable = false)
    private Integer latitude;

    @NotNull
    @Min(value = 0)
    @Column(name = "longitude", nullable = false)
    private Integer longitude;

    @ManyToOne
    private Terrain terrain;

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getDescription() {
        return description;
    }

    public Lieu description(String description) {
        this.description = description;
        return this;
    }

    public void setDescription(String description) {
        this.description = description;
    }

    public Integer getLatitude() {
        return latitude;
    }

    public Lieu latitude(Integer latitude) {
        this.latitude = latitude;
        return this;
    }

    public void setLatitude(Integer latitude) {
        this.latitude = latitude;
    }

    public Integer getLongitude() {
        return longitude;
    }

    public Lieu longitude(Integer longitude) {
        this.longitude = longitude;
        return this;
    }

    public void setLongitude(Integer longitude) {
        this.longitude = longitude;
    }

    public Terrain getTerrain() {
        return terrain;
    }

    public Lieu terrain(Terrain terrain) {
        this.terrain = terrain;
        return this;
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
