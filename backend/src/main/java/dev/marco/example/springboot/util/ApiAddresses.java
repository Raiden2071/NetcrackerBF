package dev.marco.example.springboot.util;

public interface ApiAddresses {

  String API_REGISTER_USER = "/auth/local/register";
  String API_AUTHORIZE_USER = "/auth/local";
  String API_RECOVER_PASSWORD= "/auth/recover";
  String API_UPDATE_PASSWORD = "/updatePassword/{id}";
  String API_CONFIRM_EMAIL = "/confirm";
  String API_GET_USER = "/user/{idUser}";
  String API_GET_USER_BY_TOKEN = "/user/me";
  String API_DELETE_USER = "/user/{idUser}";
  String API_EDIT_USER = "/user/{idUser}";
  String API_GET_ACCOMPLISHED_QUIZZES_BY_USER ="/user/acc_quiz/{userId}";
  String API_GET_FAVORITE_QUIZZES_BY_USER = "/user/favorite/{id}";

  String API_QUIZ = "/quiz";
  String API_ALL_QUIZZES = "/all";
  String API_GET_QUIZ_BY_TITLE = "/search";
  String API_GET_QUIZ_BY_ID = "/{id}";
  String API_UPDATE_QUIZ = "/{id}";
  String API_DELETE_QUIZ = "/{id}";
  String API_SHOW_ALL_FILTER_QUIZZES = "/filter";
  String API_QUIZ_GAME = "/game/{title}";
  String API_FINISH_QUIZ = "/game/end";
  String API_LIKE_QUIZ = "/like/{id}";

  String API_GENERATE_DASHBOARD = "/dashboard/{id}";

}
