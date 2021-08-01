package dev.marco.example.springboot.util;

import org.apache.log4j.Logger;
import dev.marco.example.springboot.exception.DAOConfigException;

import java.io.FileInputStream;
import java.sql.Connection;
import java.sql.DriverManager;
import java.util.Properties;

public class DAOUtil {

  private static final String PATH_PROPERTY = "./src/main/resources/sqlScripts.properties";
  private static final String DRIVER_PATH_PROPERTY = "oracle.jdbc.OracleDriver";

  private static final Logger log = Logger.getLogger(DAOUtil.class);

  private DAOUtil() {
  }

  public static Connection getDataSource(String URL, String USERNAME, String PASSWORD, Properties properties)
      throws  DAOConfigException {

    try (FileInputStream fis = new FileInputStream(PATH_PROPERTY)) {
      Class.forName(DRIVER_PATH_PROPERTY);
      properties.load(fis);

      return DriverManager.getConnection(URL, USERNAME, PASSWORD);
    } catch (Exception e){
      log.error("DAO config error " + e.getMessage());
      throw new DAOConfigException("Dao config exception ",e);
    }
  }

}
