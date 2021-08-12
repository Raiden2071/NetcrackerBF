import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { Quiz, QuizType } from 'src/app/models/quiz';
import { UserService } from 'src/app/shared/services/users.service';

@Component({
  selector: 'app-quiz-game',
  templateUrl: './quiz-game.component.html',
  styleUrls: ['./quiz-game.component.scss']
})
export class QuizGameComponent implements OnInit {

  quizId: number;
  quizData: Quiz;
  questionTypes = QuizType
  userId: number;
  questionsForm: FormGroup = this.fb.group({
    quizId: ['', Validators.required],
    userId: ['', Validators.required],
    answers: this.fb.array([])
  });
  currentQuiz = 0;

  constructor(
    private route: ActivatedRoute,
    private fb: FormBuilder,
    private http: HttpClient,
    private userService: UserService
  ) { }

  ngOnInit(): void {
    this.getUser();
    this.route.paramMap.subscribe((quiz: any) => this.quizId = quiz.params.id);
    this.http.get(`quiz/game/${this.quizId}`).subscribe((quiz: Quiz) => this.quizData = quiz);  
  }

  previous():void {    
    if(this.currentQuiz>=1) {this.currentQuiz--;}
  }

  next(): void {
    if(this.currentQuiz<=8) {this.currentQuiz++;}
  }

  changeAnswer(index): void {    
    this.quizData.questions[this.currentQuiz].answers[index].answer = !this.quizData.questions[this.currentQuiz].answers[index].answer;
  }

  getUser(): void {
    this.userService.userInfo$.subscribe(({id}) => this.userId = id);
  }

  logOut() {        
    localStorage.removeItem('access_token');
    sessionStorage.removeItem('access_token');
  }

  onSubmit(): void {    
    console.log(this.questionsForm.value.userId);
    
    const data = Object.assign(this.quizData.questions, this.questionsForm.value.userId)
    console.log(data);
    
    // console.log(this .quizData.questions);
  }

}
