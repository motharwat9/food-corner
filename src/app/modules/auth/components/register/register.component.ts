import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Register } from 'src/app/modules/shared/interfaces/register';
import { AuthService } from '../../services/auth.service';
import { PasswordsMatchValidator } from 'src/app/modules/shared/cross-field-validators/passwordMatchConfirmpass';
import { PasswordMatchName } from 'src/app/modules/shared/cross-field-validators/passwordMatchName';
import { ToastrService } from 'ngx-toastr';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss'],
})
export class RegisterComponent implements OnInit {
  registerForm!: FormGroup;
  userRegister: Register[] = [];
  errorMessages: string[] = [];
  isSubmit = false;

  constructor(
    private fb: FormBuilder,
    private auth: AuthService,
    private toast: ToastrService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.registerForm = this.fb.group(
      {
        userName: [
          '',
          [
            Validators.required,
            Validators.pattern('^(?!\\s*$)[A-Za-z\\s]{3,}$'),
          ],
        ],
        email: ['', [Validators.required, Validators.email]],
        password: [
          '',
          [Validators.required, Validators.pattern('[a-zA-Z0-9]{12,}')],
        ],
        confirmPassword: ['', [Validators.required]],
        address: this.fb.array([this.fb.control('', [Validators.required])]),
      },
      {
        validators: [
          PasswordsMatchValidator('password', 'confirmPassword'),
          PasswordMatchName('password', 'userName'),
        ],
      }
    );
    this.loadAllUsers();
  }
  loadAllUsers() {
    this.auth.getAllUsers().subscribe((res) => {
      this.userRegister = res;
    });
  }

  get fc() {
    return this.registerForm.controls;
  }

  submit() {
    this.isSubmit = true;
    let form: Register = this.registerForm.value;
    let model: Register = {
      userName: form.userName,
      email: form.email,
      password: form.password,
      address: form.address,
    };
    let index = this.userRegister.findIndex(
      (user) => user.email === model.email
    );
    if (index !== -1) {
      this.toast.error('Email already exists', 'error');
    } else {
      this.auth.registerUser(model).subscribe((res) => {
        this.toast.success(
          'the account has registered successfully',
          'success'
        );
        this.loadAllUsers();
        this.router.navigate(['/login']);
      });
    }
  }
}
