package org.example.repository;

import org.example.model.Login;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;

public interface LoginRepository extends JpaRepository<Login,Long> {

}
