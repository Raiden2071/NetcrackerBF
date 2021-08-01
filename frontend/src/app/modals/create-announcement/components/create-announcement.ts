import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
// import { User } from 'src/app/models/user';
// import { announcementService } from 'src/app/shared/services/announcement.service';
// import { UserService } from 'src/app/shared/services/users.service';

@Component({
  selector: 'app-create-announcment',
  templateUrl: './create-announcement.html',
  styleUrls: ['./create-announcement.scss']
})
export class CreateAnnouncementComponent implements OnInit {

  // user: User;
  annoucementForm: FormGroup;

  constructor(
    private fb: FormBuilder,
    private activeModal: NgbActiveModal,
    // private userService: UserService
  ) { }

  ngOnInit(): void {
    // this.getUser();
    // delete owner and date
    this.annoucementForm = this.fb.group({
      title:       ['', [Validators.minLength(5), Validators.required]],
      description: ['', [Validators.minLength(5), Validators.required]],
      address:     ['', [Validators.required]]
    });
  }

  // getUser() {
  //   this.userService.userInfo$.subscribe(user => this.user = user);
  // }

  addAnnouncement() {
    console.log(this.annoucementForm.value);
    this.activeModal.close(this.annoucementForm.value);
  }

  close(): void {
    this.activeModal.close();
  }

}
