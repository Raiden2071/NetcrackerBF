import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { QuizType } from 'src/app/models/quiz';
import { QuizGuard } from '../../quiz.guard';

@Component({
  selector: 'app-create-quiz-title',
  templateUrl: './create-quiz-title.component.html',
  styleUrls: ['./create-quiz-title.component.scss']
})
export class CreateQuizTitleComponent implements OnInit {

  quizTypes = QuizType;

  createQuizForm: FormGroup = this.fb.group({
    title:       ['', [Validators.required]],
    quizType:    [this.quizTypes.GEOGRAPHICAL, [Validators.required]],
    description: ['', [Validators.required]],
    authorId:    [401]
  });

  constructor(
    private fb: FormBuilder,
    private router: Router,
    private quizGuard: QuizGuard
  ) { }

  ngOnInit(): void {    
  }

  onSubmit(): void {
    if(this.createQuizForm.valid) {
      this.quizGuard.data = true;
      this.router.navigate(['/quiz/quiz-questions', {data: JSON.stringify(this.createQuizForm.value)}])
    }
    else {
      console.log('not valid');
    }
  }

}
