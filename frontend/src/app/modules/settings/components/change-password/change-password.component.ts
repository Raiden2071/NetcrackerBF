import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/models/user';

@Component({
  selector: 'app-change-password',
  templateUrl: './change-password.component.html',
  styleUrls: ['./change-password.component.scss']
})

export class ChangePasswordComponent implements OnInit {

  user: User;
  constructor() { }

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
