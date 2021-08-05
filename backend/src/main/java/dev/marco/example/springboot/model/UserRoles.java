package dev.marco.example.springboot.model;

import org.springframework.security.core.authority.SimpleGrantedAuthority;

import java.util.ArrayList;
import java.util.List;

public enum UserRoles {
    ADMIN,
    USER,
    UNVERIFIED;

    public static UserRoles convertFromIntToRole(int number) {
        switch (number) {
            case 0:
                return ADMIN;
            case 1:
                return USER;
            default:
                return UNVERIFIED;
        }
    }

    public static List<SimpleGrantedAuthority> convertFromRoleToStr(UserRoles userRole) {
        switch (userRole) {
            case ADMIN:
                ArrayList<SimpleGrantedAuthority> roles = new ArrayList<>();
                roles.add(new SimpleGrantedAuthority("ROLE_ADMIN"));
                roles.add(new SimpleGrantedAuthority("ROLE_USER"));
                return roles;
            case USER:
                ArrayList<SimpleGrantedAuthority> roles1 = new ArrayList<>();
                roles1.add(new SimpleGrantedAuthority("ROLE_USER"));
                return roles1;
            case UNVERIFIED:
                ArrayList<SimpleGrantedAuthority> roles2 = new ArrayList<>();
                roles2.add(new SimpleGrantedAuthority("ROLE_UNVERIFIED"));
                return roles2;
            default:
                return null;
        }
    }
}
