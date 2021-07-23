import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/models/user';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

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
