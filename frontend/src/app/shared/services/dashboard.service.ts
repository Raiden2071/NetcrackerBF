import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Dashboard } from 'src/app/models/dashboard';
import { AbstractCrudService } from '../abstracts/abstract-crud.service';

@Injectable({
  providedIn: 'root'
})
export class DashboardService extends AbstractCrudService<Dashboard>{

  path = 'dashboard';

  constructor(protected http: HttpClient) {
    super(http);
  }


}
