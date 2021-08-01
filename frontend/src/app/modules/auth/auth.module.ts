import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';
import { AuthRoutingModule } from './auth-routing.module';
import { ReactiveFormsModule } from '@angular/forms';
import { RecoveryComponent } from './recovery/recovery/recovery.component';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';



@NgModule({
  declarations: [
    LoginComponent,
    RegisterComponent,
    RecoveryComponent
  ],
  imports: [
    CommonModule,
    AuthRoutingModule,
    ReactiveFormsModule
  ],
  providers: [NgbActiveModal]
})
export class AuthModule { }
