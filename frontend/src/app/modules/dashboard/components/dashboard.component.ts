import { Component, OnInit } from '@angular/core';
import { Dashboard } from 'src/app/models/dashboard';
import { Quiz } from 'src/app/models/quiz';
import { User } from 'src/app/models/user';
import { DashboardService } from 'src/app/shared/services/dashboard.service';
import { UserService } from 'src/app/shared/services/users.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

  user: User;
  dashboard: Dashboard;

  constructor(
    private userService: UserService,
    private dashboardService: DashboardService
  ) { }

  ngOnInit(): void {
    this.getUser();
  }

  getUser() {
    this.userService.userInfo$.subscribe(user => this.user = user);
  }

  getDashboard(): void {
    this.dashboardService.getOne(182).subscribe(dashboard => this.dashboard = dashboard );
  }

}
