import { Component, OnInit } from '@angular/core';
import { QuizType } from 'src/app/models/quiz';
import { User } from 'src/app/models/user';
import { UserService } from '../../services/users.service';

@Component({
  selector: 'app-quiz-sidebar',
  templateUrl: './quiz-sidebar.component.html',
  styleUrls: ['./quiz-sidebar.component.scss']
})
export class QuizSidebarComponent implements OnInit {

  quizzes;
  quizTypes = QuizType;
  constructor(
    private userService: UserService
  ) { }

  ngOnInit(): void {
    this.quizzes = [0,1,2,3,4,5,6,7,8,9];
  }


  

}
