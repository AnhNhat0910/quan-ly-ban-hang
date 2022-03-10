package poly.store.service;

import java.util.List;

import poly.store.entity.Authority;

public interface AuthorityService {

	List<Authority> findAuthoritiesOfAdministrators();

	List<Authority> findAll();

	void delete(Integer id);

	Authority create(Authority auth);

}
