import { Component, inject } from '@angular/core';
import { Footer } from '../footer/footer';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { ApiService } from '../services/api-service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  imports: [Footer,ReactiveFormsModule],
  templateUrl: './login.html',
  styleUrl: './login.css',
})
export class Login {
  loginForm: FormGroup
  api = inject(ApiService)
  router = inject(Router)

  constructor(private fb: FormBuilder) {
    this.loginForm = this.fb.group({
      email: ["", [Validators.required, Validators.email]],
      password: ["", Validators.required, Validators.pattern('[a-zA-Z0-9]*')]
    })
  }

  login() {

    if (this.loginForm.valid) {
      const email = this.loginForm.value.email
      const password = this.loginForm.value.password
      this.api.loginAPI({email,password}).subscribe({
        next:(res:any)=>{
          sessionStorage.setItem("token",res.token)
          sessionStorage.setItem("user",JSON.stringify(res.user))
          alert("Login Successfull")
          res.user.role=="user"?this.router.navigateByUrl('/'):this.router.navigateByUrl('/admin/home')
          this.loginForm.reset()
        },
        error:(reason:any)=>{
          alert(reason.error)
          this.loginForm.reset()
        }
      })
    } else {
      alert("Invalid Form")
    }

  }
}
