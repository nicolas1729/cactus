package com.cactus.web.rest;

import com.cactus.Application;
import com.cactus.domain.Terrain;
import com.cactus.repository.TerrainRepository;

import org.junit.Before;
import org.junit.Test;
import org.junit.runner.RunWith;
import static org.hamcrest.Matchers.hasItem;
import org.mockito.MockitoAnnotations;
import org.springframework.boot.test.IntegrationTest;
import org.springframework.boot.test.SpringApplicationConfiguration;
import org.springframework.http.MediaType;
import org.springframework.http.converter.json.MappingJackson2HttpMessageConverter;
import org.springframework.data.web.PageableHandlerMethodArgumentResolver;
import org.springframework.test.context.junit4.SpringJUnit4ClassRunner;
import org.springframework.test.context.web.WebAppConfiguration;
import org.springframework.test.util.ReflectionTestUtils;
import org.springframework.test.web.servlet.MockMvc;
import org.springframework.test.web.servlet.setup.MockMvcBuilders;

import javax.annotation.PostConstruct;
import javax.inject.Inject;
import java.util.List;

import static org.assertj.core.api.Assertions.assertThat;
import static org.springframework.test.web.servlet.request.MockMvcRequestBuilders.*;
import static org.springframework.test.web.servlet.result.MockMvcResultMatchers.*;


/**
 * Test class for the TerrainResource REST controller.
 *
 * @see TerrainResource
 */
@RunWith(SpringJUnit4ClassRunner.class)
@SpringApplicationConfiguration(classes = Application.class)
@WebAppConfiguration
@IntegrationTest
public class TerrainResourceIntTest {

    private static final String DEFAULT_NOM = "AAAAA";
    private static final String UPDATED_NOM = "BBBBB";
    private static final String DEFAULT_DESCRIPTION = "AAAAA";
    private static final String UPDATED_DESCRIPTION = "BBBBB";

    private static final Integer DEFAULT_PRODEAU = 1;
    private static final Integer UPDATED_PRODEAU = 2;

    private static final Integer DEFAULT_PRODNOUR = 1;
    private static final Integer UPDATED_PRODNOUR = 2;

    @Inject
    private TerrainRepository terrainRepository;

    @Inject
    private MappingJackson2HttpMessageConverter jacksonMessageConverter;

    @Inject
    private PageableHandlerMethodArgumentResolver pageableArgumentResolver;

    private MockMvc restTerrainMockMvc;

    private Terrain terrain;

    @PostConstruct
    public void setup() {
        MockitoAnnotations.initMocks(this);
        TerrainResource terrainResource = new TerrainResource();
        ReflectionTestUtils.setField(terrainResource, "terrainRepository", terrainRepository);
        this.restTerrainMockMvc = MockMvcBuilders.standaloneSetup(terrainResource)
            .setCustomArgumentResolvers(pageableArgumentResolver)
            .setMessageConverters(jacksonMessageConverter).build();
    }

    @Before
    public void initTest() {
        terrainRepository.deleteAll();
        terrain = new Terrain();
        terrain.setNom(DEFAULT_NOM);
        terrain.setDescription(DEFAULT_DESCRIPTION);
        terrain.setProdeau(DEFAULT_PRODEAU);
        terrain.setProdnour(DEFAULT_PRODNOUR);
    }

    @Test
    public void createTerrain() throws Exception {
        int databaseSizeBeforeCreate = terrainRepository.findAll().size();

        // Create the Terrain

        restTerrainMockMvc.perform(post("/api/terrains")
                .contentType(TestUtil.APPLICATION_JSON_UTF8)
                .content(TestUtil.convertObjectToJsonBytes(terrain)))
                .andExpect(status().isCreated());

        // Validate the Terrain in the database
        List<Terrain> terrains = terrainRepository.findAll();
        assertThat(terrains).hasSize(databaseSizeBeforeCreate + 1);
        Terrain testTerrain = terrains.get(terrains.size() - 1);
        assertThat(testTerrain.getNom()).isEqualTo(DEFAULT_NOM);
        assertThat(testTerrain.getDescription()).isEqualTo(DEFAULT_DESCRIPTION);
        assertThat(testTerrain.getProdeau()).isEqualTo(DEFAULT_PRODEAU);
        assertThat(testTerrain.getProdnour()).isEqualTo(DEFAULT_PRODNOUR);
    }

    @Test
    public void checkNomIsRequired() throws Exception {
        int databaseSizeBeforeTest = terrainRepository.findAll().size();
        // set the field null
        terrain.setNom(null);

        // Create the Terrain, which fails.

        restTerrainMockMvc.perform(post("/api/terrains")
                .contentType(TestUtil.APPLICATION_JSON_UTF8)
                .content(TestUtil.convertObjectToJsonBytes(terrain)))
                .andExpect(status().isBadRequest());

        List<Terrain> terrains = terrainRepository.findAll();
        assertThat(terrains).hasSize(databaseSizeBeforeTest);
    }

