package dev.marco.example.springboot.service.impl;

import org.apache.log4j.Logger;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import dev.marco.example.springboot.dao.impl.AnnouncementDAOImpl;
import dev.marco.example.springboot.dao.impl.UserAnnouncementDAOImpl;
import dev.marco.example.springboot.dao.impl.UserDAOImpl;
import dev.marco.example.springboot.exception.*;
import dev.marco.example.springboot.model.Announcement;
import dev.marco.example.springboot.model.UserRoles;
import dev.marco.example.springboot.service.AnnouncementService;

import java.math.BigInteger;
import java.util.List;
import java.util.Set;

import static dev.marco.example.springboot.exception.MessagesForException.*;


@Service
public class AnnouncementServiceImpl implements AnnouncementService {

    private static final Logger log = Logger.getLogger(AnnouncementServiceImpl.class);

    @Autowired
    AnnouncementDAOImpl announcementDAO;
    @Autowired
    UserAnnouncementDAOImpl userAnnouncementDAO;
    @Autowired
    UserDAOImpl userDAO;

    @Override
    public void setTestConnection() throws DAOConfigException {
        try {
            announcementDAO.setTestConnection();
            userAnnouncementDAO.setTestConnection();
            userDAO.setTestConnection();
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
            throws UserException, AnnouncementException, DAOLogicException {

        try {
            if(!userDAO.getUserById(announcement.getOwner()).getUserRole().equals(UserRoles.ADMIN))
                throw new UserException(DONT_ENOUGH_RIGHTS);

            if(announcementDAO.isAnnouncementByTitle(announcement.getTitle())) {
                log.error(ANNOUNCEMENT_ALREADY_EXISTS + MESSAGE_FOR_BUILD_NEW_ANNOUNCEMENT);
                throw new AnnouncementException(ANNOUNCEMENT_ALREADY_EXISTS);
            }
            return announcementDAO.createAnnouncement(announcement);
        } catch (DAOLogicException | UserDoesNotExistException e) {
            log.error(DAO_LOGIC_EXCEPTION + MESSAGE_FOR_BUILD_NEW_ANNOUNCEMENT);
            throw new DAOLogicException(DAO_LOGIC_EXCEPTION, e);
        }
    }

    @Override
    public void editAnnouncement(Announcement announcement, BigInteger idUser)
            throws AnnouncementException, DAOLogicException {
        try {
            if(!userDAO.getUserById(idUser).getUserRole().equals(UserRoles.ADMIN))
                throw new AnnouncementException(DONT_ENOUGH_RIGHTS);
            announcementDAO.editAnnouncement(announcement);
        } catch (DAOLogicException | UserDoesNotExistException e) {
            log.error(DAO_LOGIC_EXCEPTION + MESSAGE_FOR_EDIT_ANNOUNCEMENT);
            throw new DAOLogicException(DAO_LOGIC_EXCEPTION, e);
        }
    }

    @Override
    public void deleteAnnouncement(BigInteger idAnnouncement, BigInteger idUser)
            throws DAOLogicException, AnnouncementException {
        try {
            if(!userDAO.getUserById(idUser).getUserRole().equals(UserRoles.ADMIN))
                throw new AnnouncementException(DONT_ENOUGH_RIGHTS);
            announcementDAO.deleteAnnouncement(idAnnouncement);
        } catch (UserDoesNotExistException e) {
            log.error(DAO_LOGIC_EXCEPTION + MESSAGE_FOR_DELETE_ANNOUNCEMENT);
            throw new DAOLogicException(DAO_LOGIC_EXCEPTION, e);
        }
    }

    @Override
    public void toLikeAnnouncement(BigInteger idAnnouncement, BigInteger idUser)
            throws AnnouncementException, DAOLogicException {
        try {
            if(userAnnouncementDAO.isParticipant(idAnnouncement, idUser))
                throw new AnnouncementException(ANNOUNCEMENT_ALREADY_LIKED);
            userAnnouncementDAO.addParticipant(idAnnouncement, idUser);
            announcementDAO.toLike(idAnnouncement);
        } catch (DAOLogicException e) {
            log.error(DAO_LOGIC_EXCEPTION + MESSAGE_FOR_TO_LIKE_ANNOUNCEMENT);
            throw new DAOLogicException(DAO_LOGIC_EXCEPTION, e);
        }
    }

    @Override
    public void toDisLikeAnnouncement(BigInteger idAnnouncement, BigInteger idUser)
            throws AnnouncementException, DAOLogicException {
        try {
            if(!userAnnouncementDAO.isParticipant(idAnnouncement, idUser))
                throw new AnnouncementException(ANNOUNCEMENT_HAS_NOT_LIKED);
            userAnnouncementDAO.deleteParticipant(idAnnouncement, idUser);
            announcementDAO.toDisLike(idAnnouncement);
        } catch (DAOLogicException e) {
            log.error(DAO_LOGIC_EXCEPTION + MESSAGE_FOR_TO_DISLIKE_ANNOUNCEMENT);
            throw new DAOLogicException(DAO_LOGIC_EXCEPTION, e);
        }
    }

    @Override
    public List<Announcement> getPopularAnnouncements(int numberAnnouncements)
            throws AnnouncementDoesNotExistException, DAOLogicException {
        return announcementDAO.getPopular(numberAnnouncements);
    }

    @Override
    public Set<Announcement> getAnnouncementsLikedByUser(BigInteger idUser)
            throws AnnouncementDoesNotExistException, DAOLogicException, AnnouncementException {
        return userAnnouncementDAO.getAnnouncementsLikedByUser(idUser);
    }


}
