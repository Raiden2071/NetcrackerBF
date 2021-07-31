package dev.marco.example.springboot.service;

import dev.marco.example.springboot.exception.*;
import dev.marco.example.springboot.model.Dashboard;
import dev.marco.example.springboot.model.User;

public interface DashboardService {

    Dashboard generateDashboard(User user) throws DAOLogicException, QuizDoesNotExistException, AnnouncementDoesNotExistException, AnnouncementException;

    void setTestConnection() throws DAOConfigException;
}
