package com.legion.cactus.web.rest;

import com.legion.cactus.CactusApp;

import com.legion.cactus.domain.Personnage;
import com.legion.cactus.repository.PersonnageRepository;
import com.legion.cactus.service.PersonnageService;
import com.legion.cactus.repository.search.PersonnageSearchRepository;
import com.legion.cactus.service.dto.PersonnageDTO;
import com.legion.cactus.service.mapper.PersonnageMapper;

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
import java.time.LocalDate;
import java.time.ZoneId;
import java.util.List;

import static org.assertj.core.api.Assertions.assertThat;
import static org.springframework.test.web.servlet.request.MockMvcRequestBuilders.*;
import static org.springframework.test.web.servlet.result.MockMvcResultMatchers.*;

/**
 * Test class for the PersonnageResource REST controller.
 *
 * @see PersonnageResource
 */
@RunWith(SpringRunner.class)
@SpringBootTest(classes = CactusApp.class)
public class PersonnageResourceIntTest {

    private static final String DEFAULT_NOM = "AAAAAAAAAA";
    private static final String UPDATED_NOM = "BBBBBBBBBB";

    private static final String DEFAULT_DESCRIPTION = "AAAAAAAAAA";
    private static final String UPDATED_DESCRIPTION = "BBBBBBBBBB";

    private static final Boolean DEFAULT_MORT = false;
    private static final Boolean UPDATED_MORT = true;

    private static final Integer DEFAULT_BLESSURE = 0;
    private static final Integer UPDATED_BLESSURE = 1;

    private static final Integer DEFAULT_FATIGUE = 0;
    private static final Integer UPDATED_FATIGUE = 1;

    private static final Integer DEFAULT_COMPEAU = 0;
    private static final Integer UPDATED_COMPEAU = 1;

    private static final Integer DEFAULT_COMPNOUR = 0;
    private static final Integer UPDATED_COMPNOUR = 1;

    private static final Integer DEFAULT_COMPFABRIQUER = 0;
    private static final Integer UPDATED_COMPFABRIQUER = 1;

    private static final Integer DEFAULT_COMPCONSTRUIRE = 0;
    private static final Integer UPDATED_COMPCONSTRUIRE = 1;

    private static final Integer DEFAULT_COMPCOMBAT = 0;
    private static final Integer UPDATED_COMPCOMBAT = 1;

    private static final Integer DEFAULT_COMPSOIGNER = 0;
    private static final Integer UPDATED_COMPSOIGNER = 1;

    private static final LocalDate DEFAULT_DATECREATION = LocalDate.ofEpochDay(0L);
    private static final LocalDate UPDATED_DATECREATION = LocalDate.now(ZoneId.systemDefault());

    private static final LocalDate DEFAULT_DATEFIN = LocalDate.ofEpochDay(0L);
    private static final LocalDate UPDATED_DATEFIN = LocalDate.now(ZoneId.systemDefault());

    @Inject
    private PersonnageRepository personnageRepository;

    @Inject
    private PersonnageMapper personnageMapper;

    @Inject
    private PersonnageService personnageService;

    @Inject
    private PersonnageSearchRepository personnageSearchRepository;

    @Inject
    private MappingJackson2HttpMessageConverter jacksonMessageConverter;

    @Inject
    private PageableHandlerMethodArgumentResolver pageableArgumentResolver;

    @Inject
    private EntityManager em;

    private MockMvc restPersonnageMockMvc;

    private Personnage personnage;

    @Before
    public void setup() {
        MockitoAnnotations.initMocks(this);
        PersonnageResource personnageResource = new PersonnageResource();
        ReflectionTestUtils.setField(personnageResource, "personnageService", personnageService);
        this.restPersonnageMockMvc = MockMvcBuilders.standaloneSetup(personnageResource)
            .setCustomArgumentResolvers(pageableArgumentResolver)
            .setMessageConverters(jacksonMessageConverter).build();
    }

