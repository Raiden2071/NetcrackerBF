import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { sha256 } from 'js-sha256';
import { ToastrService } from 'ngx-toastr';
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
    firstName:        ['', [Validators.minLength(2), Validators.maxLength(20), Validators.required]],
    lastName:         ['', [Validators.minLength(2), Validators.maxLength(20), Validators.required]],
    email:            ['', [Validators.email, Validators.maxLength(30), Validators.required]],
    password:         ['', [Validators.minLength(8), Validators.required]],
    confirmPassword:  ['', [Validators.required]]
  }, {
    validator:  MustMatch('password', 'confirmPassword')
  });

  constructor(
    private fb: FormBuilder,
    private authService: AuthService,
    private router: Router,
    private toastr: ToastrService
  ) { }

  ngOnInit(): void {        
    this.registerForm.valueChanges.subscribe(() => this.showErrors = false);
  }
  
  onSubmit(): void {
    if(this.registerForm.valid) {
      const data = {
        firstName:        this.registerForm.value.firstName,
        lastName:         this.registerForm.value.lastName,    
        email:            this.registerForm.value.email,    
        password:         sha256(this.registerForm.value.password),
        confirmPassword:  sha256(this.registerForm.value.confirmPassword)
      };            
      this.authService.register(data).subscribe(() => 
        this.toastr.info(`We have sent a link to restore access to your account to the address ${this.registerForm.value.email}.`, '', {
          timeOut: 2000,
        })
      );
      this.router.navigateByUrl('/auth/login');
    }
    else {
      this.showErrors = true;
      console.log('not valid');
    }
  }

}
