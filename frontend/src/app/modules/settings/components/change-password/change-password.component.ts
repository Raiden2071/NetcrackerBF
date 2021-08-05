import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { NgbActiveModal, NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { User } from 'src/app/models/user';
import { RecoveryComponent } from 'src/app/modules/auth/components/recovery/recovery.component';
import { MustMatch } from 'src/app/modules/auth/validators/must-match.validator';
import { UserService } from 'src/app/shared/services/users.service';

@Component({
  selector: 'app-change-password',
  templateUrl: './change-password.component.html',
  styleUrls: ['./change-password.component.scss']
})

export class ChangePasswordComponent implements OnInit {

  user: User;
  changeForm = this.fb.group({
    oldPass:      ['', [Validators.required]], 
    newPass:      ['', [Validators.required]],
    confirmPass:  ['', [Validators.email, Validators.required]],
  }, {
    validator: MustMatch("newPass", "confirmPass")
  });

  constructor(
    private userService: UserService,
    private fb: FormBuilder,
    private modal: NgbModal
    // private activeModal: NgbActiveModal
  ) { }

  ngOnInit(): void {
    this.getUser();
  }

  getUser(): void {
    this.userService.userInfo$.subscribe(user => this.user = user);
  }

  openRecovery() {
    // this.activeModal.close();
    let modalRef = this.modal.open(RecoveryComponent, { centered: true });
    modalRef.componentInstance.isModal = true;
  }

  onSubmit() {
    // create request form
    if(this.changeForm.valid) {
      console.log(this.changeForm.value);
    }
  }
}
