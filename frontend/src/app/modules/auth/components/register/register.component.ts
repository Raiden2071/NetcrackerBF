import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../../services/auth.service';
import { MustMatch } from '../../validators/must-match.validator';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {

  showPassword = false;
  showErrors = false;
  
  registerForm: FormGroup = this.fb.group({
    username: ['1212'],
    firstName:        ['', [Validators.required]],
    lastName:         ['', [Validators.required]],
    email:            ['', [Validators.email, Validators.required]],
    password:         ['', [Validators.minLength(8), Validators.required]],
    confirmPassword:  ['', [Validators.required]]
  },{
    validator:  MustMatch('password', 'confirmPassword')
  });

  constructor(
    private fb: FormBuilder,
    private authService: AuthService,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.registerForm.valueChanges.subscribe(() => this.showErrors = false);
  }
  
  onSubmit(): void {
    if(this.registerForm.valid) {
      this.authService.register(this.registerForm.value).subscribe(data => console.log(data));
      this.router.navigateByUrl('/auth/login');
    }
    else {
      this.showErrors = true;
      console.log('not valid');
      
    }
  }

}
