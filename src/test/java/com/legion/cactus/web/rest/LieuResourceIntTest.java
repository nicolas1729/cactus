package com.legion.cactus.web.rest;

import com.legion.cactus.CactusApp;

import com.legion.cactus.domain.Lieu;
import com.legion.cactus.repository.LieuRepository;
import com.legion.cactus.repository.search.LieuSearchRepository;

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
 * Test class for the LieuResource REST controller.
 *
 * @see LieuResource
 */
@RunWith(SpringRunner.class)
@SpringBootTest(classes = CactusApp.class)
public class LieuResourceIntTest {

    private static final String DEFAULT_DESCRIPTION = "AAAAAAAAAA";
    private static final String UPDATED_DESCRIPTION = "BBBBBBBBBB";

    private static final Integer DEFAULT_LATITUDE = 0;
    private static final Integer UPDATED_LATITUDE = 1;

    private static final Integer DEFAULT_LONGITUDE = 0;
    private static final Integer UPDATED_LONGITUDE = 1;

    @Inject
    private LieuRepository lieuRepository;

    @Inject
    private LieuSearchRepository lieuSearchRepository;

    @Inject
    private MappingJackson2HttpMessageConverter jacksonMessageConverter;

    @Inject
    private PageableHandlerMethodArgumentResolver pageableArgumentResolver;

    @Inject
    private EntityManager em;

    private MockMvc restLieuMockMvc;

    private Lieu lieu;

    @Before
    public void setup() {
        MockitoAnnotations.initMocks(this);
        LieuResource lieuResource = new LieuResource();
        ReflectionTestUtils.setField(lieuResource, "lieuSearchRepository", lieuSearchRepository);
        ReflectionTestUtils.setField(lieuResource, "lieuRepository", lieuRepository);
        this.restLieuMockMvc = MockMvcBuilders.standaloneSetup(lieuResource)
            .setCustomArgumentResolvers(pageableArgumentResolver)
            .setMessageConverters(jacksonMessageConverter).build();
    }

    /**
     * Create an entity for this test.
     *
     * This is a static method, as tests for other entities might also need it,
     * if they test an entity which requires the current entity.
     */
    public static Lieu createEntity(EntityManager em) {
        Lieu lieu = new Lieu()
                .description(DEFAULT_DESCRIPTION)
                .latitude(DEFAULT_LATITUDE)
                .longitude(DEFAULT_LONGITUDE);
        return lieu;
    }

    @Before
    public void initTest() {
        lieuSearchRepository.deleteAll();
        lieu = createEntity(em);
    }

    @Test
    @Transactional
    public void createLieu() throws Exception {
        int databaseSizeBeforeCreate = lieuRepository.findAll().size();

        // Create the Lieu
        Lieu lieuDTO = lieu;

        restLieuMockMvc.perform(post("/api/lieus")
                .contentType(TestUtil.APPLICATION_JSON_UTF8)
                .content(TestUtil.convertObjectToJsonBytes(lieuDTO)))
                .andExpect(status().isCreated());

        // Validate the Lieu in the database
        List<Lieu> lieus = lieuRepository.findAll();
        assertThat(lieus).hasSize(databaseSizeBeforeCreate + 1);
        Lieu testLieu = lieus.get(lieus.size() - 1);
        assertThat(testLieu.getDescription()).isEqualTo(DEFAULT_DESCRIPTION);
        assertThat(testLieu.getLatitude()).isEqualTo(DEFAULT_LATITUDE);
        assertThat(testLieu.getLongitude()).isEqualTo(DEFAULT_LONGITUDE);

        // Validate the Lieu in ElasticSearch
        Lieu lieuEs = lieuSearchRepository.findOne(testLieu.getId());
        assertThat(lieuEs).isEqualToComparingFieldByField(testLieu);
    }

    @Test
    @Transactional
    public void checkLatitudeIsRequired() throws Exception {
        int databaseSizeBeforeTest = lieuRepository.findAll().size();
        // set the field null
        lieu.setLatitude(null);

        // Create the Lieu, which fails.
        Lieu lieuDTO = lieu;

        restLieuMockMvc.perform(post("/api/lieus")
                .contentType(TestUtil.APPLICATION_JSON_UTF8)
                .content(TestUtil.convertObjectToJsonBytes(lieuDTO)))
                .andExpect(status().isBadRequest());

        List<Lieu> lieus = lieuRepository.findAll();
        assertThat(lieus).hasSize(databaseSizeBeforeTest);
    }

    @Test
    @Transactional
    public void checkLongitudeIsRequired() throws Exception {
        int databaseSizeBeforeTest = lieuRepository.findAll().size();
        // set the field null
        lieu.setLongitude(null);

        // Create the Lieu, which fails.
        Lieu lieuDTO = lieu;

        restLieuMockMvc.perform(post("/api/lieus")
                .contentType(TestUtil.APPLICATION_JSON_UTF8)
                .content(TestUtil.convertObjectToJsonBytes(lieuDTO)))
                .andExpect(status().isBadRequest());

        List<Lieu> lieus = lieuRepository.findAll();
        assertThat(lieus).hasSize(databaseSizeBeforeTest);
    }

