package com.legion.cactus.web.rest;

import com.legion.cactus.CactusApp;

import com.legion.cactus.domain.Terrain;
import com.legion.cactus.repository.TerrainRepository;
import com.legion.cactus.repository.search.TerrainSearchRepository;

import org.junit.Before;
import org.junit.Test;
import org.junit.runner.RunWith;
import static org.hamcrest.Matchers.hasItem;
import org.mockito.MockitoAnnotations;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.http.MediaType;
import org.springframework.http.converter.json.MappingJackson2HttpMessageConverter;
import org.springframework.data.web.PageableHandlerMethodArgumentResolver;
import org.springframework.test.context.junit4.SpringRunner;
import org.springframework.test.util.ReflectionTestUtils;
import org.springframework.test.web.servlet.MockMvc;
import org.springframework.test.web.servlet.setup.MockMvcBuilders;
import org.springframework.transaction.annotation.Transactional;

import javax.inject.Inject;
import javax.persistence.EntityManager;
import java.util.List;

import static org.assertj.core.api.Assertions.assertThat;
import static org.springframework.test.web.servlet.request.MockMvcRequestBuilders.*;
import static org.springframework.test.web.servlet.result.MockMvcResultMatchers.*;

/**
 * Test class for the TerrainResource REST controller.
 *
 * @see TerrainResource
 */
@RunWith(SpringRunner.class)
@SpringBootTest(classes = CactusApp.class)
public class TerrainResourceIntTest {

    private static final String DEFAULT_NOM = "AAAAAAAAAA";
    private static final String UPDATED_NOM = "BBBBBBBBBB";

    private static final String DEFAULT_DESCRIPTION = "AAAAAAAAAA";
    private static final String UPDATED_DESCRIPTION = "BBBBBBBBBB";

    private static final Integer DEFAULT_PRODEAU = 1;
    private static final Integer UPDATED_PRODEAU = 2;

    private static final Integer DEFAULT_PRODNOUR = 1;
    private static final Integer UPDATED_PRODNOUR = 2;

    @Inject
    private TerrainRepository terrainRepository;

    @Inject
    private TerrainSearchRepository terrainSearchRepository;

    @Inject
    private MappingJackson2HttpMessageConverter jacksonMessageConverter;

    @Inject
    private PageableHandlerMethodArgumentResolver pageableArgumentResolver;

    @Inject
    private EntityManager em;

    private MockMvc restTerrainMockMvc;

    private Terrain terrain;

    @Before
    public void setup() {
        MockitoAnnotations.initMocks(this);
        TerrainResource terrainResource = new TerrainResource();
        ReflectionTestUtils.setField(terrainResource, "terrainSearchRepository", terrainSearchRepository);
        ReflectionTestUtils.setField(terrainResource, "terrainRepository", terrainRepository);
        this.restTerrainMockMvc = MockMvcBuilders.standaloneSetup(terrainResource)
            .setCustomArgumentResolvers(pageableArgumentResolver)
            .setMessageConverters(jacksonMessageConverter).build();
    }

    /**
     * Create an entity for this test.
     *
     * This is a static method, as tests for other entities might also need it,
     * if they test an entity which requires the current entity.
     */
    public static Terrain createEntity(EntityManager em) {
        Terrain terrain = new Terrain()
                .nom(DEFAULT_NOM)
                .description(DEFAULT_DESCRIPTION)
                .prodeau(DEFAULT_PRODEAU)
                .prodnour(DEFAULT_PRODNOUR);
        return terrain;
    }

    @Before
    public void initTest() {
        terrainSearchRepository.deleteAll();
        terrain = createEntity(em);
    }

    @Test
    @Transactional
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

