package com.cactus.web.rest;

import com.cactus.Application;
import com.cactus.domain.Personnage;
import com.cactus.repository.PersonnageRepository;
import com.cactus.web.rest.dto.PersonnageDTO;
import com.cactus.web.rest.mapper.PersonnageMapper;

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
import java.time.LocalDate;
import java.time.ZoneId;
import java.util.List;

import static org.assertj.core.api.Assertions.assertThat;
import static org.assertj.core.api.StrictAssertions.assertThat;
import static org.springframework.test.web.servlet.request.MockMvcRequestBuilders.*;
import static org.springframework.test.web.servlet.result.MockMvcResultMatchers.*;


/**
 * Test class for the PersonnageResource REST controller.
 *
 * @see PersonnageResource
 */
@RunWith(SpringJUnit4ClassRunner.class)
@SpringApplicationConfiguration(classes = Application.class)
@WebAppConfiguration
@IntegrationTest
public class PersonnageResourceIntTest {

    private static final String DEFAULT_NOM = "nom";

    private static final String DEFAULT_DESCRIPTION = "description";
    
    private static final Integer DEFAULT_FATIGUE = 0;
    private static final Integer UPDATED_FATIGUE = 1;
    
    private static final Integer DEFAULT_BLESSURE = 0;
    private static final Integer UPDATED_BLESSURE = 1;

    private static final Integer DEFAULT_COMPCOMBAT = 1;
    private static final Integer UPDATED_COMPCOMBAT = 2;

    private static final Integer DEFAULT_COMPCONSTRUIRE = 1;
    private static final Integer UPDATED_COMPCONSTRUIRE = 2;

    private static final Integer DEFAULT_COMPEAU = 1;
    private static final Integer UPDATED_COMPEAU = 2;

    private static final Integer DEFAULT_COMFABRIQUER = 1;
    private static final Integer UPDATED_COMFABRIQUER = 2;

    private static final Integer DEFAULT_COMPNOUR = 1;
    private static final Integer UPDATED_COMPNOUR = 2;

    private static final Integer DEFAULT_COMPSOIGNER = 1;
    private static final Integer UPDATED_COMPSOIGNER = 2;

    private static final LocalDate DEFAULT_DATECREATION = LocalDate.ofEpochDay(0L);
    private static final LocalDate UPDATED_DATECREATION = LocalDate.now(ZoneId.systemDefault());

    private static final LocalDate DEFAULT_DATEFIN = LocalDate.ofEpochDay(0L);
    private static final LocalDate UPDATED_DATEFIN = LocalDate.now(ZoneId.systemDefault());

    @Inject
    private PersonnageRepository personnageRepository;

    //@Inject
    //private PersonnageMapper personnageMapper;

    @Inject
    private MappingJackson2HttpMessageConverter jacksonMessageConverter;

    @Inject
    private PageableHandlerMethodArgumentResolver pageableArgumentResolver;

    private MockMvc restPersonnageMockMvc;

    private Personnage personnage;

    @PostConstruct
    public void setup() {
        MockitoAnnotations.initMocks(this);
        PersonnageResource personnageResource = new PersonnageResource();
        ReflectionTestUtils.setField(personnageResource, "personnageRepository", personnageRepository);
        //ReflectionTestUtils.setField(personnageResource, "personnageMapper", personnageMapper);
        this.restPersonnageMockMvc = MockMvcBuilders.standaloneSetup(personnageResource)
            .setCustomArgumentResolvers(pageableArgumentResolver)
            .setMessageConverters(jacksonMessageConverter).build();
    }

    @Before
    public void initTest() {
        personnageRepository.deleteAll();
        personnage = new Personnage();
        personnage.setNom(DEFAULT_NOM);
        personnage.setDescription(DEFAULT_DESCRIPTION);
        personnage.setFatigue(DEFAULT_FATIGUE);
        personnage.setBlessure(DEFAULT_BLESSURE);
        personnage.setCompcombat(DEFAULT_COMPCOMBAT);
        personnage.setCompconstruire(DEFAULT_COMPCONSTRUIRE);
        personnage.setCompeau(DEFAULT_COMPEAU);
        personnage.setComfabriquer(DEFAULT_COMFABRIQUER);
        personnage.setCompnour(DEFAULT_COMPNOUR);
        personnage.setCompsoigner(DEFAULT_COMPSOIGNER);
        personnage.setDatecreation(DEFAULT_DATECREATION);
        personnage.setDatefin(DEFAULT_DATEFIN);
    }