    @Test
    public void checkProdeauIsRequired() throws Exception {
        int databaseSizeBeforeTest = terrainRepository.findAll().size();
        // set the field null
        terrain.setProdeau(null);

        // Create the Terrain, which fails.

        restTerrainMockMvc.perform(post("/api/terrains")
                .contentType(TestUtil.APPLICATION_JSON_UTF8)
                .content(TestUtil.convertObjectToJsonBytes(terrain)))
                .andExpect(status().isBadRequest());

        List<Terrain> terrains = terrainRepository.findAll();
        assertThat(terrains).hasSize(databaseSizeBeforeTest);
    }

    @Test
    public void checkProdnourIsRequired() throws Exception {
        int databaseSizeBeforeTest = terrainRepository.findAll().size();
        // set the field null
        terrain.setProdnour(null);

        // Create the Terrain, which fails.

        restTerrainMockMvc.perform(post("/api/terrains")
                .contentType(TestUtil.APPLICATION_JSON_UTF8)
                .content(TestUtil.convertObjectToJsonBytes(terrain)))
                .andExpect(status().isBadRequest());

        List<Terrain> terrains = terrainRepository.findAll();
        assertThat(terrains).hasSize(databaseSizeBeforeTest);
    }

    @Test
    public void getAllTerrains() throws Exception {
        // Initialize the database
        terrainRepository.save(terrain);

        // Get all the terrains
        restTerrainMockMvc.perform(get("/api/terrains?sort=id,desc"))
                .andExpect(status().isOk())
                .andExpect(content().contentType(MediaType.APPLICATION_JSON))
                .andExpect(jsonPath("$.[*].id").value(hasItem(terrain.getId())))
                .andExpect(jsonPath("$.[*].nom").value(hasItem(DEFAULT_NOM.toString())))
                .andExpect(jsonPath("$.[*].description").value(hasItem(DEFAULT_DESCRIPTION.toString())))
                .andExpect(jsonPath("$.[*].prodeau").value(hasItem(DEFAULT_PRODEAU)))
                .andExpect(jsonPath("$.[*].prodnour").value(hasItem(DEFAULT_PRODNOUR)));
    }

    @Test
    public void getTerrain() throws Exception {
        // Initialize the database
        terrainRepository.save(terrain);

        // Get the terrain
        restTerrainMockMvc.perform(get("/api/terrains/{id}", terrain.getId()))
            .andExpect(status().isOk())
            .andExpect(content().contentType(MediaType.APPLICATION_JSON))
            .andExpect(jsonPath("$.id").value(terrain.getId()))
            .andExpect(jsonPath("$.nom").value(DEFAULT_NOM.toString()))
            .andExpect(jsonPath("$.description").value(DEFAULT_DESCRIPTION.toString()))
            .andExpect(jsonPath("$.prodeau").value(DEFAULT_PRODEAU))
            .andExpect(jsonPath("$.prodnour").value(DEFAULT_PRODNOUR));
    }

    @Test
    public void getNonExistingTerrain() throws Exception {
        // Get the terrain
        restTerrainMockMvc.perform(get("/api/terrains/{id}", Long.MAX_VALUE))
                .andExpect(status().isNotFound());
    }

    @Test
    public void updateTerrain() throws Exception {
        // Initialize the database
        terrainRepository.save(terrain);

		int databaseSizeBeforeUpdate = terrainRepository.findAll().size();

        // Update the terrain
        terrain.setNom(UPDATED_NOM);
        terrain.setDescription(UPDATED_DESCRIPTION);
        terrain.setProdeau(UPDATED_PRODEAU);
        terrain.setProdnour(UPDATED_PRODNOUR);

        restTerrainMockMvc.perform(put("/api/terrains")
                .contentType(TestUtil.APPLICATION_JSON_UTF8)
                .content(TestUtil.convertObjectToJsonBytes(terrain)))
                .andExpect(status().isOk());

        // Validate the Terrain in the database
        List<Terrain> terrains = terrainRepository.findAll();
        assertThat(terrains).hasSize(databaseSizeBeforeUpdate);
        Terrain testTerrain = terrains.get(terrains.size() - 1);
        assertThat(testTerrain.getNom()).isEqualTo(UPDATED_NOM);
        assertThat(testTerrain.getDescription()).isEqualTo(UPDATED_DESCRIPTION);
        assertThat(testTerrain.getProdeau()).isEqualTo(UPDATED_PRODEAU);
        assertThat(testTerrain.getProdnour()).isEqualTo(UPDATED_PRODNOUR);
    }

    @Test
    public void deleteTerrain() throws Exception {
        // Initialize the database
        terrainRepository.save(terrain);

		int databaseSizeBeforeDelete = terrainRepository.findAll().size();

        // Get the terrain
        restTerrainMockMvc.perform(delete("/api/terrains/{id}", terrain.getId())
                .accept(TestUtil.APPLICATION_JSON_UTF8))
                .andExpect(status().isOk());

        // Validate the database is empty
        List<Terrain> terrains = terrainRepository.findAll();
        assertThat(terrains).hasSize(databaseSizeBeforeDelete - 1);
    }
}
