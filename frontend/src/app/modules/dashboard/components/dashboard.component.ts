import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { switchMap, tap } from 'rxjs/operators';
import { Announcement } from 'src/app/models/announcements';
import { Dashboard } from 'src/app/models/dashboard';
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
    this.userService.userInfo$.pipe(
      tap(user => this.user = user),
      switchMap(({id}) => this.dashboardService.getOne(id))
    ).subscribe(dashboard => this.dashboard = dashboard);
  }

  // getDashboard(id): void {
  //   this.dashboardService.getOne(id).subscribe(dashboard => this.dashboard = dashboard);
  // }

}
