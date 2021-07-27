import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { UserService } from 'src/app/shared/services/users.service';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  showPassword = false;
  showErrors = false;

  loginForm: FormGroup = this.fb.group({
    identifier:    ['', [Validators.email, Validators.required]],
    password: ['', [Validators.minLength(8), Validators.required]],
    remember: [true]
  });

  constructor(
    private router: Router,
    private fb: FormBuilder,
    private authService: AuthService,
    private userService: UserService
    ) { }

  ngOnInit(): void {
    this.loginForm.valueChanges.subscribe(() => this.showErrors = false);
  }

  onSubmit(): void {
    if(this.loginForm.valid) {
      const data = this.loginForm.value;
      this.authService.login(data, data.remember).subscribe(() => {
        // this.userService.userInfo$.subscribe(v => console.log(v));
        // this.userService.subject$.next(1);
        this.router.navigateByUrl('/profile')
      });
    }
    else {
      this.showErrors = true;
    }
    
  }

}
