package org.example.service;

import com.mysql.cj.log.Log;
import org.example.model.Emp;
import org.example.model.Login;
import org.springframework.http.ResponseEntity;

import java.util.List;

public interface LoginServices {
    List<Login> getAllUser();
    boolean validateUser (Login userDetail);
}