    /**
     * Create an entity for this test.
     *
     * This is a static method, as tests for other entities might also need it,
     * if they test an entity which requires the current entity.
     */
    public static Personnage createEntity(EntityManager em) {
        Personnage personnage = new Personnage()
                .nom(DEFAULT_NOM)
                .description(DEFAULT_DESCRIPTION)
                .mort(DEFAULT_MORT)
                .blessure(DEFAULT_BLESSURE)
                .fatigue(DEFAULT_FATIGUE)
                .compeau(DEFAULT_COMPEAU)
                .compnour(DEFAULT_COMPNOUR)
                .compfabriquer(DEFAULT_COMPFABRIQUER)
                .compconstruire(DEFAULT_COMPCONSTRUIRE)
                .compcombat(DEFAULT_COMPCOMBAT)
                .compsoigner(DEFAULT_COMPSOIGNER)
                .datecreation(DEFAULT_DATECREATION)
                .datefin(DEFAULT_DATEFIN);
        return personnage;
    }

    @Before
    public void initTest() {
        personnageSearchRepository.deleteAll();
        personnage = createEntity(em);
    }

    @Test
    @Transactional
    public void createPersonnage() throws Exception {
        int databaseSizeBeforeCreate = personnageRepository.findAll().size();

        // Create the Personnage
        PersonnageDTO personnageDTO = personnageMapper.personnageToPersonnageDTO(personnage);

        restPersonnageMockMvc.perform(post("/api/personnages")
                .contentType(TestUtil.APPLICATION_JSON_UTF8)
                .content(TestUtil.convertObjectToJsonBytes(personnageDTO)))
                .andExpect(status().isCreated());

        // Validate the Personnage in the database
        List<Personnage> personnages = personnageRepository.findAll();
        assertThat(personnages).hasSize(databaseSizeBeforeCreate + 1);
        Personnage testPersonnage = personnages.get(personnages.size() - 1);
        assertThat(testPersonnage.getNom()).isEqualTo(DEFAULT_NOM);
        assertThat(testPersonnage.getDescription()).isEqualTo(DEFAULT_DESCRIPTION);
        assertThat(testPersonnage.isMort()).isEqualTo(DEFAULT_MORT);
        assertThat(testPersonnage.getBlessure()).isEqualTo(DEFAULT_BLESSURE);
        assertThat(testPersonnage.getFatigue()).isEqualTo(DEFAULT_FATIGUE);
        assertThat(testPersonnage.getCompeau()).isEqualTo(DEFAULT_COMPEAU);
        assertThat(testPersonnage.getCompnour()).isEqualTo(DEFAULT_COMPNOUR);
        assertThat(testPersonnage.getCompfabriquer()).isEqualTo(DEFAULT_COMPFABRIQUER);
        assertThat(testPersonnage.getCompconstruire()).isEqualTo(DEFAULT_COMPCONSTRUIRE);
        assertThat(testPersonnage.getCompcombat()).isEqualTo(DEFAULT_COMPCOMBAT);
        assertThat(testPersonnage.getCompsoigner()).isEqualTo(DEFAULT_COMPSOIGNER);
        assertThat(testPersonnage.getDatecreation()).isEqualTo(DEFAULT_DATECREATION);
        assertThat(testPersonnage.getDatefin()).isEqualTo(DEFAULT_DATEFIN);

        // Validate the Personnage in ElasticSearch
        Personnage personnageEs = personnageSearchRepository.findOne(testPersonnage.getId());
        assertThat(personnageEs).isEqualToComparingFieldByField(testPersonnage);
    }

    @Test
    @Transactional
    public void checkMortIsRequired() throws Exception {
        int databaseSizeBeforeTest = personnageRepository.findAll().size();
        // set the field null
        personnage.setMort(null);

        // Create the Personnage, which fails.
        PersonnageDTO personnageDTO = personnageMapper.personnageToPersonnageDTO(personnage);

        restPersonnageMockMvc.perform(post("/api/personnages")
                .contentType(TestUtil.APPLICATION_JSON_UTF8)
                .content(TestUtil.convertObjectToJsonBytes(personnageDTO)))
                .andExpect(status().isBadRequest());

        List<Personnage> personnages = personnageRepository.findAll();
        assertThat(personnages).hasSize(databaseSizeBeforeTest);
    }

