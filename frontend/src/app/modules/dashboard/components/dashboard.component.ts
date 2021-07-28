import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/models/user';
import { UserService } from 'src/app/shared/services/users.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

  user: User;

  constructor(
    private userService: UserService
  ) { }

  ngOnInit(): void {
    this.getUser();
    // (this.user as any) = {
    //   firstName: "Slava",
    //   lastName: "Danilchak",
    //   description: "Slavik like marmalades",
    //   email: "slava@gmail.com"
    // };
  }

  getUser() {
    // this.UserService.getMe().subscribe(user => this.user = user);

    this.userService.userInfo$.subscribe(user => this.user = user);
  }

}
