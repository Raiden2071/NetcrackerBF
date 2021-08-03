package dev.marco.example.springboot.model.impl;

import dev.marco.example.springboot.model.Quiz;

import java.math.BigInteger;

public class QuizAccomplishedImpl {

  private int correctAnswers;
  private Boolean isFavourite;
  private Quiz quiz;

  public QuizAccomplishedImpl(int correctAnswers, Boolean isFavourite, Quiz quiz) {
    this.correctAnswers = correctAnswers;
    this.isFavourite = isFavourite;
    this.quiz = quiz;
  }

  public QuizAccomplishedImpl(int correctAnswers, Quiz quiz) {
    this.isFavourite = false;
    this.correctAnswers = correctAnswers;
    this.quiz = quiz;
  }

  private QuizAccomplishedImpl() {
  }

  public int getCorrectAnswers() {
    return correctAnswers;
  }

  public void setCorrectAnswers(int correctAnswers) {
    this.correctAnswers = correctAnswers;
  }

  public Boolean getFavourite() {
    return isFavourite;
  }

  public void setBoolFavourite(int isFavourite) {
    if (isFavourite == 1) {
      this.isFavourite = true;
    } else if (isFavourite == 0) {
      this.isFavourite = false;
    }
  }

  public int getIntFavourite() {
    return this.isFavourite ? 1 : 0;
  }

  public void setFavourite(Boolean favourite) {
    isFavourite = favourite;
  }

  public Quiz getQuizId() {
    return quiz;
  }

  public void setQuizId(Quiz quiz) {
    this.quiz = quiz;
  }

  @Override
  public String toString() {
    return "QuizAccomplishedImpl{" +
            "correctAnswers=" + correctAnswers +
            ", isFavourite=" + isFavourite +
            ", quiz=" + quiz +
            '}';
  }
}
