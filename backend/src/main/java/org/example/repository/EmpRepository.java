package org.example.repository;

import org.example.model.Emp;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;

public interface EmpRepository extends JpaRepository<Emp,Long> {
    List<Emp> findByFirstNameStartingWith(String likePattern);
    List<Emp> findByDesignationIdStartingWith(String likePattern);
}
