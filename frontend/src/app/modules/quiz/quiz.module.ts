import { NgModule } from '@angular/core';
import { CommonModule, registerLocaleData } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { QuizRoutingModule } from './quiz-routing.module';
import { QuizComponent } from './components/quiz.component';
import { NgxPaginationModule } from 'ngx-pagination';  
import { Ng2SearchPipeModule } from 'ng2-search-filter';   
import localeRu from '@angular/common/locales/ru';

registerLocaleData(localeRu, 'ru');

@NgModule({
  declarations: [QuizComponent],
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
