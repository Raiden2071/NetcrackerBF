package dev.marco.example.springboot.rest;

import dev.marco.example.springboot.exception.*;
import dev.marco.example.springboot.model.Dashboard;
import dev.marco.example.springboot.service.DashboardService;
import dev.marco.example.springboot.util.ApiAddresses;
import org.apache.log4j.Logger;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.server.ResponseStatusException;

import java.math.BigInteger;

@RestController
public class DashboardController implements ApiAddresses {

  private final DashboardService dashboardService;

  private static final Logger log = Logger.getLogger(DashboardController.class);

  @Autowired
  public DashboardController(DashboardService dashboardService) {
    this.dashboardService = dashboardService;
  }

  public void setTestConnection() throws DAOConfigException {
    dashboardService.setTestConnection();
  }

  @GetMapping(API_GENERATE_DASHBOARD)
  public Dashboard generateDashboard(@PathVariable BigInteger id) {
    try {
      return dashboardService.generateDashboard(id);
    } catch (DAOLogicException e) {
      log.error(MessagesForException.DAO_LOGIC_EXCEPTION);
      throw new ResponseStatusException(HttpStatus.INTERNAL_SERVER_ERROR, e.getMessage(),
          e.getCause());
    } catch (QuizDoesNotExistException e) {
      log.error(MessagesForException.MESSAGE_ERROR);
      throw new ResponseStatusException(HttpStatus.NOT_FOUND, e.getMessage(), e.getCause());
    } catch (UserDoesNotExistException e) {
      log.error(MessagesForException.USER_NOT_FOUND_EXCEPTION);
      throw new ResponseStatusException(HttpStatus.NOT_FOUND, e.getMessage(), e.getCause());
    } catch (AnnouncementDoesNotExistException | AnnouncementException e) {
      log.error(MessagesForException.ANNOUNCEMENT_NOT_FOUND_EXCEPTION);
      throw new ResponseStatusException(HttpStatus.NOT_FOUND, e.getMessage(), e.getCause());
    }
  }
}