    @Test
    @Transactional
    public void checkBlessureIsRequired() throws Exception {
        int databaseSizeBeforeTest = personnageRepository.findAll().size();
        // set the field null
        personnage.setBlessure(null);

        // Create the Personnage, which fails.
        PersonnageDTO personnageDTO = personnageMapper.personnageToPersonnageDTO(personnage);

        restPersonnageMockMvc.perform(post("/api/personnages")
                .contentType(TestUtil.APPLICATION_JSON_UTF8)
                .content(TestUtil.convertObjectToJsonBytes(personnageDTO)))
                .andExpect(status().isBadRequest());

        List<Personnage> personnages = personnageRepository.findAll();
        assertThat(personnages).hasSize(databaseSizeBeforeTest);
    }

    @Test
    @Transactional
    public void checkFatigueIsRequired() throws Exception {
        int databaseSizeBeforeTest = personnageRepository.findAll().size();
        // set the field null
        personnage.setFatigue(null);

        // Create the Personnage, which fails.
        PersonnageDTO personnageDTO = personnageMapper.personnageToPersonnageDTO(personnage);

        restPersonnageMockMvc.perform(post("/api/personnages")
                .contentType(TestUtil.APPLICATION_JSON_UTF8)
                .content(TestUtil.convertObjectToJsonBytes(personnageDTO)))
                .andExpect(status().isBadRequest());

        List<Personnage> personnages = personnageRepository.findAll();
        assertThat(personnages).hasSize(databaseSizeBeforeTest);
    }

    @Test
    @Transactional
    public void checkCompeauIsRequired() throws Exception {
        int databaseSizeBeforeTest = personnageRepository.findAll().size();
        // set the field null
        personnage.setCompeau(null);

        // Create the Personnage, which fails.
        PersonnageDTO personnageDTO = personnageMapper.personnageToPersonnageDTO(personnage);

        restPersonnageMockMvc.perform(post("/api/personnages")
                .contentType(TestUtil.APPLICATION_JSON_UTF8)
                .content(TestUtil.convertObjectToJsonBytes(personnageDTO)))
                .andExpect(status().isBadRequest());

        List<Personnage> personnages = personnageRepository.findAll();
        assertThat(personnages).hasSize(databaseSizeBeforeTest);
    }

    @Test
    @Transactional
    public void checkCompnourIsRequired() throws Exception {
        int databaseSizeBeforeTest = personnageRepository.findAll().size();
        // set the field null
        personnage.setCompnour(null);

        // Create the Personnage, which fails.
        PersonnageDTO personnageDTO = personnageMapper.personnageToPersonnageDTO(personnage);

        restPersonnageMockMvc.perform(post("/api/personnages")
                .contentType(TestUtil.APPLICATION_JSON_UTF8)
                .content(TestUtil.convertObjectToJsonBytes(personnageDTO)))
                .andExpect(status().isBadRequest());

        List<Personnage> personnages = personnageRepository.findAll();
        assertThat(personnages).hasSize(databaseSizeBeforeTest);
    }

    @Test
    @Transactional
    public void checkCompfabriquerIsRequired() throws Exception {
        int databaseSizeBeforeTest = personnageRepository.findAll().size();
        // set the field null
        personnage.setCompfabriquer(null);

        // Create the Personnage, which fails.
        PersonnageDTO personnageDTO = personnageMapper.personnageToPersonnageDTO(personnage);

        restPersonnageMockMvc.perform(post("/api/personnages")
                .contentType(TestUtil.APPLICATION_JSON_UTF8)
                .content(TestUtil.convertObjectToJsonBytes(personnageDTO)))
                .andExpect(status().isBadRequest());

        List<Personnage> personnages = personnageRepository.findAll();
        assertThat(personnages).hasSize(databaseSizeBeforeTest);
    }

