package dev.marco.example.springboot.dao.impl;

import org.apache.log4j.Logger;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.stereotype.Repository;
import dev.marco.example.springboot.dao.UserAnnouncementDAO;
import dev.marco.example.springboot.exception.*;
import dev.marco.example.springboot.model.Announcement;
import dev.marco.example.springboot.model.User;
import dev.marco.example.springboot.model.UserActive;
import dev.marco.example.springboot.model.UserRoles;
import dev.marco.example.springboot.model.impl.AnnouncementImpl;
import dev.marco.example.springboot.model.impl.UserImpl;
import dev.marco.example.springboot.util.DAOUtil;

import java.math.BigInteger;
import java.sql.Connection;
import java.sql.PreparedStatement;
import java.sql.ResultSet;
import java.sql.SQLException;
import java.util.*;

import static dev.marco.example.springboot.dao.AnnouncementDAO.*;
import static dev.marco.example.springboot.exception.MessagesForException.*;


@Repository
public class UserAnnouncementDAOImpl implements UserAnnouncementDAO {

    private Connection connection;
    private final Properties properties = new Properties();
    private static final Logger log = Logger.getLogger(UserAnnouncementDAOImpl.class);

    private final String URL;
    private final String USERNAME;
    private final String PASSWORD;

    @Autowired
    public UserAnnouncementDAOImpl(
            @Value(URL_PROPERTY) String URL,
            @Value(USERNAME_PROPERTY) String USERNAME,
            @Value(PASSWORD_PROPERTY) String PASSWORD
    ) throws DAOConfigException {
        this.URL = URL;
        this.USERNAME = USERNAME;
        this.PASSWORD = PASSWORD;

        connection = DAOUtil.getDataSource(URL, USERNAME, PASSWORD, properties);
    }

    public void setTestConnection() throws DAOConfigException {
        try {
            connection = DAOUtil.getDataSource(URL, USERNAME + "_TEST", PASSWORD, properties);
        } catch (DAOConfigException e) {
            log.error(ERROR_TEST_CONNECTION + e.getMessage());
            throw new DAOConfigException(ERROR_TEST_CONNECTION, e);
        }
    }


    @Override
    public Set<Announcement> getAnnouncementsLikedByUser(BigInteger idUser)
            throws AnnouncementDoesNotExistException,
            DAOLogicException, AnnouncementException {
        try {
            PreparedStatement preparedStatement = connection.prepareStatement(
                    properties.getProperty(SELECT_ANNOUNCEMENT_LIKED_BY_USER));
            preparedStatement.setLong(1, idUser.longValue());
            ResultSet resultSet = preparedStatement.executeQuery();
            if(!resultSet.isBeforeFirst()){
                log.info(ANNOUNCEMENT_HAS_NOT_BEEN_RECEIVED + MESSAGE_FOR_GET_ANNOUNCEMENTS_LIKED_BY_USER);
                throw new AnnouncementDoesNotExistException(ANNOUNCEMENT_NOT_FOUND_EXCEPTION);
            }
            Set<Announcement> announcements = new HashSet<>();
            while (resultSet.next()) {
                Announcement announcement = new AnnouncementImpl.AnnouncementBuilder()
                        .setId(BigInteger.valueOf(resultSet.getLong(ID_ANNOUNCEMENT)))
                        .setTitle(resultSet.getString(TITLE))
                        .setDescription(resultSet.getString(DESCRIPTION))
                        .setOwner(BigInteger.valueOf(resultSet.getLong(OWNER)))
                        .setDate(resultSet.getDate(DATE_CREATE))
                        .setAddress(resultSet.getString(ADDRESS))
                        .setParticipantsCap(resultSet.getInt(LIKES))
                        .build();
                announcements.add(announcement);
            }
            return announcements;
        } catch (SQLException throwables) {
            log.error(throwables.getMessage(), throwables);
            throw new DAOLogicException(DAO_LOGIC_EXCEPTION, throwables);
        }
    }

