import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Quiz } from 'src/app/models/quiz';
import { AbstractCrudService } from '../abstracts/abstract-crud.service';

@Injectable({
  providedIn: 'root'
})
export class quizService extends AbstractCrudService<Quiz>{

  path = 'quiz';

  constructor(protected http: HttpClient) {
    super(http);
  }


}
