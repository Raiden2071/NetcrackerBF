import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { UserService } from 'src/app/shared/services/users.service';
// import { User } from 'src/app/models/user';
// import { announcementService } from 'src/app/shared/services/announcement.service';
// import { UserService } from 'src/app/shared/services/users.service';

@Component({
  selector: 'app-create-announcment',
  templateUrl: './create-announcement.html',
  styleUrls: ['./create-announcement.scss']
})
export class CreateAnnouncementComponent implements OnInit {

  annoucementForm: FormGroup;
  showErrors = false;
  userId: number;
  constructor(
    private fb: FormBuilder,
    private activeModal: NgbActiveModal,
    private userService: UserService
  ) { }

  ngOnInit(): void {
    this.getUser();
    this.annoucementForm = this.fb.group({
      title:       ['', [Validators.required]],
      description: ['', [Validators.required]],
      address:     ['', [Validators.required]],
      idUser:      [this.userId]
    });
    this.annoucementForm.valueChanges.subscribe(() => this.showErrors = false);
  }

  getUser(): void {
    this.userService.userInfo$.subscribe(({id}) => this.userId = id);
  }

  addAnnouncement() {
    if(this.annoucementForm.valid) {
      this.activeModal.close(this.annoucementForm.value);
    }
    else {
      this.showErrors = true;
    }
  }

  close(): void {
    this.activeModal.close();
  }
  
}
