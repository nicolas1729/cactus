package com.legion.cactus.repository.search;

import com.legion.cactus.domain.User;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.elasticsearch.annotations.Query;
import org.springframework.data.elasticsearch.repository.ElasticsearchRepository;

/**
 * Spring Data ElasticSearch repository for the User entity.
 */
public interface UserSearchRepository extends ElasticsearchRepository<User, Long> {
    //@Query("{"bool" : {"must" : {"field" : {"lastName" : "?"}}}}")
    //Page<User> findByName(String lastName,Pageable pageable);
}
