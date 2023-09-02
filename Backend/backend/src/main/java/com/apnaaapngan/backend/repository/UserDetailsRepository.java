package com.apnaaapngan.backend.repository;

import com.apnaaapngan.backend.model.UserDetails;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

public interface UserDetailsRepository extends JpaRepository<UserDetails, Integer> {

    @Query("select u from UserDetails u where u.email = :email")
    public UserDetails getUserDetailsByUserEmail(@Param("email") String email);
}
