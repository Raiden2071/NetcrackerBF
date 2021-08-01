import { Component, OnInit } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { switchMap } from 'rxjs/operators';
import { Quiz } from 'src/app/models/quiz';

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
    // private quizService: quizService,
  ) { }

  ngOnInit(): void {
    (this.quizzes as any) = [
      {
    quizId: 0,
    title: 'Title',
    description: 'scriptiondescriptscriptiondescriptiondescriptionscriptiondescriptiondescriptionscriptiondescriptiondescriptionscriptiondescriptiondescriptionscriptiondescriptiondescriptionscriptiondescriptiondescriptionscriptiondescriptiondescriptionscriptiondescriptiondescriptionscriptiondescriptiondescriptionscriptiondescriptiondescriptioniondescription',
    quizType: 'Quiz type',
    creationDate: Date,
    authorId: 12,
    questions: [
      {
        questionId: 12,
        questionText: 'questionText', 	// текст вопроса
        questionType: 'history',
        answers: [
          {
            answerId: 12,
            value: 'text of answer',  // текст ответа
            answer: true,
            questionId: 12
          }
        ]
      }
    ]
  },
  {
    quizId: 0,
    title: 'Title',
    description: 'scriptiondescriptscriptiondescriptiondescriptionscriptiondescriptiondescriptionscriptiondescriptiondescriptionscriptiondescriptiondescriptionscriptiondescriptiondescriptionscriptiondescriptiondescriptionscriptiondescriptiondescriptionscriptiondescriptiondescriptionscriptiondescriptiondescriptionscriptiondescriptiondescriptioniondescription',
    quizType: 'Quiz type',
    creationDate: Date,
    authorId: 12,
    questions: [
      {
        questionId: 12,
        questionText: 'questionText', 	// текст вопроса
        questionType: 'history',
        answers: [
          {
            answerId: 12,
            value: 'text of answer',  // текст ответа
            answer: true,
            questionId: 12
          }
        ]
      }
    ]
  },
  {
    quizId: 0,
    title: 'Title',
    description: 'description',
    quizType: 12,
    creationDate: Date,
    authorId: 12,
    questions: [
      {
        questionId: 12,
        questionText: 'questionText', 	// текст вопроса
        questionType: 12,
        answers: [
          {
            answerId: 12,
            value: 'text of answer',  // текст ответа
            answer: true,
            questionId: 12
          }
        ]
      }
    ]
  },
  {
    quizId: 0,
    title: 'Title',
    description: 'description',
    quizType: 12,
    creationDate: Date,
    authorId: 12,
    questions: [
      {
        questionId: 12,
        questionText: 'questionText', 	// текст вопроса
        questionType: 12,
        answers: [
          {
            answerId: 12,
            value: 'text of answer',  // текст ответа
            answer: true,
            questionId: 12
          }
        ]
      }
    ]
  },
  {
    quizId: 0,
    title: 'Title',
    description: 'description',
    quizType: 12,
    creationDate: Date,
    authorId: 12,
    questions: [
      {
        questionId: 12,
        questionText: 'questionText', 	// текст вопроса
        questionType: 12,
        answers: [
          {
            answerId: 12,
            value: 'text of answer',  // текст ответа
            answer: true,
            questionId: 12
          }
        ]
      }
    ]
  },
  // 
  

]
    // this.getquiz();
  }

  getQuiz() {
    // this.quizService.getList().subscribe(quiz => this.quiz = quiz);
  }

  createQuiz(): void {
  //   const modalRef = this.modalService.open(CreateQuizComponent, { centered: true });
  //   modalRef.closed.pipe(
  //     switchMap(quiz => this.quizService.createOne(quiz))
  //   ).subscribe(() =>
  //     this.getquiz()
  //   );
  }

}
