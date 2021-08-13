package dev.marco.example.springboot.rest;

import com.fasterxml.jackson.databind.JsonNode;
import dev.marco.example.springboot.exception.*;
import dev.marco.example.springboot.model.Announcement;
import dev.marco.example.springboot.model.AnnouncementComment;
import dev.marco.example.springboot.model.impl.AnnouncementImpl;
import dev.marco.example.springboot.service.AnnouncementService;
import dev.marco.example.springboot.util.ApiAddresses;
import org.apache.log4j.Logger;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.server.ResponseStatusException;
import java.math.BigInteger;
import java.util.List;
import java.util.Set;

@RestController
@RequestMapping(ApiAddresses.API_ANNOUNCEMENT)
public class AnnouncementController implements ApiAddresses {

  private static final String ID_USER = "idUser";
  private static final String ID_ANNOUNCEMENT = "idAnnouncement";
  private static final String ID_LAST_COMMENT = "idLastComment";
  private static final String PAGINATION_SIZE = "paginationSize";
  private static final String COMMENT_CONTENT = "commentContent";
  private static final Logger log = Logger.getLogger(AnnouncementController.class);
  private final AnnouncementService announcementService;

  @Autowired
  private AnnouncementController(AnnouncementService announcementService) {
    this.announcementService = announcementService;
  }

  public void setTestConnection() throws DAOConfigException {
    announcementService.setTestConnection();
  }

  @PostMapping(API_CREATE_ANNOUNCEMENT)
  public BigInteger createAnnouncement(@RequestBody AnnouncementImpl announcement) {
    try {
      return announcementService.buildNewAnnouncement(new AnnouncementImpl.AnnouncementBuilder()
          .setTitle(announcement.getTitle())
          .setDescription(announcement.getDescription())
          .setIdUser(announcement.getIdUser())
          .setAddress(announcement.getAddress())
          .build());
    } catch (AnnouncementException e) {
      log.error(e.getMessage(), e);
      throw new ResponseStatusException(HttpStatus.BAD_REQUEST);
    } catch (DAOLogicException e) {
      log.error(e.getMessage(), e);
      throw new ResponseStatusException(HttpStatus.INTERNAL_SERVER_ERROR);
    } catch (UserException e) {
      log.error(e.getMessage(), e);
      throw new ResponseStatusException(HttpStatus.FORBIDDEN);
    }
  }

  @GetMapping(API_GET_ALL_ANNOUNCEMENT)
  public List<Announcement> getAllAnnouncement(@PathVariable BigInteger idUser) {
    try {
      return announcementService.getAllAnnouncements(idUser);
    } catch (AnnouncementDoesNotExistException e) {
      log.error(e.getMessage(), e);
      throw new ResponseStatusException(HttpStatus.NOT_FOUND);
    } catch (DAOLogicException e) {
      log.error(e.getMessage(), e);
      throw new ResponseStatusException(HttpStatus.INTERNAL_SERVER_ERROR);
    } catch (AnnouncementException e) {
      log.error(e.getMessage(), e);
      throw new ResponseStatusException(HttpStatus.BAD_REQUEST);
    }
  }

  @DeleteMapping(API_DELETE_ANNOUNCEMENT)
  public void deleteAnnouncement(@RequestBody JsonNode requestBody) {
    BigInteger idUser = BigInteger.valueOf(requestBody.get(ID_USER).asLong());
    BigInteger idAnnouncement = BigInteger.valueOf(requestBody.get(ID_ANNOUNCEMENT).asLong());
    try {
      announcementService.deleteAnnouncement(idAnnouncement, idUser);
    } catch (DAOLogicException e) {
      log.error(e.getMessage(), e);
      throw new ResponseStatusException(HttpStatus.INTERNAL_SERVER_ERROR);
    } catch (UserException e) {
      log.error(e.getMessage(), e);
      throw new ResponseStatusException(HttpStatus.FORBIDDEN);
    } catch (AnnouncementDoesNotExistException | UserDoesNotExistException e) {
      log.error(e.getMessage(), e);
      throw new ResponseStatusException(HttpStatus.NOT_FOUND);
    }
  }

