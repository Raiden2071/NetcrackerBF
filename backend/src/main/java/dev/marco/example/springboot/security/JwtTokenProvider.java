package dev.marco.example.springboot.security;

import dev.marco.example.springboot.exception.JwtAuthenticationException;
import dev.marco.example.springboot.rest.UserController;
import io.jsonwebtoken.*;
import org.apache.log4j.Logger;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.stereotype.Component;

import javax.servlet.http.HttpServletRequest;
import java.time.LocalDate;
import java.time.ZoneId;
import java.util.Date;

@Component
public class JwtTokenProvider {

    private static final Logger log = Logger.getLogger(JwtTokenProvider.class);

    @Value("${jwt.token.secret}")
    private String secret;

    @Value("${jwt.token.expired}")
    private long expiresInMillis;

    @Autowired
    private JwtUserDetailService userDetailsService;

    public String createToken(String email) {
        Claims claims = Jwts.claims().setSubject(email);
        Date date = Date.from(LocalDate.now().plusDays(15).atStartOfDay(ZoneId.systemDefault()).toInstant());

        return Jwts.builder()
                .setSubject(email)
                .setExpiration(date)
                .signWith(SignatureAlgorithm.HS512, secret)
                .compact();
    }

    public String resolveToken(HttpServletRequest req) {
        String bearerToken = req.getHeader("Authorization");
        if (bearerToken != null && bearerToken.startsWith("Bearer ")) {
            return bearerToken.substring(7, bearerToken.length());
        }
        return null;
    }

    public boolean validateToken(String token) throws JwtAuthenticationException {
        Jws<Claims> claims = Jwts.parser().setSigningKey(secret).parseClaimsJws(token);

        if (claims.getBody().getExpiration().before(new Date())) {
            return false;
        }
        return true;
    }

    public String getEmailFromToken(String token) {
        Claims claims = Jwts.parser().setSigningKey(secret).parseClaimsJws(token).getBody();
        return claims.getSubject();
    }

    public Authentication getAuthentication(String token) {
        log.debug("Email from token: " + getEmailFromToken(token));
        UserDetails userDetails = this.userDetailsService.loadUserByUsername(getEmailFromToken(token));
        log.debug("JwtTokenProvider Authentication got username: " + userDetails.getUsername());
        return new UsernamePasswordAuthenticationToken(userDetails, "", userDetails.getAuthorities());
    }

}
