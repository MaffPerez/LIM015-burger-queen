import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
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
  constructor(
    private authService:AuthService,
    private router: Router
    ) { }

  ngOnInit(): void {
  }

  Ingresar(){
      const{email,password} = this.usuario;
      this.authService.login(email,password)
      .then(res => {
        if (res !== null){
          console.log("Has iniciado sesión correctamente", res.user);
          if(email === 'mesero@bq.pe'){
            console.log('vista de mesero')
            this.router.navigateByUrl('viewserver/statusorder');
          } else {
            console.log('vista de chef');
            this.router.navigateByUrl('viewchef');
          }
        } else {
          console.log("Inicio de sesión fallido");
        }
      })

      }

}



