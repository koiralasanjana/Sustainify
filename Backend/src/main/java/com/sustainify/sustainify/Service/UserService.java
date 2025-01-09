package com.sustainify.sustainify.Service;
import com.sustainify.sustainify.Model.User;

public interface UserService {
    User findByEmail(String email);
    User saveUser(User user);
}
