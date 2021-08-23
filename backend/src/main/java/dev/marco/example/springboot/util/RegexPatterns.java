package dev.marco.example.springboot.util;

public interface RegexPatterns {

    String mailPattern = "^[\\w-\\.]+@([\\w-]+\\.)+[\\w-]{2,4}$";

    String passPattern = "^(?=.*\\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$";

    String quizTitlePattern = "^[a-zA-Z0-9\\s]+$";

}
