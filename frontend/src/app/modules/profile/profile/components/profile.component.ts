import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/models/user';
import { UsersService } from 'src/app/shared/services/users.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent implements OnInit {

  user: User;
  constructor(
    private usersService: UsersService,
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
    this.usersService.userInfo$.subscribe((user) => {
      this.user = user;
      console.log(user);
    });
    this.usersService.subject$.next(1);
  }

}
