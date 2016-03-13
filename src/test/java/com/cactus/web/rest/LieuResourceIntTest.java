package com.cactus.web.rest;

import com.cactus.Application;
import com.cactus.domain.Lieu;
import com.cactus.repository.LieuRepository;
import com.cactus.service.LieuService;

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
 * Test class for the LieuResource REST controller.
 *
 * @see LieuResource
 */
@RunWith(SpringJUnit4ClassRunner.class)
@SpringApplicationConfiguration(classes = Application.class)
@WebAppConfiguration
@IntegrationTest
public class LieuResourceIntTest {

    private static final String DEFAULT_DESCRIPTION = "AAAAA";
    private static final String UPDATED_DESCRIPTION = "BBBBB";

    private static final Integer DEFAULT_LATITUDE = 1;
    private static final Integer UPDATED_LATITUDE = 2;

    private static final Integer DEFAULT_LONGITUDE = 1;
    private static final Integer UPDATED_LONGITUDE = 2;

    @Inject
    private LieuRepository lieuRepository;

    @Inject
    private LieuService lieuService;

    @Inject
    private MappingJackson2HttpMessageConverter jacksonMessageConverter;

    @Inject
    private PageableHandlerMethodArgumentResolver pageableArgumentResolver;

    private MockMvc restLieuMockMvc;

    private Lieu lieu;

    @PostConstruct
    public void setup() {
        MockitoAnnotations.initMocks(this);
        LieuResource lieuResource = new LieuResource();
        ReflectionTestUtils.setField(lieuResource, "lieuService", lieuService);
        this.restLieuMockMvc = MockMvcBuilders.standaloneSetup(lieuResource)
            .setCustomArgumentResolvers(pageableArgumentResolver)
            .setMessageConverters(jacksonMessageConverter).build();
    }

    @Before
    public void initTest() {
        lieuRepository.deleteAll();
        lieu = new Lieu();
        lieu.setDescription(DEFAULT_DESCRIPTION);
        lieu.setLatitude(DEFAULT_LATITUDE);
        lieu.setLongitude(DEFAULT_LONGITUDE);
    }

    @Test
    public void createLieu() throws Exception {
        int databaseSizeBeforeCreate = lieuRepository.findAll().size();

        // Create the Lieu

        restLieuMockMvc.perform(post("/api/lieus")
                .contentType(TestUtil.APPLICATION_JSON_UTF8)
                .content(TestUtil.convertObjectToJsonBytes(lieu)))
                .andExpect(status().isCreated());

        // Validate the Lieu in the database
        List<Lieu> lieus = lieuRepository.findAll();
        assertThat(lieus).hasSize(databaseSizeBeforeCreate + 1);
        Lieu testLieu = lieus.get(lieus.size() - 1);
        assertThat(testLieu.getDescription()).isEqualTo(DEFAULT_DESCRIPTION);
        assertThat(testLieu.getLatitude()).isEqualTo(DEFAULT_LATITUDE);
        assertThat(testLieu.getLongitude()).isEqualTo(DEFAULT_LONGITUDE);
    }

    @Test
    public void checkLatitudeIsRequired() throws Exception {
        int databaseSizeBeforeTest = lieuRepository.findAll().size();
        // set the field null
        lieu.setLatitude(null);

        // Create the Lieu, which fails.

        restLieuMockMvc.perform(post("/api/lieus")
                .contentType(TestUtil.APPLICATION_JSON_UTF8)
                .content(TestUtil.convertObjectToJsonBytes(lieu)))
                .andExpect(status().isBadRequest());

        List<Lieu> lieus = lieuRepository.findAll();
        assertThat(lieus).hasSize(databaseSizeBeforeTest);
    }

