import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router'

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.css']
})
export class AuthComponent implements OnInit {

  constructor( private router : Router) { }

  ngOnInit(): void {
  }

  person = {
    'email' : "",
    'password' : "",
  };
  msg : string = "";
  success : boolean = false;
  fail : boolean = false;

  Ingresar() {
    if (this.person.email == "admin@gmail.com" && this.person.password == "1234") {
      this.msg = "Login correcto";
      console.log(this.msg)

      this.router.navigate(['/home'])
    } else {
      this.msg = "Login incorrecto";
      this.fail = true;
      this.success = false;
      console.log(this.msg)
    }
    return this.msg
  }

}
