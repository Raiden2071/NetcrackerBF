import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-create-announcment',
  templateUrl: './create-announcement.html',
  styleUrls: ['./create-announcement.scss']
})
export class CreateAnnouncementComponent implements OnInit {

  annoucementForm: FormGroup = this.fb.group({
    title:       ['', [Validators.minLength(5), Validators.required]],
    description: ['', [Validators.minLength(20), Validators.required]]
  });

  constructor(
    private fb: FormBuilder,
    private activeModal: NgbActiveModal
  ) { }

  ngOnInit(): void {
  }

  close(): void {
    this.activeModal.close();
  }
}
