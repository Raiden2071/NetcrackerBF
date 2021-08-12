import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Quiz, QuizType } from 'src/app/models/quiz';
import { quizService } from 'src/app/shared/services/quiz.service';

@Component({
  selector: 'app-quiz',
  templateUrl: './quiz.component.html',
  styleUrls: ['./quiz.component.scss']
})
export class QuizComponent implements OnInit {

  quizzes: Quiz[];
  // searchProject: FormControl = new FormControl('');
  term: any;
  p: number = 1;
  quizType = QuizType;

  constructor(
    private quizService: quizService,
    private router: Router,
    private http: HttpClient
  ) { }

  ngOnInit(): void {    
    this.getQuizzes();
  }

  onSelect(type: string) {
    console.log(type);
    this.http.get(`quiz/filter?QUIZTYPE_MATH`).subscribe((v) => console.log(v))
    // parseInt(id, 10) !== 0 ? this.getProjects(`?categories.id_eq=${id}`) : this.getProjects();
  }

  getQuizzes() {
    this.quizService.getList().subscribe(quiz => this.quizzes = quiz);
  }
  
  createQuiz(): void {
    this.router.navigateByUrl('quiz/create-quiz');
  }

}
