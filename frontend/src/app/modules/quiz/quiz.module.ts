import { NgModule } from '@angular/core';
import { CommonModule, registerLocaleData } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { QuizRoutingModule } from './quiz-routing.module';
import { QuizComponent } from './components/quiz/quiz.component';
import { NgxPaginationModule } from 'ngx-pagination';  
import { Ng2SearchPipeModule } from 'ng2-search-filter';   
import localeRu from '@angular/common/locales/ru';
import { CreateQuizTitleComponent } from './components/create-quiz-title/create-quiz-title.component';
import { QuizQuestionsComponent } from './components/quiz-questions/quiz-questions.component';

registerLocaleData(localeRu, 'ru');

@NgModule({
  declarations: [
    QuizComponent,
    CreateQuizTitleComponent,
    QuizQuestionsComponent
    ],
  imports: [
    CommonModule,
    QuizRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    NgxPaginationModule,
    Ng2SearchPipeModule
  ]
})
export class QuizModule { }
