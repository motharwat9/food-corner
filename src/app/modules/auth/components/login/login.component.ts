import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Login } from 'src/app/modules/shared/interfaces/login';
import { AuthService } from '../../services/auth.service';
import { Register } from 'src/app/modules/shared/interfaces/register';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {
  hidePassword = true;
  loginForm!: FormGroup;
  userRegister: Register[] = [];

  constructor(
    private fb: FormBuilder,
    private auth: AuthService,
    private router: Router,
    private toast:ToastrService
  ) {}

  ngOnInit(): void {
    this.loginForm = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.pattern('[a-zA-Z0-9]{12,}')]],
    });
    this.loadAllUsersRegister();
  }

  get fc() {
    return this.loginForm.controls;
  }

  loadAllUsersRegister() {
    this.auth.getAllUsers().subscribe((res) => {
      this.userRegister = res;
    });
  }

  submit() {
    let formValue: Login = this.loginForm.value;
    let exsitUser = this.userRegister.find(
      (user) =>
        user.email === formValue.email && user.password === formValue.password
    );
    let model: Login = {
      email: formValue.email,
      password: formValue.password,
      userName: exsitUser?.userName,
    };

    if (exsitUser) {
      this.auth.loginUser(model).subscribe((res) => {
        this.router.navigate(['/foods']);
        this.auth.getUserLoggedSub().next(res);
      });
    } else {
      this.toast.error('Error in password and email','error')
      }
  }
}