    @Test
    @Transactional
    public void checkCompconstruireIsRequired() throws Exception {
        int databaseSizeBeforeTest = personnageRepository.findAll().size();
        // set the field null
        personnage.setCompconstruire(null);

        // Create the Personnage, which fails.
        PersonnageDTO personnageDTO = personnageMapper.personnageToPersonnageDTO(personnage);

        restPersonnageMockMvc.perform(post("/api/personnages")
                .contentType(TestUtil.APPLICATION_JSON_UTF8)
                .content(TestUtil.convertObjectToJsonBytes(personnageDTO)))
                .andExpect(status().isBadRequest());

        List<Personnage> personnages = personnageRepository.findAll();
        assertThat(personnages).hasSize(databaseSizeBeforeTest);
    }

    @Test
    @Transactional
    public void checkCompcombatIsRequired() throws Exception {
        int databaseSizeBeforeTest = personnageRepository.findAll().size();
        // set the field null
        personnage.setCompcombat(null);

        // Create the Personnage, which fails.
        PersonnageDTO personnageDTO = personnageMapper.personnageToPersonnageDTO(personnage);

        restPersonnageMockMvc.perform(post("/api/personnages")
                .contentType(TestUtil.APPLICATION_JSON_UTF8)
                .content(TestUtil.convertObjectToJsonBytes(personnageDTO)))
                .andExpect(status().isBadRequest());

        List<Personnage> personnages = personnageRepository.findAll();
        assertThat(personnages).hasSize(databaseSizeBeforeTest);
    }

    @Test
    @Transactional
    public void checkCompsoignerIsRequired() throws Exception {
        int databaseSizeBeforeTest = personnageRepository.findAll().size();
        // set the field null
        personnage.setCompsoigner(null);

        // Create the Personnage, which fails.
        PersonnageDTO personnageDTO = personnageMapper.personnageToPersonnageDTO(personnage);

        restPersonnageMockMvc.perform(post("/api/personnages")
                .contentType(TestUtil.APPLICATION_JSON_UTF8)
                .content(TestUtil.convertObjectToJsonBytes(personnageDTO)))
                .andExpect(status().isBadRequest());

        List<Personnage> personnages = personnageRepository.findAll();
        assertThat(personnages).hasSize(databaseSizeBeforeTest);
    }

    @Test
    @Transactional
    public void getAllPersonnages() throws Exception {
        // Initialize the database
        personnageRepository.saveAndFlush(personnage);

        // Get all the personnages
        restPersonnageMockMvc.perform(get("/api/personnages?sort=id,desc"))
                .andExpect(status().isOk())
                .andExpect(content().contentType(MediaType.APPLICATION_JSON_UTF8_VALUE))
                .andExpect(jsonPath("$.[*].id").value(hasItem(personnage.getId().intValue())))
                .andExpect(jsonPath("$.[*].nom").value(hasItem(DEFAULT_NOM.toString())))
                .andExpect(jsonPath("$.[*].description").value(hasItem(DEFAULT_DESCRIPTION.toString())))
                .andExpect(jsonPath("$.[*].mort").value(hasItem(DEFAULT_MORT.booleanValue())))
                .andExpect(jsonPath("$.[*].blessure").value(hasItem(DEFAULT_BLESSURE)))
                .andExpect(jsonPath("$.[*].fatigue").value(hasItem(DEFAULT_FATIGUE)))
                .andExpect(jsonPath("$.[*].compeau").value(hasItem(DEFAULT_COMPEAU)))
                .andExpect(jsonPath("$.[*].compnour").value(hasItem(DEFAULT_COMPNOUR)))
                .andExpect(jsonPath("$.[*].compfabriquer").value(hasItem(DEFAULT_COMPFABRIQUER)))
                .andExpect(jsonPath("$.[*].compconstruire").value(hasItem(DEFAULT_COMPCONSTRUIRE)))
                .andExpect(jsonPath("$.[*].compcombat").value(hasItem(DEFAULT_COMPCOMBAT)))
                .andExpect(jsonPath("$.[*].compsoigner").value(hasItem(DEFAULT_COMPSOIGNER)))
                .andExpect(jsonPath("$.[*].datecreation").value(hasItem(DEFAULT_DATECREATION.toString())))
                .andExpect(jsonPath("$.[*].datefin").value(hasItem(DEFAULT_DATEFIN.toString())));
    }