        // Validate the Terrain in ElasticSearch
        Terrain terrainEs = terrainSearchRepository.findOne(testTerrain.getId());
        assertThat(terrainEs).isEqualToComparingFieldByField(testTerrain);
    }

    @Test
    @Transactional
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
    @Transactional
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
    @Transactional
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
    @Transactional
    public void getAllTerrains() throws Exception {
        // Initialize the database
        terrainRepository.saveAndFlush(terrain);

        // Get all the terrains
        restTerrainMockMvc.perform(get("/api/terrains?sort=id,desc"))
                .andExpect(status().isOk())
                .andExpect(content().contentType(MediaType.APPLICATION_JSON_UTF8_VALUE))
                .andExpect(jsonPath("$.[*].id").value(hasItem(terrain.getId().intValue())))
                .andExpect(jsonPath("$.[*].nom").value(hasItem(DEFAULT_NOM.toString())))
                .andExpect(jsonPath("$.[*].description").value(hasItem(DEFAULT_DESCRIPTION.toString())))
                .andExpect(jsonPath("$.[*].prodeau").value(hasItem(DEFAULT_PRODEAU)))
                .andExpect(jsonPath("$.[*].prodnour").value(hasItem(DEFAULT_PRODNOUR)));
    }

    @Test
    @Transactional
    public void getTerrain() throws Exception {
        // Initialize the database
        terrainRepository.saveAndFlush(terrain);

        // Get the terrain
        restTerrainMockMvc.perform(get("/api/terrains/{id}", terrain.getId()))
            .andExpect(status().isOk())
            .andExpect(content().contentType(MediaType.APPLICATION_JSON_UTF8_VALUE))
            .andExpect(jsonPath("$.id").value(terrain.getId().intValue()))
            .andExpect(jsonPath("$.nom").value(DEFAULT_NOM.toString()))
            .andExpect(jsonPath("$.description").value(DEFAULT_DESCRIPTION.toString()))
            .andExpect(jsonPath("$.prodeau").value(DEFAULT_PRODEAU))
            .andExpect(jsonPath("$.prodnour").value(DEFAULT_PRODNOUR));
    }

    @Test
    @Transactional
    public void getNonExistingTerrain() throws Exception {
        // Get the terrain
        restTerrainMockMvc.perform(get("/api/terrains/{id}", Long.MAX_VALUE))
                .andExpect(status().isNotFound());
    }

    @Test
    @Transactional
    public void updateTerrain() throws Exception {
        // Initialize the database
        terrainRepository.saveAndFlush(terrain);
        terrainSearchRepository.save(terrain);
        int databaseSizeBeforeUpdate = terrainRepository.findAll().size();

        // Update the terrain
        Terrain updatedTerrain = terrainRepository.findOne(terrain.getId());
        updatedTerrain
                .nom(UPDATED_NOM)
                .description(UPDATED_DESCRIPTION)
                .prodeau(UPDATED_PRODEAU)
                .prodnour(UPDATED_PRODNOUR);

        restTerrainMockMvc.perform(put("/api/terrains")
                .contentType(TestUtil.APPLICATION_JSON_UTF8)
                .content(TestUtil.convertObjectToJsonBytes(updatedTerrain)))
                .andExpect(status().isOk());

        // Validate the Terrain in the database
        List<Terrain> terrains = terrainRepository.findAll();
        assertThat(terrains).hasSize(databaseSizeBeforeUpdate);
        Terrain testTerrain = terrains.get(terrains.size() - 1);
        assertThat(testTerrain.getNom()).isEqualTo(UPDATED_NOM);
        assertThat(testTerrain.getDescription()).isEqualTo(UPDATED_DESCRIPTION);
        assertThat(testTerrain.getProdeau()).isEqualTo(UPDATED_PRODEAU);
        assertThat(testTerrain.getProdnour()).isEqualTo(UPDATED_PRODNOUR);

        // Validate the Terrain in ElasticSearch
        Terrain terrainEs = terrainSearchRepository.findOne(testTerrain.getId());
        assertThat(terrainEs).isEqualToComparingFieldByField(testTerrain);
    }

    @Test
    @Transactional
    public void deleteTerrain() throws Exception {
        // Initialize the database
        terrainRepository.saveAndFlush(terrain);
        terrainSearchRepository.save(terrain);
        int databaseSizeBeforeDelete = terrainRepository.findAll().size();

        // Get the terrain
        restTerrainMockMvc.perform(delete("/api/terrains/{id}", terrain.getId())
                .accept(TestUtil.APPLICATION_JSON_UTF8))
                .andExpect(status().isOk());

        // Validate ElasticSearch is empty
        boolean terrainExistsInEs = terrainSearchRepository.exists(terrain.getId());
        assertThat(terrainExistsInEs).isFalse();

        // Validate the database is empty
        List<Terrain> terrains = terrainRepository.findAll();
        assertThat(terrains).hasSize(databaseSizeBeforeDelete - 1);
    }

    @Test
    @Transactional
    public void searchTerrain() throws Exception {
        // Initialize the database
        terrainRepository.saveAndFlush(terrain);
        terrainSearchRepository.save(terrain);

        // Search the terrain
        restTerrainMockMvc.perform(get("/api/_search/terrains?query=id:" + terrain.getId()))
            .andExpect(status().isOk())
            .andExpect(content().contentType(MediaType.APPLICATION_JSON_UTF8_VALUE))
            .andExpect(jsonPath("$.[*].id").value(hasItem(terrain.getId().intValue())))
            .andExpect(jsonPath("$.[*].nom").value(hasItem(DEFAULT_NOM.toString())))
            .andExpect(jsonPath("$.[*].description").value(hasItem(DEFAULT_DESCRIPTION.toString())))
            .andExpect(jsonPath("$.[*].prodeau").value(hasItem(DEFAULT_PRODEAU)))
            .andExpect(jsonPath("$.[*].prodnour").value(hasItem(DEFAULT_PRODNOUR)));
    }
}
