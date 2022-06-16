package org.example.service;

import org.example.model.Emp;
import org.springframework.http.ResponseEntity;

import java.util.List;

public interface EmpServices {
    List<Emp> getAllEmp();
    List<Emp> searchByDesignation(String content);
    List<Emp> searchByFirstname(String content);
    ResponseEntity<Emp> getEmp(Long id);
    void addEmp(Emp Emp);
    void updateEmp(Long id,Emp Emp);
    void deleteEmp(Long id);

}
