package com.apnaaapngan.backend.controller;


import com.apnaaapngan.backend.model.LoginRequest;
import com.apnaaapngan.backend.model.UserDetails;
import com.apnaaapngan.backend.service.UserDetailsImp;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.jdbc.core.JdbcTemplate;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("signup")
public class SignupController {

    @Autowired
    JdbcTemplate jdbcTemplate;

    @Autowired
    private UserDetailsImp userDetailsImp;

    @PostMapping("/createTable/{tableName}")
    private String createTable(@PathVariable("tableName") String tableName){
        String query = "CREATE TABLE " +  tableName +
                "(id SERIAL PRIMARY KEY, " +
                "first_name varchar(255) NOT NULL, " +
                "last_name varchar(255) NOT NULL, " +
                "email varchar(255) NOT NULL, " +
                "password varchar(255) NOT NULL, " +
                "contact_number char(10) NOT NULL)";
        jdbcTemplate.update(query);
        return "Table Created With Name: " + tableName;
    }

    @PostMapping("/addUser")
    private UserDetails addUser(@RequestBody UserDetails userDetails){
        userDetails.setPassword(new BCryptPasswordEncoder().encode(userDetails.getPassword()));
        userDetailsImp.saveUser(userDetails);
        return userDetails;
    }

    @PostMapping("/login")
    public String login (@RequestBody LoginRequest request){
        String email = request.getEmail();
        String password = request.getPassword();

        if(this.userDetailsImp.authenticateUser(email, password)){
            return "Working Fine";
        }

        return "Not working";
    }
}
