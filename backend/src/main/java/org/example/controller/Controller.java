package org.example.controller;

import org.example.model.Emp;
import org.example.model.Login;
import org.example.service.EmpServices;
import org.example.service.LoginServices;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@CrossOrigin("http://localhost:3000/")
@RestController
public class Controller {

    @Autowired
    private EmpServices services;

    @Autowired
    private LoginServices loginServices;

    @RequestMapping("/login")
    List<Login> getAllUser(){
        return loginServices.getAllUser();
    }

    @PostMapping("/login")
    boolean validateUser(@RequestBody Login userDetail){
        return loginServices.validateUser(userDetail);
    }

    @RequestMapping("/employees")
    List<Emp> getAllEmp(){
        return services.getAllEmp();
    }

    @RequestMapping("/employees/{id}")
    public ResponseEntity<Emp> getEmp(@PathVariable Long id){
        return services.getEmp(id);
    }

    @CrossOrigin("http://localhost:3000/")
    @PostMapping("/employees")
    void addEmp(@RequestBody Emp Emp){
        services.addEmp(Emp);
    }

    @PutMapping("/employees/{id}")
    void updateEmp(@PathVariable Long id,@RequestBody Emp Emp){
        services.updateEmp(id,Emp);
    }

    @DeleteMapping("/employees/{id}")
    void deleteEmp(@PathVariable Long id){
        services.deleteEmp(id);
    }

    @RequestMapping("/searchFirstName/{content}")
    List<Emp> searchByFirstName(@PathVariable String content){
        return services.searchByFirstname(content);
    }

    @RequestMapping("/searchDesignation/{content}")
    List<Emp> searchByDesignation(@PathVariable String content){
        return services.searchByDesignation(content);
    }

}
