import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { QuizType } from 'src/app/models/quiz';

@Component({
  selector: 'app-create-quiz-title',
  templateUrl: './create-quiz-title.component.html',
  styleUrls: ['./create-quiz-title.component.scss']
})
export class CreateQuizTitleComponent implements OnInit {

  quizTypes = QuizType;

  createQuizForm: FormGroup = this.fb.group({
    title:       ['', [Validators.required]],
    quizType:    [this.quizTypes.history, [Validators.required]],
    description: ['', [Validators.required]],
    // authorId: [this.user]
  });

  constructor(
    private fb: FormBuilder,
    private router: Router
  ) { }

  ngOnInit(): void {    
  }

  onSubmit(): void {
    this.router.navigate(['/quiz/quiz-questions', {data: JSON.stringify(this.createQuizForm.value)}])
  }

}