    @Test
    public void createPersonnage() throws Exception {
        int databaseSizeBeforeCreate = personnageRepository.findAll().size();

        // Create the Personnage
        //PersonnageDTO personnageDTO = personnageMapper.personnageToPersonnageDTO(personnage);

        restPersonnageMockMvc.perform(post("/api/personnages")
                .contentType(TestUtil.APPLICATION_JSON_UTF8)
                .content(TestUtil.convertObjectToJsonBytes(personnage)))
                .andExpect(status().isCreated());

        // Validate the Personnage in the database
        List<Personnage> personnages = personnageRepository.findAll();
        assertThat(personnages).hasSize(databaseSizeBeforeCreate + 1);
        Personnage testPersonnage = personnages.get(personnages.size() - 1);
        assertThat(testPersonnage.getNom()).isEqualTo(DEFAULT_NOM);
        assertThat(testPersonnage.getDescription()).isEqualTo(DEFAULT_DESCRIPTION);
        assertThat(testPersonnage.getFatigue()).isEqualTo(DEFAULT_FATIGUE);
        assertThat(testPersonnage.getBlessure()).isEqualTo(DEFAULT_BLESSURE);
        assertThat(testPersonnage.getCompcombat()).isEqualTo(DEFAULT_COMPCOMBAT);
        assertThat(testPersonnage.getCompconstruire()).isEqualTo(DEFAULT_COMPCONSTRUIRE);
        assertThat(testPersonnage.getCompeau()).isEqualTo(DEFAULT_COMPEAU);
        assertThat(testPersonnage.getComfabriquer()).isEqualTo(DEFAULT_COMFABRIQUER);
        assertThat(testPersonnage.getCompnour()).isEqualTo(DEFAULT_COMPNOUR);
        assertThat(testPersonnage.getCompsoigner()).isEqualTo(DEFAULT_COMPSOIGNER);
        assertThat(testPersonnage.getDatecreation()).isEqualTo(DEFAULT_DATECREATION);
        assertThat(testPersonnage.getDatefin()).isEqualTo(DEFAULT_DATEFIN);
    }

    @Test
    public void checkCompcombatIsRequired() throws Exception {
        int databaseSizeBeforeTest = personnageRepository.findAll().size();
        // set the field null
        personnage.setCompcombat(null);

        // Create the Personnage, which fails.
        //PersonnageDTO personnageDTO = personnageMapper.personnageToPersonnageDTO(personnage);

        restPersonnageMockMvc.perform(post("/api/personnages")
                .contentType(TestUtil.APPLICATION_JSON_UTF8)
                .content(TestUtil.convertObjectToJsonBytes(personnage)))
                .andExpect(status().isBadRequest());

        List<Personnage> personnages = personnageRepository.findAll();
        assertThat(personnages).hasSize(databaseSizeBeforeTest);
    }

    @Test
    public void checkCompconstruireIsRequired() throws Exception {
        int databaseSizeBeforeTest = personnageRepository.findAll().size();
        // set the field null
        personnage.setCompconstruire(null);

        // Create the Personnage, which fails.
        //PersonnageDTO personnageDTO = personnageMapper.personnageToPersonnageDTO(personnage);

        restPersonnageMockMvc.perform(post("/api/personnages")
                .contentType(TestUtil.APPLICATION_JSON_UTF8)
                .content(TestUtil.convertObjectToJsonBytes(personnage)))
                .andExpect(status().isBadRequest());

        List<Personnage> personnages = personnageRepository.findAll();
        assertThat(personnages).hasSize(databaseSizeBeforeTest);
    }

    @Test
    public void checkComfabriquerIsRequired() throws Exception {
        int databaseSizeBeforeTest = personnageRepository.findAll().size();
        // set the field null
        personnage.setComfabriquer(null);

        // Create the Personnage, which fails.
        //PersonnageDTO personnageDTO = personnageMapper.personnageToPersonnageDTO(personnage);

        restPersonnageMockMvc.perform(post("/api/personnages")
                .contentType(TestUtil.APPLICATION_JSON_UTF8)
                .content(TestUtil.convertObjectToJsonBytes(personnage)))
                .andExpect(status().isBadRequest());

        List<Personnage> personnages = personnageRepository.findAll();
        assertThat(personnages).hasSize(databaseSizeBeforeTest);
    }