  @PutMapping(API_UPDATE_ANNOUNCEMENT)
  public void editAnnouncement(@RequestBody AnnouncementImpl announcement) {
    try {
      announcementService.editAnnouncement(new AnnouncementImpl.AnnouncementBuilder()
          .setId(announcement.getId())
          .setTitle(announcement.getTitle())
          .setDescription(announcement.getDescription())
          .setIdUser(announcement.getIdUser())
          .setAddress(announcement.getAddress())
          .build());
    } catch (AnnouncementException e) {
      log.error(e.getMessage(), e);
      throw new ResponseStatusException(HttpStatus.BAD_REQUEST);
    } catch (DAOLogicException e) {
      log.error(e.getMessage(), e);
      throw new ResponseStatusException(HttpStatus.INTERNAL_SERVER_ERROR);
    } catch (UserException e) {
      log.error(e.getMessage(), e);
      throw new ResponseStatusException(HttpStatus.FORBIDDEN);
    } catch (AnnouncementDoesNotExistException | UserDoesNotExistException e) {
      log.error(e.getMessage(), e);
      throw new ResponseStatusException(HttpStatus.NOT_FOUND);
    }
  }

  @PostMapping(API_LIKE_ANNOUNCEMENT)
  public void setLikeAnnouncement(@RequestBody JsonNode requestBody) {
    BigInteger idUser = BigInteger.valueOf(requestBody.get(ID_USER).asLong());
    BigInteger idAnnouncement = BigInteger.valueOf(requestBody.get(ID_ANNOUNCEMENT).asLong());
    try {
      announcementService.setLikeAnnouncement(idAnnouncement, idUser);
    } catch (AnnouncementException e) {
      log.error(e.getMessage(), e);
      throw new ResponseStatusException(HttpStatus.BAD_REQUEST);
    } catch (DAOLogicException e) {
      log.error(e.getMessage(), e);
      throw new ResponseStatusException(HttpStatus.INTERNAL_SERVER_ERROR);
    } catch (AnnouncementDoesNotExistException | UserDoesNotExistException e) {
      log.error(e.getMessage(), e);
      throw new ResponseStatusException(HttpStatus.NOT_FOUND);
    }
  }

  @GetMapping(API_GET_COMMENTARIES)
  public List<AnnouncementComment> getCommentaries(@RequestBody JsonNode requestBody) {
    try {
      BigInteger idAnnouncement = BigInteger.valueOf(requestBody.get(ID_ANNOUNCEMENT).asLong());
      BigInteger idLastComment = BigInteger.valueOf(requestBody.get(ID_LAST_COMMENT).asLong());
      int paginationSize = requestBody.get(PAGINATION_SIZE).asInt();

      return announcementService.getComments(idAnnouncement, idLastComment, paginationSize);
    } catch (DAOLogicException e) {
      log.error(e.getMessage(), e);
      throw new ResponseStatusException(HttpStatus.INTERNAL_SERVER_ERROR);
    } catch (AnnouncementDoesNotExistException e) {
      log.error(e.getMessage(), e);
      throw new ResponseStatusException(HttpStatus.NOT_FOUND);
    }
  }

  @PostMapping(API_CREATE_COMMENTARY)
  public void createCommentary(@RequestBody JsonNode requestBody) {
    try {
      BigInteger idAnnouncement = BigInteger.valueOf(requestBody.get(ID_ANNOUNCEMENT).asLong());
      BigInteger idUser = BigInteger.valueOf(requestBody.get(ID_USER).asLong());
      String commentContent = requestBody.get(COMMENT_CONTENT).asText();
      announcementService.createComment(commentContent, idAnnouncement, idUser);
    } catch (DAOLogicException e) {
      log.error(e.getMessage(), e);
      throw new ResponseStatusException(HttpStatus.INTERNAL_SERVER_ERROR);
    } catch (AnnouncementException e) {
      log.error(e.getMessage(), e);
      throw new ResponseStatusException(HttpStatus.BAD_REQUEST);
    }
  }

  @PostMapping(API_SEARCH_ANNOUNCEMENT)
  public Set<Announcement> searchAnnouncement(@RequestBody JsonNode requestBody) {
    String search = "searchProject";
    String titleForSearch = requestBody.get(search).asText();
    BigInteger idUser = BigInteger.valueOf(requestBody.get(ID_USER).asLong());
    try {
      return announcementService.getSetByTitle(titleForSearch, idUser);
    } catch (DAOLogicException e) {
      log.error(e.getMessage(), e);
      throw new ResponseStatusException(HttpStatus.INTERNAL_SERVER_ERROR);
    }
  }

}
