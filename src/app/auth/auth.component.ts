import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.css']
})
export class AuthComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  person = {
    'email' : "",
    'password' : "",
  };
  msg : string = "";

  Ingresar() {
    if (this.person.email == "admin@gmail.com" && this.person.password == "1234") {
      this.msg = "Login correcto"
      // this.sucess = true;
      // this.fail = false;

      console.log(this.msg)
    } else {
      this.msg = "Login incorrecto"
      // this.fail = true;
      // this.sucess = false;

      console.log(this.msg)
    }
    return this.msg
  }

}