    @Override
    public Set<User> getUsersLikedAnnouncement(BigInteger idAnnouncement)
            throws UserDoesNotExistException, DAOLogicException {

        try {
            PreparedStatement preparedStatement = connection.prepareStatement(
                    properties.getProperty(SELECT_USERS_LIKED_ANNOUNCEMENT));
            preparedStatement.setLong(1, idAnnouncement.longValue());
            ResultSet resultSet = preparedStatement.executeQuery();
            if(!resultSet.isBeforeFirst()){
                log.info(USER_HAS_NOT_BEEN_RECEIVED + MESSAGE_FOR_GET_USERS_LIKED_ANNOUNCEMENT);
                throw new UserDoesNotExistException(USER_NOT_FOUND_EXCEPTION);
            }
            Set<User> users = new HashSet<>();
            while (resultSet.next()) {
                User user = new UserImpl.UserBuilder()
                        .setId(BigInteger.valueOf(resultSet.getLong(properties.getProperty(USER_ID))))
                        .setFirstName(resultSet.getString(properties.getProperty(USER_FIRST_NAME)))
                        .setLastName(resultSet.getString(properties.getProperty(USER_LAST_NAME)))
                        .setEmail(resultSet.getString(properties.getProperty(USER_EMAIL)))
                        .setPassword(resultSet.getString(properties.getProperty(USER_PASSWORD)))
                        .setRole(
                                UserRoles.convertFromIntToRole(resultSet.getInt(properties.getProperty(USER_ROLE))))
                        .setActive(
                                resultSet.getInt(properties.getProperty(USER_ACTIVE)) == UserActive.ACTIVE.ordinal())
                        .setEmailCode(resultSet.getString(properties.getProperty(USER_EMAIL_CODE)))
                        .setDescription(resultSet.getString(properties.getProperty(USER_DESCRIPTION)))
                        .build();
                users.add(user);
            }
            return users;
        } catch (SQLException | UserException throwables) {
            log.error(DAO_LOGIC_EXCEPTION + throwables.getMessage());
            throw new DAOLogicException(DAO_LOGIC_EXCEPTION, throwables);
        }
    }

    @Override
    public boolean isParticipant(BigInteger idAnnouncement, BigInteger idUser)
            throws DAOLogicException {
        try {
            PreparedStatement preparedStatement = connection.prepareStatement(
                    properties.getProperty(GET_PARTICIPANT_BY_ID));
            preparedStatement.setLong(1, idAnnouncement.longValue());
            preparedStatement.setLong(2, idUser.longValue());
            ResultSet resultSet = preparedStatement.executeQuery();
            if(resultSet.isBeforeFirst()) {
                return true;
            }
        } catch (SQLException throwables) {
            log.error(DAO_LOGIC_EXCEPTION + throwables.getMessage());
            throw new DAOLogicException(DAO_LOGIC_EXCEPTION, throwables);
        }
        return false;
    }

    @Override
    public void addParticipant(BigInteger idAnnouncement, BigInteger idUser) throws DAOLogicException {
        try {
            PreparedStatement preparedStatement = connection.prepareStatement(
                    properties.getProperty(ADD_PARTICIPANT));
            preparedStatement.setLong(1, idAnnouncement.longValue());
            preparedStatement.setLong(2, idUser.longValue());
            preparedStatement.executeUpdate();
        } catch (SQLException throwables) {
            log.error(DAO_LOGIC_EXCEPTION + throwables.getMessage());
            throw new DAOLogicException(DAO_LOGIC_EXCEPTION, throwables);
        }
    }

    @Override
    public void deleteParticipant(BigInteger idAnnouncement, BigInteger idUser) throws DAOLogicException {

        try {
            PreparedStatement preparedStatement = connection.prepareStatement(properties.getProperty(DELETE_PARTICIPANT));
            preparedStatement.setLong(1, idAnnouncement.longValue());
            preparedStatement.setLong(2, idUser.longValue());
            preparedStatement.executeUpdate();
        } catch (SQLException throwables) {
            log.error(DAO_LOGIC_EXCEPTION + throwables.getMessage());
            throw new DAOLogicException(DAO_LOGIC_EXCEPTION, throwables);
        }
    }

    @Override
    public List<Announcement> getAllAnnouncements(BigInteger idUser)
            throws AnnouncementDoesNotExistException, DAOLogicException, AnnouncementException {
        try {
            PreparedStatement preparedStatement = connection.prepareStatement(
                    properties.getProperty(SELECT_ALL_ANNOUNCEMENT));
            preparedStatement.setLong(1, idUser.longValue());
            ResultSet resultSet = preparedStatement.executeQuery();
            if(!resultSet.isBeforeFirst()){
                log.info(ANNOUNCEMENT_HAS_NOT_BEEN_RECEIVED + MESSAGE_FOR_GET_ALL_ANNOUNCEMENTS);
                throw new AnnouncementDoesNotExistException(ANNOUNCEMENT_NOT_FOUND_EXCEPTION);
            }
            List<Announcement> announcements = new ArrayList<>();
            while (resultSet.next()) {
                Announcement announcement = new AnnouncementImpl.AnnouncementBuilder()
                        .setId(BigInteger.valueOf(resultSet.getLong(ID_ANNOUNCEMENT)))
                        .setTitle(resultSet.getString(TITLE))
                        .setDescription(resultSet.getString(DESCRIPTION))
                        .setOwner(BigInteger.valueOf(resultSet.getLong(OWNER)))
                        .setDate(resultSet.getDate(DATE_CREATE))
                        .setAddress(resultSet.getString(ADDRESS))
                        .setParticipantsCap(resultSet.getInt(LIKES))
                        .setBlank(BigInteger.valueOf(resultSet.getLong(8)))
                        .setIsLiked(resultSet.wasNull())
                        .build();
                announcements.add(announcement);
            }
            return announcements;
        } catch (SQLException throwables) {
            log.error(throwables.getMessage(), throwables);
            throw new DAOLogicException(DAO_LOGIC_EXCEPTION, throwables);
        }
    }
}
