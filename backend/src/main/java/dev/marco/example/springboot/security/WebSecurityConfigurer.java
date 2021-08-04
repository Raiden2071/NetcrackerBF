package dev.marco.example.springboot.security;

import org.apache.commons.lang3.StringUtils;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.config.annotation.authentication.builders.AuthenticationManagerBuilder;
import org.springframework.security.config.annotation.web.builders.HttpSecurity;
import org.springframework.security.config.annotation.web.configuration.WebSecurityConfigurerAdapter;
import org.springframework.security.config.http.SessionCreationPolicy;
import org.springframework.security.core.userdetails.User;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.security.crypto.factory.PasswordEncoderFactories;
import org.springframework.security.crypto.password.PasswordEncoder;

import javax.sql.DataSource;

@Configuration
public class WebSecurityConfigurer extends WebSecurityConfigurerAdapter {

    private final JwtTokenProvider jwtTokenProvider;
    private final DataSource dataSource;

    @Autowired
    public WebSecurityConfigurer(JwtTokenProvider jwtTokenProvider, DataSource dataSource) {
        this.jwtTokenProvider = jwtTokenProvider;
        this.dataSource = dataSource;
    }

    @Bean
    @Override
    public AuthenticationManager authenticationManagerBean() throws Exception {
        return super.authenticationManagerBean();
    }

    @Bean
    public PasswordEncoder passwordEncoder() {
        return new BCryptPasswordEncoder();
    }

    @Override
    protected void configure(AuthenticationManagerBuilder auth) throws Exception {
        auth.jdbcAuthentication()
                .dataSource(dataSource)
                .usersByUsernameQuery("SELECT email, passwd, isActive from USR where email = ?")
                .authoritiesByUsernameQuery("SELECT U.email, R.usr_role FROM USR U, USR_ROLES R where U.email = ? AND U.USR_ROLE = R.ID_USR_ROLE");
        /*
        auth.inMemoryAuthentication()
                .passwordEncoder(encoder)
                .withUser("kk@gmail.com")
                .password(encoder.encode("testPassword5-"))
                .roles("USER");

         */
    }

    @Override
    protected void configure(HttpSecurity http) throws Exception {
        http.httpBasic().disable()
                .csrf().disable()
                .sessionManagement().sessionCreationPolicy(SessionCreationPolicy.STATELESS)
                    .and()
                .authorizeRequests()
                    .antMatchers("/test").hasRole("USER")
                    //.antMatchers("/admin/**").hasRole("ADMIN")
                    .antMatchers("/auth/**").permitAll()
                    .and()
                .authorizeRequests()
                    .anyRequest().authenticated()
                    .and()
                .apply(new JwtConfigurer(jwtTokenProvider));
    }

    /*
    @Override
    protected void configure(HttpSecurity http) throws Exception {
        http
                .csrf().disable() // disabled due insomnia testing
                .authorizeRequests()
                .antMatchers("/private/**")
                .authenticated()
                .antMatchers("/public/**")
                .permitAll()
                .and()
                .httpBasic();
    }
     */
}
