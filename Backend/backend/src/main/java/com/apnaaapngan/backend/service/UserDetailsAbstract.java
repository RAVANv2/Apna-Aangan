package com.apnaaapngan.backend.service;

import com.apnaaapngan.backend.model.UserDetails;
import org.springframework.data.jpa.repository.Query;

public interface UserDetailsAbstract {

    @Query
    public UserDetails saveUser(UserDetails userDetails);

    public boolean authenticateUser(String email, String password);
}
