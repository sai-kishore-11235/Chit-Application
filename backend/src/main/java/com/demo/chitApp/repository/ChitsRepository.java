package com.demo.chitApp.repository;

import com.demo.chitApp.domain.Chits;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface ChitsRepository extends JpaRepository<Chits, String> {

}
