import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { Annoucnment } from 'src/app/models/annoucnment';

@Component({
  selector: 'app-announcment',
  templateUrl: './announcment.component.html',
  styleUrls: ['./announcment.component.scss']
})
export class AnnouncmentComponent implements OnInit {

  annoucnments: Annoucnment[];
  
  searchProject: FormControl = new FormControl('');


  constructor() { }

  ngOnInit(): void {
    (this.annoucnments as any) = [
    {
      title: "Title",
      description: "Some description",
      owner: {
        firstName: "Slava",
        lastName: "Danilchak"
      },
      date: 24242422342,
      address: "St. Williams",
      likes: 2
    },
    {
      title: "Title",
      description: "Some description Some description Some description Some description Some description Some description Some description Some description Some description",
      owner: {
        firstName: "Slava",
        lastName: "Danilchak"
      },
      date: 24242422342,
      address: "St. Williams",
      likes: 2
    },
    {
      title: "Title",
      description: "Some description",
      owner: {
        firstName: "Slava",
        lastName: "Danilchak"
      },
      date: 24242422342,
      address: "St. Williams",
      likes: 2
    }
   ]
  }

  getUser() {

  }

}
