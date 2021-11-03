import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth'

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(public afauth:AngularFireAuth) { }

  async login(email:string, password:string){
    try{
      return await this.afauth.signInWithEmailAndPassword(email,password)
    } catch(error){
      alert(error)
      return null;
    }
  }

}
