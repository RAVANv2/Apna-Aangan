package com.apnaaapngan.backend.service;

import com.apnaaapngan.backend.model.UserDetails;
import com.apnaaapngan.backend.repository.UserDetailsRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.stereotype.Service;

@Service
public class UserDetailsImp implements UserDetailsAbstract{

    @Autowired
    private UserDetailsRepository userDetailsRepository;

    @Override
    public UserDetails saveUser(UserDetails userDetails) {
        return userDetailsRepository.save(userDetails);
    }

    @Override
    public boolean authenticateUser(String email, String password) {
        UserDetails userDetails = userDetailsRepository.getUserDetailsByUserEmail(email);

        if(userDetails != null &&  new BCryptPasswordEncoder().matches(password, userDetails.getPassword())){
            return true;
        }
        return false;
    }

    @Override
    public String toString() {
        return super.toString();
    }
}