    @Test
    @Transactional
    public void getAllLieus() throws Exception {
        // Initialize the database
        lieuRepository.saveAndFlush(lieu);

        // Get all the lieus
        restLieuMockMvc.perform(get("/api/lieus?sort=id,desc"))
                .andExpect(status().isOk())
                .andExpect(content().contentType(MediaType.APPLICATION_JSON_UTF8_VALUE))
                .andExpect(jsonPath("$.[*].id").value(hasItem(lieu.getId().intValue())))
                .andExpect(jsonPath("$.[*].description").value(hasItem(DEFAULT_DESCRIPTION.toString())))
                .andExpect(jsonPath("$.[*].latitude").value(hasItem(DEFAULT_LATITUDE)))
                .andExpect(jsonPath("$.[*].longitude").value(hasItem(DEFAULT_LONGITUDE)));
    }

    @Test
    @Transactional
    public void getLieu() throws Exception {
        // Initialize the database
        lieuRepository.saveAndFlush(lieu);

        // Get the lieu
        restLieuMockMvc.perform(get("/api/lieus/{id}", lieu.getId()))
            .andExpect(status().isOk())
            .andExpect(content().contentType(MediaType.APPLICATION_JSON_UTF8_VALUE))
            .andExpect(jsonPath("$.id").value(lieu.getId().intValue()))
            .andExpect(jsonPath("$.description").value(DEFAULT_DESCRIPTION.toString()))
            .andExpect(jsonPath("$.latitude").value(DEFAULT_LATITUDE))
            .andExpect(jsonPath("$.longitude").value(DEFAULT_LONGITUDE));
    }

    @Test
    @Transactional
    public void getNonExistingLieu() throws Exception {
        // Get the lieu
        restLieuMockMvc.perform(get("/api/lieus/{id}", Long.MAX_VALUE))
                .andExpect(status().isNotFound());
    }

    @Test
    @Transactional
    public void updateLieu() throws Exception {
        // Initialize the database
        lieuRepository.saveAndFlush(lieu);
        lieuSearchRepository.save(lieu);
        int databaseSizeBeforeUpdate = lieuRepository.findAll().size();

        // Update the lieu
        Lieu updatedLieu = lieuRepository.findOne(lieu.getId());
        updatedLieu
                .description(UPDATED_DESCRIPTION)
                .latitude(UPDATED_LATITUDE)
                .longitude(UPDATED_LONGITUDE);
        Lieu lieuDTO = lieu;

        restLieuMockMvc.perform(put("/api/lieus")
                .contentType(TestUtil.APPLICATION_JSON_UTF8)
                .content(TestUtil.convertObjectToJsonBytes(lieuDTO)))
                .andExpect(status().isOk());

        // Validate the Lieu in the database
        List<Lieu> lieus = lieuRepository.findAll();
        assertThat(lieus).hasSize(databaseSizeBeforeUpdate);
        Lieu testLieu = lieus.get(lieus.size() - 1);
        assertThat(testLieu.getDescription()).isEqualTo(UPDATED_DESCRIPTION);
        assertThat(testLieu.getLatitude()).isEqualTo(UPDATED_LATITUDE);
        assertThat(testLieu.getLongitude()).isEqualTo(UPDATED_LONGITUDE);

        // Validate the Lieu in ElasticSearch
        Lieu lieuEs = lieuSearchRepository.findOne(testLieu.getId());
        assertThat(lieuEs).isEqualToComparingFieldByField(testLieu);
    }

    @Test
    @Transactional
    public void deleteLieu() throws Exception {
        // Initialize the database
        lieuRepository.saveAndFlush(lieu);
        lieuSearchRepository.save(lieu);
        int databaseSizeBeforeDelete = lieuRepository.findAll().size();

        // Get the lieu
        restLieuMockMvc.perform(delete("/api/lieus/{id}", lieu.getId())
                .accept(TestUtil.APPLICATION_JSON_UTF8))
                .andExpect(status().isOk());

        // Validate ElasticSearch is empty
        boolean lieuExistsInEs = lieuSearchRepository.exists(lieu.getId());
        assertThat(lieuExistsInEs).isFalse();

        // Validate the database is empty
        List<Lieu> lieus = lieuRepository.findAll();
        assertThat(lieus).hasSize(databaseSizeBeforeDelete - 1);
    }

    @Test
    @Transactional
    public void searchLieu() throws Exception {
        // Initialize the database
        lieuRepository.saveAndFlush(lieu);
        lieuSearchRepository.save(lieu);

        // Search the lieu
        restLieuMockMvc.perform(get("/api/_search/lieus?query=id:" + lieu.getId()))
            .andExpect(status().isOk())
            .andExpect(content().contentType(MediaType.APPLICATION_JSON_UTF8_VALUE))
            .andExpect(jsonPath("$.[*].id").value(hasItem(lieu.getId().intValue())))
            .andExpect(jsonPath("$.[*].description").value(hasItem(DEFAULT_DESCRIPTION.toString())))
            .andExpect(jsonPath("$.[*].latitude").value(hasItem(DEFAULT_LATITUDE)))
            .andExpect(jsonPath("$.[*].longitude").value(hasItem(DEFAULT_LONGITUDE)));
    }
}
