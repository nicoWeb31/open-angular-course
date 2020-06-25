import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  isAuth:boolean = false;

  constructor() { }


  signIn(){
    return new Promise((resolve,reject)=>{
      setTimeout(()=>{this.isAuth = true, resolve(true)},2000)
    })
  }


  signout(){
    this.isAuth = false
  }

}
