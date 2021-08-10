package dev.marco.example.springboot.rest;

import com.fasterxml.jackson.databind.JsonNode;
import dev.marco.example.springboot.exception.*;
import dev.marco.example.springboot.model.Announcement;
import dev.marco.example.springboot.model.impl.AnnouncementImpl;
import dev.marco.example.springboot.service.AnnouncementService;
import org.apache.log4j.Logger;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.server.ResponseStatusException;
import java.math.BigInteger;
import java.util.List;
import java.util.Set;

@RestController
@RequestMapping("/announcement")
public class AnnouncementController {

    private final static String ID_USER = "idUser";
    private final static String ID_ANNOUNCEMENT = "idAnnouncement";
    private static final Logger log = Logger.getLogger(AnnouncementController.class);
    private final AnnouncementService announcementService;

    @Autowired
    private AnnouncementController(AnnouncementService announcementService){
        this.announcementService = announcementService;
    }

    //@Autowired
    public void setTestConnection() throws DAOConfigException {
        announcementService.setTestConnection();
    }

    @PostMapping("/create")
    public BigInteger createAnnouncement(@RequestBody AnnouncementImpl announcement) {
        try {
            return  announcementService.buildNewAnnouncement(new AnnouncementImpl.AnnouncementBuilder()
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

    @GetMapping("/all/{idUser}")
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

    @DeleteMapping("/delete")
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

    @PutMapping("/update")
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

    @PostMapping("/like")
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

    @PostMapping("/search")
    public Set<Announcement> searchAnnouncement(@RequestBody JsonNode requestBody){
        String titleForSearch = requestBody.get("searchProject").asText();
        BigInteger idUser = BigInteger.valueOf(requestBody.get("idUser").asLong());
        try {
            return announcementService.getSetByTitle(titleForSearch, idUser);
        } catch (DAOLogicException e) {
            log.error(e.getMessage(), e);
            throw new ResponseStatusException(HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }

}
