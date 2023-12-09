package com.pedrosousa.PlataformaAprendizagem.repository;


import com.pedrosousa.PlataformaAprendizagem.model.User;
import org.springframework.stereotype.Repository;

@Repository
public class UserRepository {
    public User findUserByEmail(String email){
        User user = new User(email,"123456");
        user.setFisrtName("FirstName");
        user.setLastname("LastName");
        return user;
    }
}