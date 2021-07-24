import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { CreateAnnouncementComponent } from 'src/app/modals/create-announcement/components/create-announcement';
import { Annoucnment } from 'src/app/models/annoucnment';

@Component({
  selector: 'app-announcment',
  templateUrl: './announcment.component.html',
  styleUrls: ['./announcment.component.scss']
})
export class AnnouncmentComponent implements OnInit {

  annoucnments: Annoucnment[];
  
  searchProject: FormControl = new FormControl('');
  term : any;
  p: number = 1;

  constructor(
    private modalService: NgbModal
  ) { }

  ngOnInit(): void {
    (this.annoucnments as any) = [
    {
      title: "Title1",
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
      title: "Title2",
      description: "Some description Some description Some description Some description Some description Some description Some description Some description Some description",
      owner: {
        firstName: "Slava",
        lastName: "Danilchak"
      },
      date: 24242422342,
      address: "12345678900987654321",
      likes: 2
    },
    {
      title: "Title3",
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

  createAnnouncement(): void {
    const modalRef = this.modalService.open(CreateAnnouncementComponent, { centered: true });
  }

}
