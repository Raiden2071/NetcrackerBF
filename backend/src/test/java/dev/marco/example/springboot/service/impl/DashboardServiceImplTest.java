package dev.marco.example.springboot.service.impl;

import org.apache.log4j.Logger;
import org.junit.jupiter.api.Test;
import org.junit.jupiter.api.Timeout;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;
import dev.marco.example.springboot.exception.*;
import dev.marco.example.springboot.model.Dashboard;
import dev.marco.example.springboot.model.User;
import dev.marco.example.springboot.model.impl.UserImpl;
import dev.marco.example.springboot.service.DashboardService;

import java.math.BigInteger;
import java.util.concurrent.TimeUnit;

import static org.junit.jupiter.api.Assertions.assertNotNull;
import static dev.marco.example.springboot.exception.MessagesForException.DAO_LOGIC_EXCEPTION;
import static dev.marco.example.springboot.exception.MessagesForException.ERROR_WHILE_SETTING_TEST_CONNECTION;


@SpringBootTest
public class DashboardServiceImplTest {

  @Autowired
  private DashboardService dashboardService;

  private static final Logger log = Logger.getLogger(DashboardServiceImplTest.class);

  @Autowired
  private void setTestConnection(DashboardService dashboardService) {
    this.dashboardService = dashboardService;
    try {
      dashboardService.setTestConnection();
    } catch (DAOConfigException e) {
      log.error(ERROR_WHILE_SETTING_TEST_CONNECTION + e.getMessage());
    }
  }

  @Test
  @Timeout(value = 10000, unit = TimeUnit.MILLISECONDS)
  void generateDashboard() throws DAOLogicException {
    try {
      User user = new UserImpl.UserBuilder()
          .setId(BigInteger.valueOf(1))
          .build();

      Dashboard dashboard = dashboardService.generateDashboard(user.getId());
      assertNotNull(dashboard);
    } catch (DAOLogicException | AnnouncementException | AnnouncementDoesNotExistException | QuizDoesNotExistException | UserException e) {
      log.error(DAO_LOGIC_EXCEPTION + " in generateDashboard");
      throw new DAOLogicException(DAO_LOGIC_EXCEPTION);
    }
  }
}