    @Test
    @Transactional
    public void getPersonnage() throws Exception {
        // Initialize the database
        personnageRepository.saveAndFlush(personnage);

        // Get the personnage
        restPersonnageMockMvc.perform(get("/api/personnages/{id}", personnage.getId()))
            .andExpect(status().isOk())
            .andExpect(content().contentType(MediaType.APPLICATION_JSON_UTF8_VALUE))
            .andExpect(jsonPath("$.id").value(personnage.getId().intValue()))
            .andExpect(jsonPath("$.nom").value(DEFAULT_NOM.toString()))
            .andExpect(jsonPath("$.description").value(DEFAULT_DESCRIPTION.toString()))
            .andExpect(jsonPath("$.mort").value(DEFAULT_MORT.booleanValue()))
            .andExpect(jsonPath("$.blessure").value(DEFAULT_BLESSURE))
            .andExpect(jsonPath("$.fatigue").value(DEFAULT_FATIGUE))
            .andExpect(jsonPath("$.compeau").value(DEFAULT_COMPEAU))
            .andExpect(jsonPath("$.compnour").value(DEFAULT_COMPNOUR))
            .andExpect(jsonPath("$.compfabriquer").value(DEFAULT_COMPFABRIQUER))
            .andExpect(jsonPath("$.compconstruire").value(DEFAULT_COMPCONSTRUIRE))
            .andExpect(jsonPath("$.compcombat").value(DEFAULT_COMPCOMBAT))
            .andExpect(jsonPath("$.compsoigner").value(DEFAULT_COMPSOIGNER))
            .andExpect(jsonPath("$.datecreation").value(DEFAULT_DATECREATION.toString()))
            .andExpect(jsonPath("$.datefin").value(DEFAULT_DATEFIN.toString()));
    }

    @Test
    @Transactional
    public void getNonExistingPersonnage() throws Exception {
        // Get the personnage
        restPersonnageMockMvc.perform(get("/api/personnages/{id}", Long.MAX_VALUE))
                .andExpect(status().isNotFound());
    }

    @Test
    @Transactional
    public void updatePersonnage() throws Exception {
        // Initialize the database
        personnageRepository.saveAndFlush(personnage);
        personnageSearchRepository.save(personnage);
        int databaseSizeBeforeUpdate = personnageRepository.findAll().size();

        // Update the personnage
        Personnage updatedPersonnage = personnageRepository.findOne(personnage.getId());
        updatedPersonnage
                .nom(UPDATED_NOM)
                .description(UPDATED_DESCRIPTION)
                .mort(UPDATED_MORT)
                .blessure(UPDATED_BLESSURE)
                .fatigue(UPDATED_FATIGUE)
                .compeau(UPDATED_COMPEAU)
                .compnour(UPDATED_COMPNOUR)
                .compfabriquer(UPDATED_COMPFABRIQUER)
                .compconstruire(UPDATED_COMPCONSTRUIRE)
                .compcombat(UPDATED_COMPCOMBAT)
                .compsoigner(UPDATED_COMPSOIGNER)
                .datecreation(UPDATED_DATECREATION)
                .datefin(UPDATED_DATEFIN);
        PersonnageDTO personnageDTO = personnageMapper.personnageToPersonnageDTO(updatedPersonnage);

        restPersonnageMockMvc.perform(put("/api/personnages")
                .contentType(TestUtil.APPLICATION_JSON_UTF8)
                .content(TestUtil.convertObjectToJsonBytes(personnageDTO)))
                .andExpect(status().isOk());

        // Validate the Personnage in the database
        List<Personnage> personnages = personnageRepository.findAll();
        assertThat(personnages).hasSize(databaseSizeBeforeUpdate);
        Personnage testPersonnage = personnages.get(personnages.size() - 1);
        assertThat(testPersonnage.getNom()).isEqualTo(UPDATED_NOM);
        assertThat(testPersonnage.getDescription()).isEqualTo(UPDATED_DESCRIPTION);
        assertThat(testPersonnage.isMort()).isEqualTo(UPDATED_MORT);
        assertThat(testPersonnage.getBlessure()).isEqualTo(UPDATED_BLESSURE);
        assertThat(testPersonnage.getFatigue()).isEqualTo(UPDATED_FATIGUE);
        assertThat(testPersonnage.getCompeau()).isEqualTo(UPDATED_COMPEAU);
        assertThat(testPersonnage.getCompnour()).isEqualTo(UPDATED_COMPNOUR);
        assertThat(testPersonnage.getCompfabriquer()).isEqualTo(UPDATED_COMPFABRIQUER);
        assertThat(testPersonnage.getCompconstruire()).isEqualTo(UPDATED_COMPCONSTRUIRE);
        assertThat(testPersonnage.getCompcombat()).isEqualTo(UPDATED_COMPCOMBAT);
        assertThat(testPersonnage.getCompsoigner()).isEqualTo(UPDATED_COMPSOIGNER);
        assertThat(testPersonnage.getDatecreation()).isEqualTo(UPDATED_DATECREATION);
        assertThat(testPersonnage.getDatefin()).isEqualTo(UPDATED_DATEFIN);

        // Validate the Personnage in ElasticSearch
        Personnage personnageEs = personnageSearchRepository.findOne(testPersonnage.getId());
        assertThat(personnageEs).isEqualToComparingFieldByField(testPersonnage);
    }

