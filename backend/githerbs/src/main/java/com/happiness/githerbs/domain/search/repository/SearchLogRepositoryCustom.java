package com.happiness.githerbs.domain.search.repository;

import java.util.List;

public interface SearchLogRepositoryCustom {
	List<String> findRecent(Integer memberId);
}