    @Test
    public void checkCompnourIsRequired() throws Exception {
        int databaseSizeBeforeTest = personnageRepository.findAll().size();
        // set the field null
        personnage.setCompnour(null);

        // Create the Personnage, which fails.
        //PersonnageDTO personnageDTO = personnageMapper.personnageToPersonnageDTO(personnage);

        restPersonnageMockMvc.perform(post("/api/personnages")
                .contentType(TestUtil.APPLICATION_JSON_UTF8)
                .content(TestUtil.convertObjectToJsonBytes(personnage)))
                .andExpect(status().isBadRequest());

        List<Personnage> personnages = personnageRepository.findAll();
        assertThat(personnages).hasSize(databaseSizeBeforeTest);
    }

    @Test
    public void checkCompsoignerIsRequired() throws Exception {
        int databaseSizeBeforeTest = personnageRepository.findAll().size();
        // set the field null
        personnage.setCompsoigner(null);

        // Create the Personnage, which fails.
        //PersonnageDTO personnageDTO = personnageMapper.personnageToPersonnageDTO(personnage);

        restPersonnageMockMvc.perform(post("/api/personnages")
                .contentType(TestUtil.APPLICATION_JSON_UTF8)
                .content(TestUtil.convertObjectToJsonBytes(personnage)))
                .andExpect(status().isBadRequest());

        List<Personnage> personnages = personnageRepository.findAll();
        assertThat(personnages).hasSize(databaseSizeBeforeTest);
    }

    @Test
    public void checkDatecreationIsRequired() throws Exception {
        int databaseSizeBeforeTest = personnageRepository.findAll().size();
        // set the field null
        personnage.setDatecreation(null);

        // Create the Personnage, which fails.
        //PersonnageDTO personnageDTO = personnageMapper.personnageToPersonnageDTO(personnage);

        restPersonnageMockMvc.perform(post("/api/personnages")
                .contentType(TestUtil.APPLICATION_JSON_UTF8)
                .content(TestUtil.convertObjectToJsonBytes(personnage)))
                .andExpect(status().isBadRequest());

        List<Personnage> personnages = personnageRepository.findAll();
        assertThat(personnages).hasSize(databaseSizeBeforeTest);
    }

    @Test
    public void getAllPersonnages() throws Exception {
        // Initialize the database
        personnageRepository.save(personnage);

        // Get all the personnages
        restPersonnageMockMvc.perform(get("/api/personnages?sort=id,desc"))
                .andExpect(status().isOk())
                .andExpect(content().contentType(MediaType.APPLICATION_JSON))
                .andExpect(jsonPath("$.[*].id").value(hasItem(personnage.getId())))
                .andExpect(jsonPath("$.[*].fatigue").value(hasItem(DEFAULT_FATIGUE)))
                .andExpect(jsonPath("$.[*].blessure").value(hasItem(DEFAULT_BLESSURE)))
                .andExpect(jsonPath("$.[*].compcombat").value(hasItem(DEFAULT_COMPCOMBAT)))
                .andExpect(jsonPath("$.[*].compconstruire").value(hasItem(DEFAULT_COMPCONSTRUIRE)))
                .andExpect(jsonPath("$.[*].compeau").value(hasItem(DEFAULT_COMPEAU)))
                .andExpect(jsonPath("$.[*].comfabriquer").value(hasItem(DEFAULT_COMFABRIQUER)))
                .andExpect(jsonPath("$.[*].compnour").value(hasItem(DEFAULT_COMPNOUR)))
                .andExpect(jsonPath("$.[*].compsoigner").value(hasItem(DEFAULT_COMPSOIGNER)))
                .andExpect(jsonPath("$.[*].datecreation").value(hasItem(DEFAULT_DATECREATION.toString())))
                .andExpect(jsonPath("$.[*].datefin").value(hasItem(DEFAULT_DATEFIN.toString())));
    }

