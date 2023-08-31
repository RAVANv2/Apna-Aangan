package com.apnaaapngan.backend.repository;

import com.apnaaapngan.backend.model.UserDetails;
import org.springframework.data.jpa.repository.JpaRepository;

public interface UserDetailsRepository extends JpaRepository<UserDetails, Integer> {
}
