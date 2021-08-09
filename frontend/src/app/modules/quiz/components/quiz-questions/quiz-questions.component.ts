import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
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
  currentQuiz: number = 0;
  quizId: number = 0;

  questionsForm: FormGroup = this.fb.group({
    questions: this.fb.array([
      this.newQuestionForm(),
      this.newQuestionForm(),
      this.newQuestionForm(),
      this.newQuestionForm(),
      this.newQuestionForm(),
      this.newQuestionForm(),
      this.newQuestionForm(),
      this.newQuestionForm(),
      this.newQuestionForm(),
      this.newQuestionForm()
    ])
  });

  constructor(
    private route: ActivatedRoute,
    private fb: FormBuilder
  ) { }

  ngOnInit(): void {
    // поменяй any
    this.route.paramMap.subscribe((data: any) => this.data = JSON.parse(data.getAll('data')));
  }

  get questionArray(): FormArray {
    return this.questionsForm.get("questions") as FormArray;
  }

  get answerArray(): FormArray {    
    return this.questionsForm.get("questions")['controls'][1].get("answers");
  }

  newQuestionForm(): FormGroup {    
      this.quizId++;
    return this.fb.group({
      questionId:   [this.quizId, [Validators.required]],  // 0 до 9
      questionText: ['', [Validators.required]],  // question title
      questionType: [this.questionTypes.FOUR_ANSWERS, [Validators.required]],  // four answer
      answers:      this.fb.array([this.newAnswerForm(),this.newAnswerForm(),this.newAnswerForm(),this.newAnswerForm()])
    });
  }

  newAnswerForm(): FormGroup {
    return this.fb.group({
      answerId: ['', [Validators.required]],
			value:    ['', [Validators.required]],  // текст ответа
			answer:   [false]
    });
  }

  // addQuestion(): void {
  //   this.questionArray.push(this.newQuestionForm())
  // }

  // addAnswer(): void {  
  //   this.answerArray.push(this.newAnswerForm())
  // }

  getQuestions(form) {
    return form.controls.questions.controls;
  }

  getAnswers(form) {    
    return form.controls.answers.controls;
  }

  previous():void {    
    if(this.currentQuiz>=1) {this.currentQuiz--;}
  }

  next(): void {
    if(this.currentQuiz<=8) {this.currentQuiz++;}
  }

  click() {
    console.log(this.questionArray.controls[this.currentQuiz].value);
  }

  onSubmit(): void {
    const data = Object.assign(this.data, this.questionsForm.value)    
    console.log(data);
  }

}
