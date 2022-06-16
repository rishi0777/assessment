package org.example.service;

import org.example.model.Emp;
import org.example.repository.EmpRepository;
import org.springframework.beans.BeanUtils;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;
import org.springframework.web.server.ResponseStatusException;

import java.util.ArrayList;
import java.util.List;
import java.util.Optional;

@Service
public class DefaultEmpServices implements EmpServices {

    @Autowired
    private EmpRepository repository;
    @Override
    public List<Emp> getAllEmp() {
        return repository.findAll();
    }

    @Override
    public List<Emp> searchByDesignation(String content) {
        List<Emp> ans=new ArrayList();
        ans.addAll(repository.findByDesignationIdStartingWith(content));
        return ans;
    }

    @Override
    public List<Emp> searchByFirstname(String content) {
        List<Emp> ans=new ArrayList();
        ans.addAll(repository.findByFirstNameStartingWith(content));
        return ans;
    }

    @Override
    public ResponseEntity<Emp> getEmp(Long id) {
        Optional<Emp> EmpById = repository.findById(id);
        if(EmpById.isPresent()){
            return  new ResponseEntity<>(EmpById.get(),HttpStatus.OK);
        }
        throw new ResponseStatusException(HttpStatus.NOT_FOUND,"No Emp Found with this id");
    }

    @Override
    public void addEmp(Emp emp) {
//        System.out.println(emp);
        repository.saveAndFlush(emp);
    }

    @Override
    public void updateEmp(Long id,Emp Emp) {
        ResponseEntity<Emp> responseEntity=getEmp(id);
        if(responseEntity.getStatusCode().is4xxClientError()){
            throw new ResponseStatusException(HttpStatus.NOT_FOUND,"Invalid Emp Id");
        }

        Emp existingEmp=responseEntity.getBody();
        BeanUtils.copyProperties(Emp,existingEmp,"id");
        repository.saveAndFlush(existingEmp);
    }

    @Override
    public void deleteEmp(Long id) {
        ResponseEntity<Emp> responseEntity=getEmp(id);
        if(responseEntity.getStatusCode().is4xxClientError()){
            throw new ResponseStatusException(HttpStatus.NOT_FOUND,"Invalid Emp Id");
        }
        repository.deleteById(id);
    }

}
