package com.example.capstoneproject.repositories;

import com.example.capstoneproject.models.User;
import org.springframework.data.repository.CrudRepository;

public interface UserRepository extends CrudRepository <User, Long>{
}