    @Test
    public void checkLongitudeIsRequired() throws Exception {
        int databaseSizeBeforeTest = lieuRepository.findAll().size();
        // set the field null
        lieu.setLongitude(null);

        // Create the Lieu, which fails.

        restLieuMockMvc.perform(post("/api/lieus")
                .contentType(TestUtil.APPLICATION_JSON_UTF8)
                .content(TestUtil.convertObjectToJsonBytes(lieu)))
                .andExpect(status().isBadRequest());

        List<Lieu> lieus = lieuRepository.findAll();
        assertThat(lieus).hasSize(databaseSizeBeforeTest);
    }

    @Test
    public void getAllLieus() throws Exception {
        // Initialize the database
        lieuRepository.save(lieu);

        // Get all the lieus
        restLieuMockMvc.perform(get("/api/lieus?sort=id,desc"))
                .andExpect(status().isOk())
                .andExpect(content().contentType(MediaType.APPLICATION_JSON))
                .andExpect(jsonPath("$.[*].id").value(hasItem(lieu.getId())))
                .andExpect(jsonPath("$.[*].description").value(hasItem(DEFAULT_DESCRIPTION.toString())))
                .andExpect(jsonPath("$.[*].latitude").value(hasItem(DEFAULT_LATITUDE)))
                .andExpect(jsonPath("$.[*].longitude").value(hasItem(DEFAULT_LONGITUDE)));
    }

    @Test
    public void getLieu() throws Exception {
        // Initialize the database
        lieuRepository.save(lieu);

        // Get the lieu
        restLieuMockMvc.perform(get("/api/lieus/{id}", lieu.getId()))
            .andExpect(status().isOk())
            .andExpect(content().contentType(MediaType.APPLICATION_JSON))
            .andExpect(jsonPath("$.id").value(lieu.getId()))
            .andExpect(jsonPath("$.description").value(DEFAULT_DESCRIPTION.toString()))
            .andExpect(jsonPath("$.latitude").value(DEFAULT_LATITUDE))
            .andExpect(jsonPath("$.longitude").value(DEFAULT_LONGITUDE));
    }

    @Test
    public void getNonExistingLieu() throws Exception {
        // Get the lieu
        restLieuMockMvc.perform(get("/api/lieus/{id}", Long.MAX_VALUE))
                .andExpect(status().isNotFound());
    }

    @Test
    public void updateLieu() throws Exception {
        // Initialize the database
        lieuRepository.save(lieu);

		int databaseSizeBeforeUpdate = lieuRepository.findAll().size();

        // Update the lieu
        lieu.setDescription(UPDATED_DESCRIPTION);
        lieu.setLatitude(UPDATED_LATITUDE);
        lieu.setLongitude(UPDATED_LONGITUDE);

        restLieuMockMvc.perform(put("/api/lieus")
                .contentType(TestUtil.APPLICATION_JSON_UTF8)
                .content(TestUtil.convertObjectToJsonBytes(lieu)))
                .andExpect(status().isOk());

        // Validate the Lieu in the database
        List<Lieu> lieus = lieuRepository.findAll();
        assertThat(lieus).hasSize(databaseSizeBeforeUpdate);
        Lieu testLieu = lieus.get(lieus.size() - 1);
        assertThat(testLieu.getDescription()).isEqualTo(UPDATED_DESCRIPTION);
        assertThat(testLieu.getLatitude()).isEqualTo(UPDATED_LATITUDE);
        assertThat(testLieu.getLongitude()).isEqualTo(UPDATED_LONGITUDE);
    }

    @Test
    public void deleteLieu() throws Exception {
        // Initialize the database
        lieuRepository.save(lieu);

		int databaseSizeBeforeDelete = lieuRepository.findAll().size();

        // Get the lieu
        restLieuMockMvc.perform(delete("/api/lieus/{id}", lieu.getId())
                .accept(TestUtil.APPLICATION_JSON_UTF8))
                .andExpect(status().isOk());

        // Validate the database is empty
        List<Lieu> lieus = lieuRepository.findAll();
        assertThat(lieus).hasSize(databaseSizeBeforeDelete - 1);
    }
}
