import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/models/user';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent implements OnInit {

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
