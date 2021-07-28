import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { User } from 'src/app/models/user';

@Component({
  selector: 'app-edit-profile',
  templateUrl: './edit-profile.component.html',
  styleUrls: ['./edit-profile.component.scss']
})
export class EditProfileComponent implements OnInit {

  user: User;

  editForm: FormGroup = this.fb.group({
    firstName:   ['', [Validators.required]], 
    lastName:    ['', [Validators.required]],
    email:       ['', [Validators.email, Validators.required]],
    description: ['', [Validators.required]]
  });

  constructor(
    private fb: FormBuilder
  ) { }

  ngOnInit(): void {
    (this.user as any) = {
      firstName: "Slava",
      lastName: "Danilchak",
      description: "Slavik like marmalades",
      email: "slava@gmail.com"
    };
  }

  getUser() {
    
  }

}