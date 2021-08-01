import { Component, OnInit } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { switchMap, tap } from 'rxjs/operators';
import { CreateAnnouncementComponent } from 'src/app/modals/create-announcement/components/create-announcement';
import { Announcement } from 'src/app/models/announcements';
import { announcementService } from 'src/app/shared/services/announcement.service';

@Component({
  selector: 'app-announcment',
  templateUrl: './announcment.component.html',
  styleUrls: ['./announcment.component.scss']
})
export class AnnouncmentComponent implements OnInit {

  announcements: Announcement[];
  // searchProject: FormControl = new FormControl('');
  term: any;
  p: number = 1;

  constructor(
    private modalService: NgbModal,
    private announcementService: announcementService,
  ) { }

  ngOnInit(): void {
    this.getAnnouncement();
  }

  getAnnouncement() {
    this.announcementService.getList().subscribe(announcement => this.announcements = announcement);
  }

  createAnnouncement(): void {
    const modalRef = this.modalService.open(CreateAnnouncementComponent, { centered: true });
    modalRef.closed.pipe(
      switchMap(announcement => this.announcementService.createOne(announcement))
    ).subscribe(() =>
      this.getAnnouncement()
    );
  }

}
