import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  usuario = {
    email: '',
    password: ''
  }
  constructor(private authService:AuthService) { }

  ngOnInit(): void {
  }

  Ingresar(){
      const{email,password} = this.usuario;
      this.authService.login(email,password)
      .then(res => {
        if (res !== null){
          console.log("usuario logeado", res.user);
          if(email === 'mesero@bq.pe'){
            console.log('vista de mesero')
          } else {
            console.log('vista de chef')
          }
        } else {
          console.log("no existe el usuario");
        }
      })

      }

}



