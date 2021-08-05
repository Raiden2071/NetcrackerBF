import { Component, OnInit } from '@angular/core';
import { Form, FormArray, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { map, tap } from 'rxjs/operators';
import { QuestionType, Quiz, QuizType } from 'src/app/models/quiz';

@Component({
  selector: 'app-quiz-questions',
  templateUrl: './quiz-questions.component.html',
  styleUrls: ['./quiz-questions.component.scss']
})
export class QuizQuestionsComponent implements OnInit {

  data: Quiz; //title, description, type of quiz
  quizTypes = QuizType;
  questionTypes = QuestionType;

  currentQuiz = 0;

  questionsForm: FormGroup = this.fb.group({
    questions: this.fb.array([this.newQuestionForm()])
  });

  constructor(
    private route: ActivatedRoute,
    private fb: FormBuilder
  ) { }

  ngOnInit(): void {
    this.addQuestion();
    this.addQuestion();
    this.addQuestion();
    this.addQuestion();
    this.addAnswer();
    this.addAnswer();

    
    // поменяй any
    // this.route.paramMap.subscribe((data: any) => this.data = JSON.parse(data.getAll('data')));
  }

  get questionArray(): FormArray {
    return this.questionsForm.get("questions") as FormArray;
  }

  get answerArray(): FormArray {    
    return this.questionsForm.get("questions")['controls'][4].get("answers");
  }

  newQuestionForm(): FormGroup {
    return this.fb.group({
      questionId:   ['', [Validators.required]],  // 0 до 9
      questionText: ['', [Validators.required]],  // question title
      questionType: ['', [Validators.required]],  // four answer
      answers:      this.fb.array([])
    });
  }

  newAnswerForm(): FormGroup {
    return this.fb.group({
      answerId: ['', [Validators.required]],
			value:    ['', [Validators.required]],  // текст ответа
			answer:   [false]
    });
  }

  addQuestion(): void {
    this.questionArray.push(this.newQuestionForm())
  }

  addAnswer(): void {  
    this.answerArray.push(this.newAnswerForm())
  }

  click() {
    console.log(this.questionArray.controls[this.currentQuiz].value);
  }

  onSubmit(): void {
    this.click();
    console.log(this.currentQuiz);
    
  }


}
