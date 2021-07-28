import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SettingsRoutingModule } from './Settings-routing.module';
import { EditProfileComponent } from './components/edit-profile/edit-profile.component';
import { ChangePasswordComponent } from './components/change-password/change-password.component';
import { SelectionMenuComponent } from './components/selection-menu/selection-menu.component';


// ChangePasswordComponent
@NgModule({
  declarations: [EditProfileComponent, ChangePasswordComponent, SelectionMenuComponent, ],
  imports: [
    CommonModule,
    SettingsRoutingModule
  ]
})
export class SettingsModule { }
