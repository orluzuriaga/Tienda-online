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


  //Formulario reactivo
  form:FormGroup = new FormGroup({
    username: new FormControl(null,Validators.required),
    password: new FormControl(null,Validators.required)
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


  //Valida las credenciales del usuario
  private validateLogin(user:User){
    //Valida al usuario, si este es correcto lo redirecciona
    if(user.username === 'admin' && user.password === 'admin'){
       this.router.navigate(['']);
       console.log(this.form.value)
    }else{
      console.error('Credenciales incorrectas')
    }

  }

}
