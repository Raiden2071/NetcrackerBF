import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { QuestionType, Quiz } from 'src/app/models/quiz';

@Component({
  selector: 'app-quiz-questions',
  templateUrl: './quiz-questions.component.html',
  styleUrls: ['./quiz-questions.component.scss']
})
export class QuizQuestionsComponent implements OnInit {

  data: Quiz; //title, description, type of quiz
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
    private fb: FormBuilder,
    private http: HttpClient
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
      // questionId:   [this.quizId, [Validators.required]],  // 0 до 9
      question: ['', [Validators.required]],  // question title
      questionType: [this.questionTypes.FOUR_ANSWERS, [Validators.required]],  // four answer
      answers:      this.fb.array([this.newAnswerForm(),this.newAnswerForm(),this.newAnswerForm(),this.newAnswerForm()])
    });
  }

  newAnswerForm(): FormGroup {
    return this.fb.group({
			value:    ['', [Validators.required]],  // текст ответа
			answer:   [false]
    });
  }

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

  click(val) {
    console.log(val);
  }

  logOut() {        
    localStorage.removeItem('access_token');
    sessionStorage.removeItem('access_token');
  }

  onChangeType(quiz): void {
    // переделай 
    if(quiz.questionType==="true/false") {
      quiz=='true' ?
      quiz.answers=[{
        value: true,
        answer: true
      },
      {
        value: false,
        answer: false
      }] : 
      quiz.answers=[{
        value: true,
        answer: false
      },
      {
        value: false,
        answer: true
      }];
    } 
    else {
      this.newAnswerForm();
    }
  }

  onSubmit(): void {        
    // if(this.answerArray.valid) {
      const data = Object.assign(this.data, this.questionsForm.value);
      this.http.post('quiz/', data).subscribe((v)=> console.log(v));
    // }
  }

}
