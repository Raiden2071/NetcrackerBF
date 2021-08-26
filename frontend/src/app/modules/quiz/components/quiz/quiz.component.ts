import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { Router } from '@angular/router';
import { debounceTime, tap } from 'rxjs/operators';
import { Filter, Quiz } from 'src/app/models/quiz';

@Component({
  selector: 'app-quiz',
  templateUrl: './quiz.component.html',
  styleUrls: ['./quiz.component.scss']
})
export class QuizComponent implements OnInit {

  quizzes: Quiz[];
  searchProject: FormControl = new FormControl('');
  quizType = Filter;
  page = 1;
  totalElements = 6;

  constructor(
    private router: Router,
    private http: HttpClient
  ) { }

  ngOnInit(): void {        
    this.getQuizzes();
    this.retrieveFilterChanges();
  }

  onSelect(type: string) {   
    console.log(type);
     
    this.http.get(`/quiz/filter?page=1&filter=${type}`).subscribe((v) => console.log(v))
  }

  retrieveFilterChanges() {
    this.searchProject.valueChanges.pipe(
      debounceTime(300),
      tap(() => this.page=1)).subscribe(() => this.getQuizzes());
  }

  getQuizzes() {
    this.http.get(`quiz/search?page=${this.page}&title=${this.searchProject.value}`).subscribe((quiz: any) =>  {
      this.quizzes = quiz.content;      
      this.totalElements = quiz.totalElements;
    });
  }
  
  createQuiz(): void {
    this.router.navigateByUrl('quiz/create-quiz');
  }

}