    @Test
    @Transactional
    public void deletePersonnage() throws Exception {
        // Initialize the database
        personnageRepository.saveAndFlush(personnage);
        personnageSearchRepository.save(personnage);
        int databaseSizeBeforeDelete = personnageRepository.findAll().size();

        // Get the personnage
        restPersonnageMockMvc.perform(delete("/api/personnages/{id}", personnage.getId())
                .accept(TestUtil.APPLICATION_JSON_UTF8))
                .andExpect(status().isOk());

        // Validate ElasticSearch is empty
        boolean personnageExistsInEs = personnageSearchRepository.exists(personnage.getId());
        assertThat(personnageExistsInEs).isFalse();

        // Validate the database is empty
        List<Personnage> personnages = personnageRepository.findAll();
        assertThat(personnages).hasSize(databaseSizeBeforeDelete - 1);
    }

    @Test
    @Transactional
    public void searchPersonnage() throws Exception {
        // Initialize the database
        personnageRepository.saveAndFlush(personnage);
        personnageSearchRepository.save(personnage);

        // Search the personnage
        restPersonnageMockMvc.perform(get("/api/_search/personnages?query=id:" + personnage.getId()))
            .andExpect(status().isOk())
            .andExpect(content().contentType(MediaType.APPLICATION_JSON_UTF8_VALUE))
            .andExpect(jsonPath("$.[*].id").value(hasItem(personnage.getId().intValue())))
            .andExpect(jsonPath("$.[*].nom").value(hasItem(DEFAULT_NOM.toString())))
            .andExpect(jsonPath("$.[*].description").value(hasItem(DEFAULT_DESCRIPTION.toString())))
            .andExpect(jsonPath("$.[*].mort").value(hasItem(DEFAULT_MORT.booleanValue())))
            .andExpect(jsonPath("$.[*].blessure").value(hasItem(DEFAULT_BLESSURE)))
            .andExpect(jsonPath("$.[*].fatigue").value(hasItem(DEFAULT_FATIGUE)))
            .andExpect(jsonPath("$.[*].compeau").value(hasItem(DEFAULT_COMPEAU)))
            .andExpect(jsonPath("$.[*].compnour").value(hasItem(DEFAULT_COMPNOUR)))
            .andExpect(jsonPath("$.[*].compfabriquer").value(hasItem(DEFAULT_COMPFABRIQUER)))
            .andExpect(jsonPath("$.[*].compconstruire").value(hasItem(DEFAULT_COMPCONSTRUIRE)))
            .andExpect(jsonPath("$.[*].compcombat").value(hasItem(DEFAULT_COMPCOMBAT)))
            .andExpect(jsonPath("$.[*].compsoigner").value(hasItem(DEFAULT_COMPSOIGNER)))
            .andExpect(jsonPath("$.[*].datecreation").value(hasItem(DEFAULT_DATECREATION.toString())))
            .andExpect(jsonPath("$.[*].datefin").value(hasItem(DEFAULT_DATEFIN.toString())));
    }
}
