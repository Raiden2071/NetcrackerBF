package dev.marco.example.springboot.rest;

import dev.marco.example.springboot.exception.*;
import dev.marco.example.springboot.model.impl.UserImpl;
import dev.marco.example.springboot.service.DashboardService;
import org.apache.log4j.Logger;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.server.ResponseStatusException;

@RestController
public class DashboardController {

    @Autowired
    private DashboardService dashboardService;

    private static final Logger log = Logger.getLogger(DashboardController.class);

    @GetMapping("/dashboard")
    public void generateDashboard(@RequestBody UserImpl user) {
        try {
            dashboardService.generateDashboard(user);
        } catch (DAOLogicException e) {
            log.error(MessagesForException.DAO_LOGIC_EXCEPTION);
            throw new ResponseStatusException(HttpStatus.INTERNAL_SERVER_ERROR, e.getMessage(), e.getCause());
        } catch (QuizDoesNotExistException | AnnouncementDoesNotExistException | AnnouncementException e) {
            log.error(MessagesForException.MESSAGE_ERROR);
            throw new ResponseStatusException(HttpStatus.NOT_FOUND, e.getMessage(), e.getCause());
        }
    }
}
