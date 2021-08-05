import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { Quiz } from 'src/app/models/quiz';
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

  constructor(
    private modalService: NgbModal,
    private quizService: quizService,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.getQuizzes();
  }

  getQuizzes() {
    this.quizService.getList().subscribe(quiz => this.quizzes = quiz);
  }

  createQuiz(): void {
    this.router.navigateByUrl('quiz/create-quiz');
  }

}
