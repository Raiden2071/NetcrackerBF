import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/models/user';
import { UserService } from '../../services/users.service';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent implements OnInit {

  user: User;

  constructor(
    private userService: UserService
  ) { }

  ngOnInit(): void {
    this.logOut();
    this.getUser();
  }

  getUser() {
    this.userService.userInfo$.subscribe(user => this.user = user);
  }

  logOut() {    
    console.log(123);
    
    localStorage.removeItem('access_token');
    sessionStorage.removeItem('access_token');
  }

}
