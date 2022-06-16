package org.example.service;

import org.example.model.Emp;
import org.example.model.Login;
import org.example.repository.LoginRepository;
import org.springframework.beans.BeanUtils;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;
import org.springframework.web.server.ResponseStatusException;

import java.awt.desktop.SystemEventListener;
import java.util.ArrayList;
import java.util.List;
import java.util.Optional;

@Service
public class DefaultLoginServices implements LoginServices {

    @Autowired
    private LoginRepository repository;

    @Override
    public List<Login> getAllUser() {
        return repository.findAll();
    }

    @Override
    public boolean validateUser(Login userDetail) {
        List<Login> allUser=getAllUser();

        System.out.println(userDetail);
        System.out.println(userDetail.getUserID()+" "+userDetail.getPassword());

        for(Login user:allUser){
            if(user.getUserID().equals(userDetail.getUserID()) && user.getPassword().equals(userDetail.getPassword())){
                return true;
            }
        }
        return false;
    }
}
