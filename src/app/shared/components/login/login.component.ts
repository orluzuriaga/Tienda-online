import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import {  Router } from '@angular/router';
import { User } from '../../models/user';

@Component({
  selector: 'ed-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {


  form:FormGroup = new FormGroup({
    username: new FormControl(null,Validators.required),
    password: new FormControl(null,[Validators.required, Validators.minLength(8)])
  })




  constructor(private router:Router) { }

  ngOnInit(): void {
  }

  Enviar(){

    if(this.form.valid){
      console.log(`Enviando formulario ${this.form.valid}`)
      this.validateLogin(this.form.value)
    }
  }

  private validateLogin(user:User){
    if(user.username === 'admin' && user.password === 'admin'){
       this.router.navigate(['']);
    }
  }

}
