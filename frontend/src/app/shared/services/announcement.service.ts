import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Announcement } from 'src/app/models/announcements';
import { AbstractCrudService } from '../abstracts/abstract-crud.service';

@Injectable({
  providedIn: 'root'
})
export class announcementService extends AbstractCrudService<Announcement>{

  path = 'announcement/all';
  
  constructor(protected http: HttpClient) {
    super(http);
  }

}