    @Test
    public void getPersonnage() throws Exception {
        // Initialize the database
        personnageRepository.save(personnage);

        // Get the personnage
        restPersonnageMockMvc.perform(get("/api/personnages/{id}", personnage.getId()))
            .andExpect(status().isOk())
            .andExpect(content().contentType(MediaType.APPLICATION_JSON))
            .andExpect(jsonPath("$.id").value(personnage.getId()))
            .andExpect(jsonPath("$.fatigue").value(DEFAULT_FATIGUE))
            .andExpect(jsonPath("$.blessure").value(DEFAULT_BLESSURE))
            .andExpect(jsonPath("$.compcombat").value(DEFAULT_COMPCOMBAT))
            .andExpect(jsonPath("$.compconstruire").value(DEFAULT_COMPCONSTRUIRE))
            .andExpect(jsonPath("$.compeau").value(DEFAULT_COMPEAU))
            .andExpect(jsonPath("$.comfabriquer").value(DEFAULT_COMFABRIQUER))
            .andExpect(jsonPath("$.compnour").value(DEFAULT_COMPNOUR))
            .andExpect(jsonPath("$.compsoigner").value(DEFAULT_COMPSOIGNER))
            .andExpect(jsonPath("$.datecreation").value(DEFAULT_DATECREATION.toString()))
            .andExpect(jsonPath("$.datefin").value(DEFAULT_DATEFIN.toString()));
    }

    @Test
    public void getNonExistingPersonnage() throws Exception {
        // Get the personnage
        restPersonnageMockMvc.perform(get("/api/personnages/{id}", Long.MAX_VALUE))
                .andExpect(status().isNotFound());
    }

    @Test
    public void updatePersonnage() throws Exception {
        // Initialize the database
        personnageRepository.save(personnage);

        int databaseSizeBeforeUpdate = personnageRepository.findAll().size();

        // Update the personnage
        personnage.setFatigue(UPDATED_FATIGUE);
        personnage.setBlessure(UPDATED_BLESSURE);
        personnage.setCompcombat(UPDATED_COMPCOMBAT);
        personnage.setCompconstruire(UPDATED_COMPCONSTRUIRE);
        personnage.setCompeau(UPDATED_COMPEAU);
        personnage.setComfabriquer(UPDATED_COMFABRIQUER);
        personnage.setCompnour(UPDATED_COMPNOUR);
        personnage.setCompsoigner(UPDATED_COMPSOIGNER);
        personnage.setDatecreation(UPDATED_DATECREATION);
        personnage.setDatefin(UPDATED_DATEFIN);
        //PersonnageDTO personnageDTO = personnageMapper.personnageToPersonnageDTO(personnage);

        restPersonnageMockMvc.perform(put("/api/personnages")
                .contentType(TestUtil.APPLICATION_JSON_UTF8)
                .content(TestUtil.convertObjectToJsonBytes(personnage)))
                .andExpect(status().isOk());

        // Validate the Personnage in the database
        List<Personnage> personnages = personnageRepository.findAll();
        assertThat(personnages).hasSize(databaseSizeBeforeUpdate);
        Personnage testPersonnage = personnages.get(personnages.size() - 1);
        assertThat(testPersonnage.getFatigue()).isEqualTo(UPDATED_FATIGUE);
        assertThat(testPersonnage.getBlessure()).isEqualTo(UPDATED_BLESSURE);
        assertThat(testPersonnage.getCompcombat()).isEqualTo(UPDATED_COMPCOMBAT);
        assertThat(testPersonnage.getCompconstruire()).isEqualTo(UPDATED_COMPCONSTRUIRE);
        assertThat(testPersonnage.getCompeau()).isEqualTo(UPDATED_COMPEAU);
        assertThat(testPersonnage.getComfabriquer()).isEqualTo(UPDATED_COMFABRIQUER);
        assertThat(testPersonnage.getCompnour()).isEqualTo(UPDATED_COMPNOUR);
        assertThat(testPersonnage.getCompsoigner()).isEqualTo(UPDATED_COMPSOIGNER);
        assertThat(testPersonnage.getDatecreation()).isEqualTo(UPDATED_DATECREATION);
        assertThat(testPersonnage.getDatefin()).isEqualTo(UPDATED_DATEFIN);
    }

    @Test
    public void deletePersonnage() throws Exception {
        // Initialize the database
        personnageRepository.save(personnage);

		int databaseSizeBeforeDelete = personnageRepository.findAll().size();

        // Get the personnage
        restPersonnageMockMvc.perform(delete("/api/personnages/{id}", personnage.getId())
                .accept(TestUtil.APPLICATION_JSON_UTF8))
                .andExpect(status().isOk());

        // Validate the database is empty
        List<Personnage> personnages = personnageRepository.findAll();
        assertThat(personnages).hasSize(databaseSizeBeforeDelete - 1);
    }
}
