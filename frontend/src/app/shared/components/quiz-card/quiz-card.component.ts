import { Component, Input, OnInit } from '@angular/core';
import { Quiz } from 'src/app/models/quiz';

@Component({
  selector: 'app-quiz-card',
  templateUrl: './quiz-card.component.html',
  styleUrls: ['./quiz-card.component.scss']
})
export class QuizCardComponent implements OnInit {
  
  @Input() quizzes: Quiz[];
  @Input() term: any;
  @Input() p: number;
  
  constructor() { }

  ngOnInit(): void { }

}
