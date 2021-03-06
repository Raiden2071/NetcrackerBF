package dev.marco.example.springboot.service.impl;

import dev.marco.example.springboot.dao.AnnouncementDAO;
import dev.marco.example.springboot.dao.UserAnnouncementDAO;
import dev.marco.example.springboot.exception.*;
import dev.marco.example.springboot.model.Announcement;
import dev.marco.example.springboot.model.UserRoles;
import dev.marco.example.springboot.service.AnnouncementService;
import dev.marco.example.springboot.service.UserService;
import org.apache.log4j.Logger;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.math.BigInteger;
import java.util.List;
import java.util.Set;

import static dev.marco.example.springboot.exception.MessagesForException.*;

@Service
public class AnnouncementServiceImpl implements AnnouncementService {

    private static final Logger log = Logger.getLogger(AnnouncementServiceImpl.class);
    private final AnnouncementDAO announcementDAO;
    private final UserAnnouncementDAO userAnnouncementDAO;
    private final UserService userService;

    @Autowired
    private AnnouncementServiceImpl(AnnouncementDAO announcementDAO, UserAnnouncementDAO userAnnouncementDAO, UserService userService){
        this.announcementDAO = announcementDAO;
        this.userAnnouncementDAO = userAnnouncementDAO;
        this.userService = userService;
    }

    @Override
    public void setTestConnection() throws DAOConfigException {
        try {
            announcementDAO.setTestConnection();
            userAnnouncementDAO.setTestConnection();
            userService.setTestConnection();
        } catch (DAOConfigException e) {
            e.printStackTrace();
        }
    }

    @Override
    public List<Announcement> getAllAnnouncements(BigInteger idUser)
            throws AnnouncementDoesNotExistException, DAOLogicException, AnnouncementException {
        return userAnnouncementDAO.getAllAnnouncements(idUser);
    }

    @Override
    public BigInteger buildNewAnnouncement(Announcement announcement)
            throws AnnouncementException, DAOLogicException {
        try {
            if(announcementDAO.isAnnouncementByTitle(announcement.getTitle())) {
                log.error(ANNOUNCEMENT_ALREADY_EXISTS + MESSAGE_FOR_BUILD_NEW_ANNOUNCEMENT);
                throw new AnnouncementException(ANNOUNCEMENT_ALREADY_EXISTS);
            }
            return announcementDAO.createAnnouncement(announcement);
        } catch (DAOLogicException e) {
            log.error(DAO_LOGIC_EXCEPTION + MESSAGE_FOR_BUILD_NEW_ANNOUNCEMENT);
            throw new DAOLogicException(DAO_LOGIC_EXCEPTION, e);
        }
    }

    @Override
    public void editAnnouncement(Announcement announcement)
            throws DAOLogicException, AnnouncementDoesNotExistException, UserDoesNotExistException, UserException {
        try {
            if(!announcementDAO.isAnnouncementById(announcement.getId()))
                throw new AnnouncementDoesNotExistException(ANNOUNCEMENT_NOT_FOUND_EXCEPTION);

            BigInteger owner = announcementDAO.getAnnouncementById(announcement.getId()).getIdUser();
            UserRoles userRole = userService.getUserById(announcement.getIdUser()).getUserRole();
            if(!owner.equals(announcement.getIdUser()) && !userRole.equals(UserRoles.ADMIN))
                throw new UserException(DONT_ENOUGH_RIGHTS);

            announcementDAO.editAnnouncement(announcement);
        } catch (DAOLogicException e) {
            log.error(DAO_LOGIC_EXCEPTION + MESSAGE_FOR_EDIT_ANNOUNCEMENT);
            throw new DAOLogicException(DAO_LOGIC_EXCEPTION, e);
        }
    }

    @Override
    public void deleteAnnouncement(BigInteger idAnnouncement, BigInteger idUser)
            throws DAOLogicException, UserException, AnnouncementDoesNotExistException, UserDoesNotExistException {
        try {
            if(!announcementDAO.isAnnouncementById(idAnnouncement))
                throw new AnnouncementDoesNotExistException(ANNOUNCEMENT_NOT_FOUND_EXCEPTION);

            BigInteger owner = announcementDAO.getAnnouncementById(idAnnouncement).getIdUser();
            UserRoles userRole = userService.getUserById(idUser).getUserRole();
            if(!owner.equals(idUser) && !userRole.equals(UserRoles.ADMIN))
                throw new UserException(DONT_ENOUGH_RIGHTS);

            announcementDAO.deleteAnnouncement(idAnnouncement);
        } catch (DAOLogicException e) {
            log.error(DAO_LOGIC_EXCEPTION + MESSAGE_FOR_DELETE_ANNOUNCEMENT);
            throw new DAOLogicException(DAO_LOGIC_EXCEPTION, e);
        }
    }

    @Override
    public void setLikeAnnouncement(BigInteger idAnnouncement, BigInteger idUser)
            throws DAOLogicException, AnnouncementDoesNotExistException, UserDoesNotExistException {
        try {
            if(!announcementDAO.isAnnouncementById(idAnnouncement))
                throw new AnnouncementDoesNotExistException(ANNOUNCEMENT_NOT_FOUND_EXCEPTION);
            userService.getUserById(idUser); // throw UserDoesNotExistException

            if(userAnnouncementDAO.isParticipant(idAnnouncement, idUser)){
                userAnnouncementDAO.deleteParticipant(idAnnouncement, idUser);
                announcementDAO.toDisLike(idAnnouncement);
            } else{
                userAnnouncementDAO.addParticipant(idAnnouncement, idUser);
                announcementDAO.toLike(idAnnouncement);
            }
        } catch (DAOLogicException e) {
            log.error(DAO_LOGIC_EXCEPTION + MESSAGE_FOR_TO_LIKE_ANNOUNCEMENT);
            throw new DAOLogicException(DAO_LOGIC_EXCEPTION, e);
        }
    }

    @Override
    public List<Announcement> getPopularAnnouncements(int numberAnnouncements, BigInteger idUser)
            throws AnnouncementDoesNotExistException, DAOLogicException {
        return announcementDAO.getPopular(numberAnnouncements, idUser);
    }

    @Override
    public Set<Announcement> getAnnouncementsLikedByUser(BigInteger idUser)
            throws AnnouncementDoesNotExistException, DAOLogicException, AnnouncementException {
        return userAnnouncementDAO.getAnnouncementsLikedByUser(idUser);
    }


}
