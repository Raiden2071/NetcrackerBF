import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { map, tap } from 'rxjs/operators';
import { Quiz, QuizType } from 'src/app/models/quiz';

@Component({
  selector: 'app-quiz-questions',
  templateUrl: './quiz-questions.component.html',
  styleUrls: ['./quiz-questions.component.scss']
})
export class QuizQuestionsComponent implements OnInit {

  data: Quiz;
  constructor(
    private route: ActivatedRoute, private router: Router
  ) { }

  ngOnInit(): void {
    // поменяй any
    this.route.paramMap.subscribe((v: any) => this.data = JSON.parse(v.getAll('data')));
  }

  click() {
    console.log(this.data);
    
  }


}
