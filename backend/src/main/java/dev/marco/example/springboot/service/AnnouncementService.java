package dev.marco.example.springboot.service;

import dev.marco.example.springboot.exception.*;
import dev.marco.example.springboot.model.Announcement;

import java.math.BigInteger;
import java.util.List;
import java.util.Set;

public interface AnnouncementService {

    String MESSAGE_FOR_BUILD_NEW_ANNOUNCEMENT = " in buildNewAnnouncement()";
    String MESSAGE_FOR_EDIT_ANNOUNCEMENT = " in editAnnouncement()";
    String MESSAGE_FOR_DELETE_ANNOUNCEMENT = " in deleteAnnouncement()";
    String MESSAGE_FOR_TO_LIKE_ANNOUNCEMENT = " in toLikeAnnouncement()";
    String MESSAGE_FOR_TO_DISLIKE_ANNOUNCEMENT = " in toDisLikeAnnouncement()";

    List<Announcement> getAllAnnouncements(BigInteger idUser)
            throws AnnouncementDoesNotExistException, DAOLogicException, AnnouncementException;

    BigInteger buildNewAnnouncement(Announcement announcement)
            throws AnnouncementException, DAOLogicException, UserException;

    void editAnnouncement(Announcement announcement)
            throws AnnouncementException, DAOLogicException, UserException, AnnouncementDoesNotExistException, UserDoesNotExistException;

    void deleteAnnouncement(BigInteger idAnnouncement, BigInteger idUser)
            throws DAOLogicException, UserException, AnnouncementDoesNotExistException, UserDoesNotExistException;

    void setLikeAnnouncement(BigInteger idAnnouncement, BigInteger idUser)
            throws AnnouncementException, DAOLogicException, AnnouncementDoesNotExistException, UserDoesNotExistException;

    List<Announcement> getPopularAnnouncements(int numberAnnouncements, BigInteger idUser)
            throws AnnouncementDoesNotExistException, DAOLogicException;

    Set<Announcement> getAnnouncementsLikedByUser(BigInteger idUser)
            throws AnnouncementDoesNotExistException, DAOLogicException, AnnouncementException;

    void setTestConnection() throws DAOConfigException;
}
