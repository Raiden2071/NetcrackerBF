import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/models/user';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent implements OnInit {

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

  

}
