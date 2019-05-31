import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../auth/auth.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';



@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  loginForm: FormGroup;

  constructor(private fb : FormBuilder, private router: Router, private authService: AuthService, ) { }

  ngOnInit() {
    this.loginForm = this.fb.group(
      {
        username:['', Validators.required, Validators.minLength[3]],
        password:['', Validators.required]
      }
    )
  }

  onSubmit(){
    console.log('Logging in ..')

    if (this.loginForm.valid){
      this.authService.setLoggedin(true);
    }

    this.authService.login().subscribe(result => {
    this.router.navigate(['home/login/todo-overview']);
    })
  }

}
